import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Yoga — Bí Quyết, Kiến Thức & Cảm Hứng",
  description:
    "Khám phá các bài viết về yoga, thiền định, sức khoẻ tinh thần và lối sống tỉnh thức từ đội ngũ Yoga Lam Hương. Kiến thức yoga sâu sắc từ các chuyên gia.",
  alternates: { canonical: "https://yogalamhuong.vn/blog" },
};

const posts = [
  {
    id: "hatha-yoga-nguoi-moi",
    cat: "Hatha Yoga",
    title: "Hatha Yoga Cho Người Mới: 10 Tư Thế Căn Bản Bạn Phải Biết",
    excerpt: "Bắt đầu hành trình yoga không bao giờ là quá muộn. Những tư thế Hatha yoga căn bản này sẽ giúp bạn xây dựng nền tảng vững chắc cho toàn bộ hành trình phía trước.",
    date: "12 tháng 4, 2026",
    author: "Master Linh Trần",
    readTime: "8 phút đọc",
    image: "/yoga-teacher.png",
    featured: true,
  },
  {
    id: "thien-dinh-10-phut",
    cat: "Thiền Định",
    title: "10 Phút Thiền Định Mỗi Sáng Thay Đổi Cuộc Đời Bạn Như Thế Nào",
    excerpt: "Nghiên cứu khoa học và kinh nghiệm thực tế đã chứng minh: chỉ 10 phút thiền định mỗi sáng có thể cải thiện não bộ, giảm stress và tăng cường hạnh phúc đáng kể.",
    date: "8 tháng 4, 2026",
    author: "Yogi Hà Phạm",
    readTime: "6 phút đọc",
    image: "/yoga-hero.png",
    featured: false,
  },
  {
    id: "tham-yoga-tot-nhat-2026",
    cat: "Review Sản Phẩm",
    title: "Top 5 Thảm Yoga Cao Cấp Đáng Mua Nhất 2026",
    excerpt: "Chọn thảm yoga phù hợp là bước đầu tiên để có trải nghiệm luyện tập tốt nhất. Chúng tôi đã thử nghiệm và đánh giá 5 loại thảm yoga tốt nhất hiện tại.",
    date: "5 tháng 4, 2026",
    author: "Master Việt Nguyễn",
    readTime: "10 phút đọc",
    image: "/yoga-products.png",
    featured: false,
  },
  {
    id: "yin-yoga-chua-lanh",
    cat: "Yin Yoga",
    title: "Yin Yoga & Âm Bát Chữa Lành: Bí Mật Đằng Sau Sự Tĩnh Lặng",
    excerpt: "Sự kết hợp độc đáo giữa Yin Yoga và âm thanh bát Himalaya tạo ra trạng thái thiền sâu và chữa lành cơ thể mà không một phương pháp nào khác làm được.",
    date: "29 tháng 3, 2026",
    author: "Yogi Hà Phạm",
    readTime: "7 phút đọc",
    image: "/yoga-retreat.png",
    featured: false,
  },
  {
    id: "ayurveda-an-uong",
    cat: "Ayurveda",
    title: "Ăn Uống Theo Ayurveda: Chế Độ Dinh Dưỡng Hài Hòa Cho Yoga Thủ",
    excerpt: "Ayurveda dạy chúng ta ăn uống theo mùa, theo thể trạng và theo nhịp của tự nhiên. Khám phá cách chế độ ăn Ayurveda nâng tầm thực hành yoga của bạn.",
    date: "22 tháng 3, 2026",
    author: "Master Linh Trần",
    readTime: "9 phút đọc",
    image: "/yoga-hero.png",
    featured: false,
  },
  {
    id: "retreat-bali-huong-dan",
    cat: "Retreat Guide",
    title: "Hướng Dẫn Toàn Diện Cho Người Lần Đầu Tham Gia Yoga Retreat",
    excerpt: "Retreat yoga lần đầu tiên có thể cảm thấy bỡ ngỡ. Hướng dẫn chi tiết này sẽ giúp bạn chuẩn bị tốt nhất cho hành trình biến đổi tuyệt vời.",
    date: "15 tháng 3, 2026",
    author: "Master Việt Nguyễn",
    readTime: "12 phút đọc",
    image: "/yoga-retreat.png",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero */}
      <section style={{
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        background: "linear-gradient(180deg, #0a0a20 0%, var(--color-obsidian) 100%)",
      }}>
        <div className="section-label">Blog & Kiến Thức</div>
        <h1 className="section-title">
          Kho Tri Thức <em className="text-gradient-gold">Yoga & Tâm Linh</em>
        </h1>
        <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
          Bài viết chuyên sâu từ đội ngũ Yoga Lam Hương — kiến thức yoga, thiền định, 
          sức khoẻ và lối sống tỉnh thức cho hành trình của bạn.
        </p>
      </section>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.id}`} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            marginBottom: "4rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(212,175,106,0.2)",
            borderRadius: "24px",
            overflow: "hidden",
            textDecoration: "none",
            transition: "all 0.3s",
          }}>
            <div style={{ position: "relative", minHeight: "380px" }}>
              <Image src={featured.image} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{
                display: "inline-block",
                padding: "0.3rem 0.875rem",
                background: "rgba(212,175,106,0.15)",
                border: "1px solid rgba(212,175,106,0.3)",
                color: "var(--color-gold)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "999px",
                marginBottom: "1rem",
              }}>✦ Nổi Bật · {featured.cat}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400, lineHeight: "1.25", marginBottom: "1rem" }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", gap: "1rem", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                <span>✍ {featured.author}</span>
                <span>📅 {featured.date}</span>
                <span>⏱ {featured.readTime}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid-3">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s",
                height: "100%",
              }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,20,0.7), transparent 60%)" }} />
                  <span style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    padding: "0.25rem 0.625rem",
                    background: "rgba(212,175,106,0.85)",
                    color: "var(--color-obsidian)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "999px",
                  }}>{post.cat}</span>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 400, lineHeight: "1.4", marginBottom: "0.75rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.68rem", color: "var(--color-text-muted)", flexWrap: "wrap" }}>
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
