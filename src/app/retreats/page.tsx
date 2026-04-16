import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yoga Retreat Cao Cấp — Bali, Đà Lạt, Hội An",
  description:
    "Tham gia các chương trình Yoga Retreat xa hoa tại Bali, Đà Lạt và Hội An. Trải nghiệm yoga, thiền định, spa và chill giữa thiên nhiên kỳ diệu cùng Yoga Lam Hương.",
  alternates: { canonical: "https://yogalamhuong.vn/retreats" },
};

const retreats = [
  {
    id: "bali-luxury",
    title: "Bali Sacred Retreat",
    subtitle: "Ubud • Bali • Indonesia",
    duration: "7 ngày / 6 đêm",
    price: "28.500.000đ",
    type: "Exclusive",
    image: "/yoga-retreat.png",
    nextDate: "15 – 21 tháng 5, 2026",
    spots: 8,
    includes: ["Yoga sáng & chiều", "Spa & massage", "Thức ăn Ayurveda", "Tham quan đền", "Thiền định", "Nước & snack"],
    desc: "Hành trình 7 ngày tại Ubud — trái tim tâm linh của Bali. Yoga bình minh trên ruộng bậc thang, thiền định tại đền Hindu cổ, tắm thác nước thiêng liêng và thưởng thức ẩm thực Ayurveda trong vườn nhiệt đới.",
  },
  {
    id: "dalat-highland",
    title: "Đà Lạt Highland Retreat",
    subtitle: "Đà Lạt • Lâm Đồng • Việt Nam",
    duration: "3 ngày / 2 đêm",
    price: "8.900.000đ",
    type: "Weekend",
    image: "/yoga-hero.png",
    nextDate: "20 – 22 tháng 6, 2026",
    spots: 12,
    includes: ["Yoga sáng & tối", "Spa rừng thông", "Chill cà phê", "Thiền trong sương", "Trekking ngắン", "Bữa ăn organic"],
    desc: "Cuối tuần bình yên trên cao nguyên Đà Lạt se lạnh. Yoga buổi sáng trong làn sương mù huyền ảo, thiền định giữa rừng thông xanh, spa tự nhiên và tận hưởng không khí trong lành của phố núi diệu kỳ.",
  },
  {
    id: "hoian-beach",
    title: "Hội An Beach Awakening",
    subtitle: "Hội An • Quảng Nam • Việt Nam",
    duration: "5 ngày / 4 đêm",
    price: "15.800.000đ",
    type: "Signature",
    image: "/yoga-products.png",
    nextDate: "10 – 14 tháng 7, 2026",
    spots: 10,
    includes: ["Yoga bãi biển bình minh", "Tắm biển tự do", "Thăm phố cổ", "Ẩm thực Hội An", "Spa toàn thân", "Thả đèn hoa đăng"],
    desc: "5 ngày yoga & chill tại Hội An phố cổ — nơi ánh đèn lồng lung linh soi bóng dưới sông Thu Bồn. Yoga bình minh trên bãi biển vắng, khám phá văn hóa cổ kính và thả hồn vào sự bình yên tuyệt đối.",
  },
  {
    id: "sapa-mountain",
    title: "Sapa Mountain Zen Retreat",
    subtitle: "Sa Pa • Lào Cai • Việt Nam",
    duration: "4 ngày / 3 đêm",
    price: "12.500.000đ",
    type: "Adventure",
    image: "/yoga-teacher.png",
    nextDate: "8 – 11 tháng 8, 2026",
    spots: 6,
    includes: ["Yoga lúc bình minh", "Trekking ruộng bậc thang", "Homestay dân tộc", "Ẩm thực núi rừng", "Thiền định đỉnh núi"],
    desc: "Retreat độc đáo kết hợp yoga và khám phá núi rừng Tây Bắc. Chinh phục ruộng bậc thang Sapa, tìm hiểu văn hóa dân tộc H'Mông và thực hành thiền định giữa thiên nhiên hùng vĩ trên độ cao 1.600m.",
  },
];

export default function RetreatsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/yoga-retreat.png" alt="Yoga Retreats" fill style={{ objectFit: "cover", opacity: 0.2 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(10,10,30,0.8) 0%, rgba(5,5,15,0.95) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label">Yoga Retreat</div>
          <h1 className="section-title" style={{ margin: "0 auto" }}>
            Hành Trình <em className="text-gradient-gold">Tâm Linh</em><br />Vượt Thời Gian
          </h1>
          <p className="section-subtitle text-center" style={{ margin: "1rem auto 2.5rem" }}>
            Thoát khỏi nhịp sống hối hả — đắm mình vào những không gian thiên nhiên kỳ diệu 
            của Việt Nam và Đông Nam Á, nơi mỗi hơi thở là sự chữa lành.
          </p>
          <Link href="/contact" className="btn btn-gold">Đặt Chỗ Ngay</Link>
        </div>
      </section>

      {/* Retreats */}
      <section className="section" style={{ background: "var(--color-obsidian)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {retreats.map((retreat, i) => (
              <div
                key={retreat.id}
                id={retreat.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1.2fr 0.8fr" : "0.8fr 1.2fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                {/* Image */}
                <div style={{
                  position: "relative",
                  height: "450px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  order: i % 2 === 0 ? 0 : 1,
                }}>
                  <Image src={retreat.image} alt={retreat.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,20,0.7) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                    <span style={{
                      padding: "0.35rem 0.875rem",
                      background: "rgba(212,175,106,0.15)",
                      border: "1px solid rgba(212,175,106,0.4)",
                      color: "var(--color-gold)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      borderRadius: "999px",
                      backdropFilter: "blur(10px)",
                    }}>{retreat.type}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "var(--color-gold)", marginBottom: "0.25rem" }}>
                      📅 {retreat.nextDate}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                      Còn {retreat.spots} chỗ
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.5rem" }}>
                    {retreat.subtitle}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 400, marginBottom: "1rem", lineHeight: "1.2" }}>
                    {retreat.title}
                  </h2>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: "1.85", marginBottom: "1.5rem" }}>
                    {retreat.desc}
                  </p>

                  {/* Includes */}
                  <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "0.875rem" }}>
                      Bao Gồm
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                      {retreat.includes.map((item) => (
                        <div key={item} style={{
                          display: "flex", alignItems: "center", gap: "0.4rem",
                          fontSize: "0.8rem", color: "var(--color-text-secondary)",
                        }}>
                          <span style={{ color: "var(--color-gold)", fontSize: "0.75rem" }}>✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Từ</p>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-gold)" }}>{retreat.price}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>{retreat.duration} · /người</p>
                    </div>
                    <Link href="/contact" className="btn btn-gold">Đặt Chỗ</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Retreat */}
      <section className="section" style={{
        background: "linear-gradient(135deg, rgba(74,63,143,0.15) 0%, rgba(212,175,106,0.05) 100%)",
        borderTop: "1px solid rgba(212,175,106,0.1)",
        textAlign: "center",
      }}>
        <div className="container-narrow">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌟</div>
          <h2 className="section-title">Thiết Kế Retreat <em className="text-gradient-gold">Riêng Của Bạn</em></h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto 2.5rem" }}>
            Bạn muốn retreat theo yêu cầu — địa điểm riêng, chương trình riêng, thời gian riêng?
            Chúng tôi tư vấn và thiết kế một chuyến retreat độc bản hoàn toàn cho bạn.
          </p>
          <Link href="/contact" className="btn btn-gold">Liên Hệ Tư Vấn</Link>
        </div>
      </section>
    </div>
  );
}
