import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yogalamhuong.vn";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/classes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/retreats`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/shop`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Blog posts
    { url: `${baseUrl}/blog/hatha-yoga-nguoi-moi`, lastModified: new Date("2026-04-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/thien-dinh-10-phut`, lastModified: new Date("2026-04-08"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/tham-yoga-tot-nhat-2026`, lastModified: new Date("2026-04-05"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/yin-yoga-chua-lanh`, lastModified: new Date("2026-03-29"), changeFrequency: "monthly", priority: 0.6 },
  ];
}
