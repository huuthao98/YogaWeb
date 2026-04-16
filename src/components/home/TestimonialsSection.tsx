"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Minh Châu Nguyễn",
    role: "Giáo viên · Hà Nội",
    avatar: "M",
    color: "#d4af6a",
    text: "Yoga Lam Hương đã thay đổi hoàn toàn cách tôi nhìn nhận bản thân. Không gian lớp học tuyệt vời, giảng viên tận tâm và chuyên nghiệp. Mỗi buổi học là một hành trình khám phá mới.",
    rating: 5,
  },
  {
    name: "Thanh Hà Trần",
    role: "Doanh nhân · TP.HCM",
    avatar: "T",
    color: "#8b5cf6",
    text: "Tôi đã tham gia retreat Bali với Lam Hương và đó là trải nghiệm xa xỉ nhất tôi từng có. Sự kết hợp giữa yoga, thiền định và spa tạo nên sự chuyển hóa thực sự trong tôi.",
    rating: 5,
  },
  {
    name: "Khánh Linh Phạm",
    role: "Bác sĩ · Đà Nẵng",
    avatar: "K",
    color: "#f4a7b9",
    text: "Sản phẩm thảm yoga Mandala chất lượng vượt xa mong đợi. Và các lớp Yin Yoga với âm bát chữa lành của studio giúp tôi giải tỏa stress hiệu quả sau những ngày làm việc căng thẳng.",
    rating: 5,
  },
  {
    name: "Việt Anh Lê",
    role: "Kỹ sư · TP.HCM",
    avatar: "V",
    color: "#34d399",
    text: "Ban đầu tôi hoài nghi về yoga cho nam giới, nhưng sau 3 tháng với Lam Hương, tôi thấy sức mạnh, sự linh hoạt và tinh thần minh mẫn hơn bao giờ hết. Tuyệt vời!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.glowBg} />

      <div className="container">
        <div
          ref={sectionRef}
          className={`${styles.wrapper} fade-in`}
        >
          <div className={styles.label}>
            <span>Lời Khách Hàng</span>
          </div>
          <h2 id="testimonials-title" className={`section-title text-center`}>
            Họ Nói Gì Về{" "}
            <em className="text-gradient-gold">Chúng Tôi</em>
          </h2>

          <div className={styles.testimonialBox} key={active}>
            <div className={styles.stars}>
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>

            <blockquote className={styles.text}>
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className={styles.author}>
              <div
                className={styles.avatar}
                style={{ background: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <p className={styles.authorName}>{t.name}</p>
                <p className={styles.authorRole}>{t.role}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Mini cards */}
          <div className={styles.miniCards}>
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`${styles.miniCard} ${i === active ? styles.miniActive : ""}`}
                onClick={() => setActive(i)}
              >
                <div
                  className={styles.miniAvatar}
                  style={{ background: item.color }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className={styles.miniName}>{item.name}</p>
                  <p className={styles.miniRole}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
