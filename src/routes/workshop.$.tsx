import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo, useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  PenLine,
  Calendar,
  Wrench,
  CheckCircle2,
  MessageSquare,
  Search,
  ChevronRight,
  ChevronDown,
  Check,
  Facebook,
  Globe,
  RotateCcw,
  Folder,
  Menu,
  X,
} from "lucide-react";

import {
  getEntry,
  getPrevNext,
  getTree,
  type Locale,
  type TreeNode,
} from "@/lib/workshop-content";

const searchSchema = z.object({
  lang: fallback(z.string(), "en").default("en"),
});

export const Route = createFileRoute("/workshop/$")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ params, deps }) => {
    const slug = (params._splat ?? "").replace(/\/+$/, "");
    const locale: Locale = deps.lang === "vi" ? "vi" : "en";
    const entry = getEntry(slug, locale);
    if (!entry) throw notFound();
    const { prev, next } = getPrevNext(slug, locale);
    return {
      slug,
      locale,
      entry,
      prev,
      next,
      tree: getTree(locale),
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.entry.frontmatter.title ?? "Workshop"} — Internship Report`,
          },
        ]
      : [{ title: "Internship Report" }],
  }),
  component: WorkshopPage,
  notFoundComponent: () => (
    <div className="p-8 text-center text-muted-foreground">
      Không tìm thấy trang này.{" "}
      <Link
        to="/workshop/$"
        params={{ _splat: "" }}
        className="text-primary underline"
      >
        Về trang chủ workshop
      </Link>
    </div>
  ),
});

// Map top-level slug -> icon
function iconForSlug(slug: string) {
  const top = slug.split("/")[0];
  if (top === "1-worklog") return BookOpen;
  if (top === "2-proposal") return FileText;
  if (top === "3-blogsposted") return PenLine;
  if (top === "4-eventparticipated") return Calendar;
  if (top === "5-workshop") return Wrench;
  if (top === "6-self-evaluation") return CheckCircle2;
  if (top === "7-feedback") return MessageSquare;
  return FileText;
}

function findNode(nodes: TreeNode[], slug: string): TreeNode | null {
  for (const n of nodes) {
    if (n.slug === slug) return n;
    const c = findNode(n.children, slug);
    if (c) return c;
  }
  return null;
}

function stripListsAndLinks(html: string): string {
  let out = html;
  out = out.replace(/<ul[\s\S]*?<\/ul>/gi, "");
  out = out.replace(/<ol[\s\S]*?<\/ol>/gi, "");
  // Remove paragraphs that are mostly links (child list references)
  out = out.replace(/<p>[\s\S]*?<\/p>/gi, (m) =>
    /<a\s[^>]*href=/i.test(m) ? "" : m,
  );
  return out;
}

function WorkshopPage() {
  const { entry, tree, prev, next, slug, locale } = Route.useLoaderData();
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const filteredTree = useMemo(
    () => filterTree(tree, query.trim().toLowerCase()),
    [tree, query],
  );
  const isRoot = slug === "";
  const currentNode = useMemo(() => findNode(tree, slug), [tree, slug]);
  const isSection = !isRoot && !!currentNode && currentNode.children.length > 0;
  const introHtml = useMemo(
    () => (isSection ? stripListsAndLinks(entry.html) : ""),
    [isSection, entry.html],
  );
  const breadcrumbs = useMemo(() => {
    if (isRoot) return [] as TreeNode[];
    const parts = slug.split("/");
    const acc: TreeNode[] = [];
    for (let i = 0; i < parts.length; i++) {
      const s = parts.slice(0, i + 1).join("/");
      const n = findNode(tree, s);
      if (n) acc.push(n);
    }
    return acc;
  }, [isRoot, slug, tree]);
  const closeSidebar = () => setSidebarOpen(false);


  return (
    <div className={`fcaj-shell ${sidebarOpen ? "fcaj-sidebar-open" : ""}`}>
      <button
        type="button"
        className="fcaj-menu-btn"
        aria-label="Toggle navigation"
        onClick={() => setSidebarOpen((v) => !v)}
      >
        {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <button
        type="button"
        className="fcaj-backdrop"
        aria-label="Close navigation"
        onClick={closeSidebar}
      />
      <aside className="fcaj-sidebar" onClick={closeSidebar}>
        <div className="fcaj-sidebar-brand">
          <div className="fcaj-brand-logo">
            <span className="fcaj-brand-aws">aws</span>
            <span className="fcaj-brand-smile" aria-hidden />
          </div>
          <div className="fcaj-brand-tag">
            <span className="fcaj-brand-tag-1">first cloud</span>
            <span className="fcaj-brand-tag-2">AI</span>
            <span className="fcaj-brand-tag-3">journey</span>
          </div>
        </div>

        <div className="fcaj-search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <nav className="fcaj-nav">
          <Link
            to="/workshop/$"
            params={{ _splat: "" }}
            search={{ lang: locale }}
            className={`fcaj-nav-item fcaj-nav-top ${isRoot ? "is-active" : ""}`}
          >
            <Home size={18} className="fcaj-nav-icon" />
            <span className="fcaj-nav-label">Internship Report</span>
            {isRoot && <Check size={16} className="fcaj-nav-check" />}
          </Link>

          <ul className="fcaj-nav-list">
            {filteredTree.map((node) => (
              <SidebarNode
                key={node.slug}
                node={node}
                activeSlug={slug}
                locale={locale}
                depth={0}
              />
            ))}
          </ul>
        </nav>

        <div className="fcaj-sidebar-footer">
          <a
            href="https://www.facebook.com/groups/awsstudygroupfcj"
            target="_blank"
            rel="noreferrer"
            className="fcaj-foot-link"
          >
            <Facebook size={16} /> <span>AWS Study Group</span>
          </a>
          <LangToggle current={locale} slug={slug} />
          <Link
            to="/workshop/$"
            params={{ _splat: "" }}
            search={{ lang: locale }}
            className="fcaj-foot-link"
          >
            <RotateCcw size={16} /> <span>Reset Progress</span>
            <span className="fcaj-badge fcaj-badge-count">1</span>
          </Link>
          <div className="fcaj-foot-meta">
            <span className="fcaj-foot-meta-label">LAST UPDATED</span>
            <span className="fcaj-foot-meta-value">
              {new Date().toLocaleDateString("en-GB").replace(/\//g, "/")}
            </span>
          </div>
        </div>
      </aside>

      <main className="fcaj-main">
        {!isRoot && (
          <nav className="fcaj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/workshop/$" params={{ _splat: "" }} search={{ lang: locale }} className="fcaj-breadcrumb-home">
              <Home size={14} />
            </Link>
            {breadcrumbs.map((n, i) => (
              <span key={n.slug} className="fcaj-breadcrumb-item">
                <ChevronRight size={14} className="fcaj-breadcrumb-sep" />
                {i === breadcrumbs.length - 1 ? (
                  <span>{n.title}</span>
                ) : (
                  <Link to="/workshop/$" params={{ _splat: n.slug }} search={{ lang: locale }}>
                    {n.title}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="fcaj-header">
          {isSection && (
            <span className="fcaj-h1-icon">
              {(() => {
                const Icon = iconForSlug(slug);
                return <Icon size={22} />;
              })()}
            </span>
          )}
          <h1 className="fcaj-h1">
            {String(entry.frontmatter.title ?? "Internship Report")}
          </h1>
          {isRoot && (
            <p className="fcaj-subtitle">First Cloud AI Journey @ AWS Vietnam</p>
          )}
        </div>

        {isRoot ? (
          <RootHero html={entry.html} />
        ) : isSection ? (
          <>
            {introHtml.trim() && (
              <div
                className="fcaj-section-intro"
                dangerouslySetInnerHTML={{ __html: introHtml }}
              />
            )}
            <div className="fcaj-num-grid">
              {currentNode!.children.map((child, idx) => (
                <Link
                  key={child.slug}
                  to="/workshop/$"
                  params={{ _splat: child.slug }}
                  search={{ lang: locale }}
                  className="fcaj-num-card"
                >
                  <span className="fcaj-num-badge">{idx + 1}</span>
                  <span className="fcaj-num-arrow">
                    <ChevronRight size={16} />
                  </span>
                  <span className="fcaj-num-title">{child.title}</span>
                  {child.description && (
                    <span className="fcaj-num-desc">{child.description}</span>
                  )}

                </Link>
              ))}
            </div>
          </>
        ) : (
          <article
            className="fcaj-prose"
            dangerouslySetInnerHTML={{ __html: entry.html }}
          />
        )}

        {isRoot && tree.length > 0 && (
          <section className="fcaj-report-content">
            <div className="fcaj-report-heading">
              <span className="fcaj-report-icon">
                <Folder size={20} />
              </span>
              <h2>Report Content</h2>
            </div>
            <div className="fcaj-report-grid">
              {tree.map((node: TreeNode) => {
                const Icon = iconForSlug(node.slug);
                return (
                  <Link
                    key={node.slug}
                    to="/workshop/$"
                    params={{ _splat: node.slug }}
                    search={{ lang: locale }}
                    className="fcaj-report-card"
                  >
                    <span className="fcaj-report-card-icon">
                      <Icon size={20} />
                    </span>
                    <span className="fcaj-report-card-title">{node.title}</span>
                    <ChevronRight size={18} className="fcaj-report-card-chev" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>


      {prev && (
        <Link
          to="/workshop/$"
          params={{ _splat: prev.slug }}
          search={{ lang: locale }}
          className="fcaj-fab fcaj-fab-prev"
          aria-label={`Previous: ${prev.title}`}
        >
          <ChevronRight size={26} style={{ transform: "rotate(180deg)" }} />
        </Link>
      )}
      {next && (
        <Link
          to="/workshop/$"
          params={{ _splat: next.slug }}
          search={{ lang: locale }}
          className="fcaj-fab fcaj-fab-next"
          aria-label={`Next: ${next.title}`}
        >
          <ChevronRight size={26} />
        </Link>
      )}
    </div>
  );
}
function RootHero({ html }: { html: string }) {
  // Extract notice
  const noticeMatch = html.match(/<div class="notice[\s\S]*?<\/div>\s*<\/div>/);
  const notice = noticeMatch ? noticeMatch[0] : "";

  // Extract avatar src
  const imgMatch = html.match(/<img[^>]+src="([^"]+)"/);
  const avatarSrc = imgMatch ? imgMatch[1] : "/workshop-static/images/avatar.png";

  // Extract "Label: value" pairs
  const infoRegex = /<strong>([^<]+?):\s*<\/strong>([\s\S]*?)(?=<strong>|<\/p>|<p>|<h)/g;
  const fields: { label: string; value: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = infoRegex.exec(html)) !== null) {
    const label = m[1].trim();
    const value = m[2].replace(/<[^>]+>/g, "").replace(/&emsp;/g, "").trim();
    if (!value) continue;
    if (/note/i.test(label) || /copy/i.test(value)) continue;
    fields.push({ label, value });
  }

  return (
    <div className="fcaj-root-hero">
      {notice && (
        <div
          className="fcaj-prose"
          dangerouslySetInnerHTML={{ __html: notice }}
        />
      )}
      <div className="fcaj-hero-grid">
        <div className="fcaj-hero-avatar">
          <img src={avatarSrc} alt="Student avatar" />
        </div>
        <div className="fcaj-hero-info">
          <h2>Student Information</h2>
          <div className="fcaj-hero-info-underline" />
          <dl>
            {fields.map((f) => (
              <div key={f.label} className="fcaj-hero-info-row">
                <dt>{f.label}:</dt>
                <dd
                  dangerouslySetInnerHTML={{
                    __html: f.value.replace(
                      /([\w.+-]+@[\w.-]+\.[a-z]{2,})/i,
                      '<a href="mailto:$1">$1</a>',
                    ),
                  }}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}


function LangToggle({ current, slug }: { current: Locale; slug: string }) {
  const other: Locale = current === "vi" ? "en" : "vi";
  return (
    <Link
      to="/workshop/$"
      params={{ _splat: slug }}
      search={{ lang: other }}
      className="fcaj-foot-link"
    >
      <Globe size={16} />
      <span>{current === "en" ? "English" : "Tiếng Việt"}</span>
      <span className="fcaj-badge fcaj-badge-lang">{current.toUpperCase()}</span>
    </Link>
  );
}

function filterTree(nodes: TreeNode[], q: string): TreeNode[] {
  if (!q) return nodes;
  const out: TreeNode[] = [];
  for (const n of nodes) {
    const kids = filterTree(n.children, q);
    if (n.title.toLowerCase().includes(q) || kids.length > 0) {
      out.push({ ...n, children: kids });
    }
  }
  return out;
}

function SidebarNode({
  node,
  activeSlug,
  locale,
  depth,
}: {
  node: TreeNode;
  activeSlug: string;
  locale: Locale;
  depth: number;
}) {
  const isActive = activeSlug === node.slug;
  const isAncestor =
    activeSlug === node.slug || activeSlug.startsWith(node.slug + "/");
  const hasChildren = node.children.length > 0;
  const Icon = depth === 0 ? iconForSlug(node.slug) : null;

  return (
    <li className="fcaj-nav-li">
      <Link
        to="/workshop/$"
        params={{ _splat: node.slug }}
        search={{ lang: locale }}
        className={`fcaj-nav-item ${isActive ? "is-active" : ""} ${
          isAncestor ? "is-ancestor" : ""
        }`}
        style={{ paddingLeft: `${1 + depth * 0.9}rem` }}
      >
        {Icon && <Icon size={18} className="fcaj-nav-icon" />}
        <span className="fcaj-nav-label">
          {(() => {
            const num = (node.pre ?? "").replace(/<[^>]+>/g, "").trim();
            return num ? `${num} ${node.title}` : node.title;
          })()}
        </span>
        {hasChildren ? (
          isAncestor ? (
            <ChevronDown size={14} className="fcaj-nav-chev" />
          ) : (
            <ChevronRight size={14} className="fcaj-nav-chev" />
          )
        ) : isActive ? (
          <Check size={16} className="fcaj-nav-check" />
        ) : null}
      </Link>
      {hasChildren && isAncestor && (
        <ul className="fcaj-nav-list fcaj-nav-sub">
          {node.children.map((child) => (
            <SidebarNode
              key={child.slug}
              node={child}
              activeSlug={activeSlug}
              locale={locale}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
