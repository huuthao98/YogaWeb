import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khóa Học Yoga — Hatha, Vinyasa, Yin, Ashtanga",
  description:
    "Khám phá các khóa học yoga đa dạng tại Yoga Lam Hương: Hatha, Vinyasa Flow, Yin Yoga, Ashtanga, Thiền Định và Yoga Tiền Sản. Phù hợp cho mọi cấp độ từ người mới đến nâng cao.",
  alternates: { canonical: "https://yogalamhuong.vn/classes" },
};

const schedule = [
  { day: "Thứ 2", classes: ["06:00 Hatha", "09:00 Yin", "18:00 Vinyasa", "20:00 Thiền Định"] },
  { day: "Thứ 3", classes: ["06:30 Ashtanga", "10:00 Hatha", "18:30 Yin", "20:00 Pranayama"] },
  { day: "Thứ 4", classes: ["06:00 Vinyasa", "09:00 Thai Sản", "18:00 Hatha", "20:00 Yin"] },
  { day: "Thứ 5", classes: ["06:30 Ashtanga", "10:00 Yin", "18:30 Vinyasa", "20:00 Thiền Định"] },
  { day: "Thứ 6", classes: ["06:00 Hatha", "09:00 Vinyasa", "18:00 Yin", "20:00 Sound Healing"] },
  { day: "Thứ 7", classes: ["07:00 Ashtanga", "09:30 Hatha", "10:30 Vinyasa", "16:00 Yin"] },
  { day: "Chủ Nhật", classes: ["07:00 Thiền Định", "09:00 Hatha", "10:30 Yin & Sound", "15:00 Workshop"] },
];

const packages = [
  { name: "Thử Nghiệm", price: "Miễn phí", period: "1 buổi", features: ["1 buổi học tự chọn", "Tư vấn cá nhân", "Không cam kết"], highlight: false },
  { name: "Cơ Bản", price: "1.800.000đ", period: "/tháng 8 buổi", features: ["8 buổi/tháng", "Tất cả phong cách", "Ứng dụng đặt lịch", "Cộng đồng học viên"], highlight: false },
  { name: "Nâng Cao", price: "3.200.000đ", period: "/tháng không giới hạn", features: ["Không giới hạn buổi", "Workshop hàng tháng", "1 buổi PT/tháng", "Giảm 15% shop", "Ưu tiên đặt chỗ"], highlight: true },
  { name: "VIP Annual", price: "28.000.000đ", period: "/năm premium", features: ["Tất cả quyền lợi Nâng Cao", "2 ngày Retreat", "Sản phẩm quà tặng", "Line trực tiếp giảng viên", "Tặng 1 khóa Teacher Training"], highlight: false },
];

export default function ClassesPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/yoga-hero.png" alt="Yoga Classes" fill style={{ objectFit: "cover", opacity: 0.25 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,15,0.95) 0%, rgba(5,5,15,0.6) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Khóa Học</div>
          <h1 className="section-title" style={{ maxWidth: "600px" }}>
            Chương Trình Yoga <em className="text-gradient-gold">Đẳng Cấp</em>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "520px", marginBottom: "2rem" }}>
            Từ người mới tập lần đầu đến giảng viên nâng cao — mỗi khóa học tại Lam Hương
            được thiết kế để mang lại chuyển hóa thực sự.
          </p>
          <Link href="/contact" className="btn btn-gold">Đặt Lịch Học Thử</Link>
        </div>
      </section>

      {/* Schedule */}
      <section className="section" style={{ background: "var(--color-obsidian)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Lịch Học</div>
            <h2 className="section-title">Lịch <em className="text-gradient-gold">Hàng Tuần</em></h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "0.75rem",
            overflowX: "auto",
          }}>
            {schedule.map((day) => (
              <div key={day.day} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "1rem 0.75rem",
                minWidth: "120px",
              }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "0.875rem",
                  textAlign: "center",
                }}>{day.day}</p>
                {day.classes.map((cls) => (
                  <div key={cls} style={{
                    fontSize: "0.72rem",
                    color: "var(--color-text-secondary)",
                    padding: "0.4rem 0.5rem",
                    marginBottom: "0.4rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "8px",
                    lineHeight: "1.4",
                  }}>{cls}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--color-obsidian) 0%, #0f0520 100%)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label">Gói Thành Viên</div>
            <h2 className="section-title">Chọn <em className="text-gradient-gold">Gói Phù Hợp</em></h2>
          </div>
          <div className="grid-4">
            {packages.map((pkg) => (
              <div key={pkg.name} style={{
                padding: "2rem 1.5rem",
                background: pkg.highlight
                  ? "linear-gradient(135deg, rgba(212,175,106,0.12) 0%, rgba(139,92,246,0.08) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${pkg.highlight ? "rgba(212,175,106,0.4)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "20px",
                textAlign: "center",
                position: "relative",
              }}>
                {pkg.highlight && (
                  <div style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "0.3rem 1rem",
                    background: "var(--gradient-gold)",
                    color: "var(--color-obsidian)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "0 0 12px 12px",
                  }}>Phổ Biến Nhất</div>
                )}
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", marginBottom: "0.5rem", marginTop: "1rem" }}>{pkg.name}</h3>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-gold)", marginBottom: "0.25rem" }}>{pkg.price}</div>
                <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>{pkg.period}</p>
                <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{
                      fontSize: "0.82rem",
                      color: "var(--color-text-secondary)",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                      <span style={{ color: "var(--color-gold)" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${pkg.highlight ? "btn-gold" : "btn-outline"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Đăng Ký
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
