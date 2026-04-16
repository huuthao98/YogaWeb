import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về Chúng Tôi — Câu Chuyện Yoga Lam Hương",
  description:
    "Tìm hiểu về Yoga Lam Hương — hành trình 12 năm xây dựng không gian yoga cao cấp tại Việt Nam. Gặp gỡ đội ngũ giảng viên tài năng và triết lý sống tỉnh thức của chúng tôi.",
  alternates: { canonical: "https://yogalamhuong.vn/about" },
};

const teachers = [
  { name: "Master Linh Trần", role: "Sáng Lập & Giảng Viên Trưởng", exp: "20 năm kinh nghiệm", spec: "Ashtanga · Hatha · Meditation", image: "/yoga-teacher.png" },
  { name: "Yogi Hà Phạm", role: "Giảng Viên Yin & Restorative", exp: "12 năm kinh nghiệm", spec: "Yin Yoga · Sound Healing · Pranayama", image: "/yoga-retreat.png" },
  { name: "Master Việt Nguyễn", role: "Giảng Viên Vinyasa & Flow", exp: "8 năm kinh nghiệm", spec: "Vinyasa · Aerial Yoga · Breathwork", image: "/yoga-hero.png" },
];

const values = [
  { icon: "🌸", title: "Chân Thực", desc: "Mỗi lớp học phản ánh truyền thống yoga chính thống, không bị thương mại hóa." },
  { icon: "💎", title: "Đẳng Cấp", desc: "Không gian và dịch vụ cao cấp nhất — bởi bạn xứng đáng với điều tốt nhất." },
  { icon: "🌿", title: "Bền Vững", desc: "Cam kết với môi trường qua các sản phẩm hữu cơ và thực hành xanh." },
  { icon: "❤️", title: "Tâm Huyết", desc: "Mỗi giảng viên là người thực hành yoga sâu sắc, không chỉ dạy kỹ thuật." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0a0a20 0%, #0a0a0f 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/yoga-retreat.png" alt="About Yoga Lam Hương" fill style={{ objectFit: "cover", opacity: 0.2 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,20,0.95) 0%, rgba(10,10,20,0.6) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Về Chúng Tôi</div>
          <h1 className="section-title" style={{ maxWidth: "600px" }}>
            Câu Chuyện Của <em className="text-gradient-gold">Yoga Lam Hương</em>
          </h1>
          <p className="section-subtitle">
            Được thành lập từ niềm đam mê thuần khiết với yoga, Yoga Lam Hương là nơi giao thoa 
            giữa truyền thống cổ xưa và sự xa hoa hiện đại tại Việt Nam.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--color-obsidian)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="fade-in">
              <div className="section-label">Câu Chuyện</div>
              <h2 className="section-title">Khởi Đầu Từ<br /><em className="text-gradient-gold">Một Hơi Thở</em></h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                Năm 2012, Master Linh Trần sau 10 năm tu học yoga tại Ấn Độ và Nepal đã mang về 
                Việt Nam không chỉ kỹ thuật yoga mà còn cả triết lý sống tỉnh thức sâu sắc.
              </p>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "2rem", fontSize: "0.95rem" }}>
                Lam Hương — tiếng Sanskrit có nghĩa là &ldquo;hạnh phúc thuần khiết&rdquo; — chính là tầm nhìn 
                cho không gian yoga này: nơi mỗi học viên tìm thấy không chỉ sức khoẻ thể chất, 
                mà còn là sự bình yên và hạnh phúc sâu thẳm từ nội tâm.
              </p>
              <Link href="/contact" className="btn btn-gold">Đặt Lịch Tham Quan</Link>
            </div>
            <div style={{ position: "relative", height: "500px", borderRadius: "24px", overflow: "hidden" }}>
              <Image src="/yoga-teacher.png" alt="Yoga Lam Hương Story" fill style={{ objectFit: "cover" }} />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,10,20,0.5) 0%, transparent 60%)",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--color-obsidian) 0%, #0f0520 100%)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <div className="section-label">Giá Trị Cốt Lõi</div>
            <h2 className="section-title">Điều Chúng Tôi <em className="text-gradient-gold">Tin Tưởng</em></h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={v.title} className="glass-card" style={{ padding: "2rem", textAlign: "center", transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.8" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section" style={{ background: "var(--color-obsidian)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <div className="section-label">Đội Ngũ</div>
            <h2 className="section-title">Gặp Gỡ Các <em className="text-gradient-gold">Giảng Viên</em></h2>
            <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
              Mỗi giảng viên của Yoga Lam Hương là người đã sống và thực hành yoga sâu sắc, 
              được đào tạo tại các trường danh tiếng ở Ấn Độ và Nepal.
            </p>
          </div>
          <div className="grid-3">
            {teachers.map((t) => (
              <div key={t.name} className="glass-card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: "280px" }}>
                  <Image src={t.image} alt={t.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,20,0.9) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}>{t.name}</h3>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-gold)", marginTop: "0.2rem" }}>{t.role}</p>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>{t.exp}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-amethyst)" }}>{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "linear-gradient(180deg, #0f0520 0%, var(--color-obsidian) 100%)", textAlign: "center" }}>
        <div className="container-narrow">
          <h2 className="section-title">Hãy Đến Và <em className="text-gradient-gold">Trải Nghiệm</em></h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto 2.5rem" }}>
            Không gian và đội ngũ Yoga Lam Hương sẵn sàng chào đón bạn. 
            Buổi học thử đầu tiên hoàn toàn miễn phí.
          </p>
          <Link href="/contact" className="btn btn-gold">Đặt Lịch Học Thử</Link>
        </div>
      </section>
    </div>
  );
}
