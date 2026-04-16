import type { Metadata } from "next";
import CheckoutPage from "@/components/checkout/CheckoutPage";

export const metadata: Metadata = {
  title: "Thanh Toán — Hoàn Tất Đơn Hàng",
  description: "Hoàn tất đơn hàng yoga của bạn. Thanh toán an toàn, bảo mật tuyệt đối.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CheckoutPage />;
}
