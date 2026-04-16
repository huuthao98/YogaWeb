import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ — Đặt Lịch Yoga & Tư Vấn",
  description:
    "Liên hệ Yoga Lam Hương để đặt lịch học, tư vấn retreat hoặc mua sản phẩm yoga. Chúng tôi luôn sẵn sàng đồng hành cùng hành trình tỉnh thức của bạn.",
  alternates: { canonical: "https://yogalamhuong.vn/contact" },
};

const infoItems = [
  { icon: "📍", title: "Địa Chỉ", lines: ["123 Đường Nguyễn Huệ, Quận 1", "TP. Hồ Chí Minh, Việt Nam"] },
  { icon: "📞", title: "Điện Thoại", lines: ["+84 28 1234 5678", "+84 90 123 4567 (Zalo/WhatsApp)"] },
  { icon: "✉️", title: "Email", lines: ["hello@yogalamhuong.vn", "retreat@yogalamhuong.vn"] },
  { icon: "🕐", title: "Giờ Làm Việc", lines: ["Thứ 2 – Thứ 6: 6:00 – 21:00", "Thứ 7 – CN: 7:00 – 19:00"] },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section style={{
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        background: "linear-gradient(180deg, #0a0a20 0%, var(--color-obsidian) 100%)",
      }}>
        <div className="section-label">Liên Hệ</div>
        <h1 className="section-title">
          Chúng Tôi Luôn <em className="text-gradient-gold">Lắng Nghe</em>
        </h1>
        <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
          Bạn có câu hỏi về khóa học, retreat hay sản phẩm yoga?
          Đội ngũ Yoga Lam Hương sẵn sàng hỗ trợ bạn 24/7.
        </p>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "var(--color-obsidian)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "2rem" }}>
                Thông Tin
              </h2>
              {infoItems.map((info) => (
                <div key={info.title} style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "2rem",
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{info.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      color: "var(--color-gold)",
                    }}>{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line} style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{
        height: "400px",
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a0c2e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid rgba(212,175,106,0.1)",
      }}>
        <div style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}>📍</div>
          <p style={{ fontSize: "0.9rem" }}>Bản đồ — 123 Nguyễn Huệ, Q.1, TP.HCM</p>
        </div>
      </section>
    </div>
  );
}
