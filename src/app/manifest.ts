import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yoga Lam Hương — Luxury Yoga",
    short_name: "Yoga Lam Hương",
    description: "Trải nghiệm yoga đẳng cấp tại Yoga Lam Hương Vietnam",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#d4af6a",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
