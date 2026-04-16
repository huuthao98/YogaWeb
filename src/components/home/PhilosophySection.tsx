"use client";
import { useEffect, useRef } from "react";
import styles from "./PhilosophySection.module.css";

const pillars = [
  {
    icon: "🌸",
    title: "Thân Thể",
    sanskrit: "Sharira",
    desc: "Mỗi tư thế yoga là một hành trình khám phá giới hạn và vẻ đẹp tiềm ẩn bên trong cơ thể bạn.",
  },
  {
    icon: "🧘",
    title: "Tâm Trí",
    sanskrit: "Manas",
    desc: "Thiền định giúp làm tĩnh lặng dòng chảy của ý nghĩ, mang lại sự an lành và minh tuệ sâu sắc.",
  },
  {
    icon: "✨",
    title: "Linh Hồn",
    sanskrit: "Atman",
    desc: "Kết nối với bản ngã thật sự vượt qua mọi ồn ào của cuộc sống, tìm thấy ánh sáng nội tâm.",
  },
  {
    icon: "🌿",
    title: "Sức Khoẻ",
    sanskrit: "Arogya",
    desc: "Lối sống Ayurveda cân bằng — ăn uống, nghỉ ngơi và vận động hài hòa cho thân tâm khoẻ mạnh.",
  },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    cardsRef.current.forEach((c) => c && observer.observe(c));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="philosophy-title">
      {/* Decorative */}
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className="container">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`${styles.header} fade-in`}
        >
          <div className="section-label">
            <span>Triết Lý Của Chúng Tôi</span>
          </div>
          <h2 id="philosophy-title" className={`section-title text-center`}>
            Bốn Trụ Cột{" "}
            <em className="text-gradient-gold">Tỉnh Thức</em>
          </h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto 1rem" }}>
            Chúng tôi tin rằng yoga không chỉ là những tư thế thể chất — đây là một 
            triết lý sống toàn diện kết nối thân, tâm và linh hồn trong sự hài hòa tuyệt đối.
          </p>
          <div className="divider-gold" />
        </div>

        {/* Quote */}
        <blockquote className={styles.quote}>
          <p>
            &ldquo;Yoga là hành trình của bản ngã, qua bản ngã, đến bản ngã.&rdquo;
          </p>
          <cite>— Bhagavad Gita</cite>
        </blockquote>

        {/* Pillars */}
        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`${styles.pillar} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.pillarIcon}>{p.icon}</div>
              <div className={styles.pillarSanskrit}>{p.sanskrit}</div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
              <div className={styles.pillarLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
