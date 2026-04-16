import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/checkout", "/api/"],
      },
    ],
    sitemap: "https://yogalamhuong.vn/sitemap.xml",
    host: "https://yogalamhuong.vn",
  };
}
