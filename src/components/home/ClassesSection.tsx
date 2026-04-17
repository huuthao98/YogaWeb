"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./ClassesSection.module.css";

const classes = [
  {
    id: "hatha",
    level: "Mọi Cấp Độ",
    name: "Hatha Yoga",
    duration: "90 phút",
    price: "350.000đ",
    desc: "Nền tảng của mọi phong cách yoga. Lớp học tập trung vào tư thế và hơi thở, phù hợp cho người mới bắt đầu đến nâng cao.",
    tags: ["Nền Tảng", "Hơi Thở", "Tân Tâm"],
    color: "#d4af6a",
  },
  {
    id: "vinyasa",
    level: "Trung Cấp",
    name: "Vinyasa Flow",
    duration: "75 phút",
    price: "420.000đ",
    desc: "Chuỗi động tác chảy nhịp nhàng theo hơi thở, xây dựng sức mạnh và linh hoạt trong không gian thiền định.",
    tags: ["Năng Lượng", "Sức Mạnh", "Nhịp Nhàng"],
    color: "#8b5cf6",
  },
  {
    id: "yin",
    level: "Mọi Cấp Độ",
    name: "Yin Yoga",
    duration: "90 phút",
    price: "380.000đ",
    desc: "Tư thế giữ lâu kết hợp âm thanh bát chữa lành, đi sâu vào mô liên kết và tạo sự tĩnh lặng sâu sắc.",
    tags: ["Thư Giản", "Âm Nhạc", "Chữa Lành"],
    color: "#f4a7b9",
  },
  {
    id: "ashtanga",
    level: "Nâng Cao",
    name: "Ashtanga",
    duration: "120 phút",
    price: "500.000đ",
    desc: "Hệ thống Ashtanga truyền thống theo phong cách Mysore — phát triển kỷ luật và sức mạnh nội tâm vượt trội.",
    tags: ["Thể Lực", "Kỷ Luật", "Truyền Thống"],
    color: "#34d399",
  },
  {
    id: "meditation",
    level: "Mọi Cấp Độ",
    name: "Thiền Định",
    duration: "60 phút",
    price: "300.000đ",
    desc: "Lớp thiền định kết hợp pranayama, yoga nidra và âm bát tinh tế — kết nối với chiều sâu nội tâm.",
    tags: ["Thiền", "Pranayama", "Âm Bát"],
    color: "#60a5fa",
  },
  {
    id: "prenatal",
    level: "Thai Kỳ",
    name: "Yoga Tiền Sản",
    duration: "75 phút",
    price: "400.000đ",
    desc: "Thiết kế đặc biệt cho các mẹ bầu, nhẹ nhàng và an toàn, hỗ trợ sức khoẻ cho cả mẹ và bé.",
    tags: ["An Toàn", "Dịu Nhẹ", "Chuyên Biệt"],
    color: "#fb923c",
  },
];

export default function ClassesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="classes-title">
      <div className={styles.glow} />
      <div className="container">
        <div className={`${styles.header} fade-in`}>
          <div className="section-label">Khóa Học</div>
          <h2 id="classes-title" className="section-title text-center">
            Chương Trình{" "}
            <em className="text-gradient-gold">Đẳng Cấp</em>
          </h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
            Mỗi lớp học được thiết kế tỉ mỉ bởi các giảng viên hàng đầu, 
            mang lại trải nghiệm yoga toàn diện và đặc biệt.
          </p>
        </div>

        <div className={styles.grid}>
          {classes.map((cls, i) => (
            <div
              key={cls.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop} style={{ '--accent': cls.color } as React.CSSProperties}>
                <div className={styles.cardLevel}>{cls.level}</div>
                <div className={styles.cardDuration}>{cls.duration}</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cls.name}</h3>
                <p className={styles.cardDesc}>{cls.desc}</p>
                <div className={styles.tags}>
                  {cls.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{cls.price}<sub>/buổi</sub></span>
                  <Link href={`/classes#${cls.id}`} className={`btn btn-outline ${styles.bookBtn}`}>
                    Đặt Lớp
                  </Link>
                </div>
              </div>
              <div className={styles.cardAccent} style={{ background: cls.color }} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/classes" className="btn btn-gold">
            Xem Tất Cả Khóa Học
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
