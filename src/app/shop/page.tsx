import type { Metadata } from "next";
import ShopPage from "@/components/shop/ShopPage";

export const metadata: Metadata = {
  title: "Shop Yoga Cao Cấp — Thảm, Đồ Tập, Phụ Kiện",
  description:
    "Mua sắm thảm yoga, đồ yoga, phụ kiện thiền định và sản phẩm sức khoẻ cao cấp tại Yoga Lam Hương. Hàng chính hãng, chất lượng premium, giao hàng toàn quốc.",
  alternates: { canonical: "https://yogalamhuong.vn/shop" },
  openGraph: {
    title: "Shop Yoga Cao Cấp | Yoga Lam Hương",
    description: "Thảm yoga, đồ tập, phụ kiện yoga chất lượng cao nhất Việt Nam.",
    images: [{ url: "/yoga-products.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ShopPage />;
}
