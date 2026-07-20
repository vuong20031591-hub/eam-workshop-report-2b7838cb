import { marked } from "marked";

export type Locale = "en" | "vi";

export interface Frontmatter {
  title?: string;
  weight?: number;
  chapter?: boolean;
  pre?: string;
  [k: string]: unknown;
}

export interface WorkshopEntry {
  slug: string; // e.g. "" (root), "1-worklog", "1-worklog/1.1-week1"
  locale: Locale;
  frontmatter: Frontmatter;
  html: string;
  parentSlug: string | null;
}

export interface TreeNode {
  slug: string;
  title: string;
  pre?: string;
  weight: number;
  description?: string;
  children: TreeNode[];
}

function extractDescription(html: string): string {
  const paragraphs = html.match(/<p[\s\S]*?<\/p>/gi) ?? [];
  for (const p of paragraphs) {
    // skip paragraphs that are just a link/list-reference
    const text = p.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!text) continue;
    if (text.length < 20) continue;
    return text.length > 160 ? text.slice(0, 157) + "..." : text;
  }
  return "";
}


// --- Frontmatter parser (minimal YAML, key: value) ---
function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, yaml, content] = match;
  const data: Frontmatter = {};
  for (const line of yaml.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val: string = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (val === "true" || val === "false") {
      data[key] = val === "true";
    } else if (/^-?\d+(\.\d+)?$/.test(val)) {
      data[key] = Number(val);
    } else {
      data[key] = val;
    }
  }
  return { data, content };
}

// --- Hugo shortcode preprocessing ---
function preprocessShortcodes(md: string): string {
  let out = md;

  // {{% notice TYPE %}} ... {{% /notice %}}
  out = out.replace(
    /\{\{%\s*notice\s+(warning|info|tip|note)\s*%\}\}([\s\S]*?)\{\{%\s*\/notice\s*%\}\}/g,
    (_m, type, body) => {
      return `\n\n<div class="notice notice-${type}">\n\n${body.trim()}\n\n</div>\n\n`;
    },
  );

  // {{< figure src="..." title="..." >}}
  out = out.replace(/\{\{<\s*figure\s+([^>]+?)\s*>\}\}/g, (_m, attrs) => {
    const src = /src\s*=\s*"([^"]+)"/.exec(attrs)?.[1] ?? "";
    const title = /title\s*=\s*"([^"]*)"/.exec(attrs)?.[1] ?? "";
    const alt = /alt\s*=\s*"([^"]*)"/.exec(attrs)?.[1] ?? title;
    return `<figure><img src="${rewriteAssetUrl(src)}" alt="${alt}" />${
      title ? `<figcaption>${title}</figcaption>` : ""
    }</figure>`;
  });

  // Strip any remaining shortcodes {{% ... %}} and {{< ... >}}
  out = out.replace(/\{\{[%<][\s\S]*?[%>]\}\}/g, "");

  return out;
}

function rewriteAssetUrl(url: string): string {
  if (!url) return url;
  if (/^(https?:)?\/\//.test(url)) return url;
  if (url.startsWith("/workshop-static/")) return url;
  if (url.startsWith("/images/")) return `/workshop-static${url}`;
  if (url.startsWith("images/")) return `/workshop-static/${url}`;
  if (url.startsWith("/")) return `/workshop-static${url}`;
  return url;
}

function rewriteMarkdownAssets(md: string): string {
  // ![alt](/path)
  return md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, url) => {
    return `![${alt}](${rewriteAssetUrl(url.trim())})`;
  });
}

// --- Slug helpers ---
function toSlug(segment: string): string {
  return segment.toLowerCase();
}

interface RawFile {
  path: string; // e.g. "1-Worklog/1.1-Week1/_index.md"
  raw: string;
}

