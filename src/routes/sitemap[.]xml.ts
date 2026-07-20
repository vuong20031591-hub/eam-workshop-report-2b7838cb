import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllSlugs } from "@/lib/workshop-content";

const BASE_URL = "https://eam-workshop-report.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const slugs = getAllSlugs("en");
        const paths = ["/", ...slugs.filter((s) => s !== "").map((s) => `/${s}`)];
        const urls = paths.map(
          (p) =>
            `  <url>\n    <loc>${BASE_URL}${p === "/" ? "" : p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});