function parseFileToEntry(file: RawFile): WorkshopEntry {
  const parts = file.path.split("/");
  const filename = parts.pop() ?? "_index.md";
  const locale: Locale = filename === "_index.vi.md" ? "vi" : "en";
  const dirSegments = parts;
  const slug = dirSegments.map(toSlug).join("/");
  const parentSlug =
    dirSegments.length === 0
      ? null
      : dirSegments.slice(0, -1).map(toSlug).join("/");

  const { data, content } = parseFrontmatter(file.raw);
  const processed = preprocessShortcodes(rewriteMarkdownAssets(content));
  const html = marked.parse(processed, { async: false }) as string;

  return {
    slug,
    locale,
    frontmatter: data,
    html,
    parentSlug,
  };
}

// --- Load all content at module scope (build-time inlined) ---
const rawModules = import.meta.glob("/src/content/workshop/**/_index*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const allEntries: WorkshopEntry[] = Object.entries(rawModules).map(
  ([absPath, raw]) => {
    const rel = absPath.replace("/src/content/workshop/", "");
    return parseFileToEntry({ path: rel, raw });
  },
);

const byLocale: Record<Locale, Map<string, WorkshopEntry>> = {
  en: new Map(),
  vi: new Map(),
};
for (const entry of allEntries) {
  byLocale[entry.locale].set(entry.slug, entry);
}

// --- Build tree per locale (fallback to EN metadata if VI missing) ---
function buildTree(locale: Locale): TreeNode[] {
  const primary = byLocale[locale];
  const fallback = byLocale.en;

  const allSlugs = new Set<string>([
    ...primary.keys(),
    ...fallback.keys(),
  ]);

  const nodes = new Map<string, TreeNode>();
  for (const slug of allSlugs) {
    const entry = primary.get(slug) ?? fallback.get(slug);
    if (!entry) continue;
    nodes.set(slug, {
      slug,
      title: String(entry.frontmatter.title ?? slug),
      pre: entry.frontmatter.pre as string | undefined,
      weight: Number(entry.frontmatter.weight ?? 0),
      description: extractDescription(entry.html),
      children: [],
    });

  }

  const roots: TreeNode[] = [];
  for (const [slug, node] of nodes) {
    if (slug === "") continue;
    const parts = slug.split("/");
    if (parts.length === 1) {
      roots.push(node);
      continue;
    }
    const parentSlug = parts.slice(0, -1).join("/");
    const parent = nodes.get(parentSlug);
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const naturalCmp = (a: string, b: string) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
  const sortRec = (arr: TreeNode[]) => {
    arr.sort((a, b) => a.weight - b.weight || naturalCmp(a.slug, b.slug));
    arr.forEach((n) => sortRec(n.children));
  };
  sortRec(roots);

  return roots;
}

const treeEn = buildTree("en");
const treeVi = buildTree("vi");

// --- Flat ordered list for prev/next ---
function flatten(tree: TreeNode[]): string[] {
  const out: string[] = [];
  const walk = (nodes: TreeNode[]) => {
    for (const n of nodes) {
      out.push(n.slug);
      walk(n.children);
    }
  };
  walk(tree);
  return out;
}
const flatEn = flatten(treeEn);
const flatVi = flatten(treeVi);

// --- Public API ---
export function getTree(locale: Locale): TreeNode[] {
  return locale === "vi" ? treeVi : treeEn;
}

export function getEntry(
  slug: string,
  locale: Locale,
): WorkshopEntry | undefined {
  return byLocale[locale].get(slug) ?? byLocale.en.get(slug);
}

export function getPrevNext(
  slug: string,
  locale: Locale,
): { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null } {
  const flat = locale === "vi" ? flatVi : flatEn;
  const idx = flat.indexOf(slug);
  const toRef = (s: string | undefined) => {
    if (s == null) return null;
    const e = getEntry(s, locale);
    return e ? { slug: s, title: String(e.frontmatter.title ?? s) } : null;
  };
  if (idx === -1) return { prev: null, next: null };
  return { prev: toRef(flat[idx - 1]), next: toRef(flat[idx + 1]) };
}

export function getRootEntry(locale: Locale): WorkshopEntry | undefined {
  return getEntry("", locale);
}

export function getAllSlugs(locale: Locale = "en"): string[] {
  return locale === "vi" ? flatVi : flatEn;
}
