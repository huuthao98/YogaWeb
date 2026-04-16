"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./RetreatsSection.module.css";

const retreats = [
  {
    id: "bali-luxury",
    image: "/yoga-retreat.png",
    title: "Bali Sacred Retreat",
    location: "Ubud, Bali",
    duration: "7 ngày / 6 đêm",
    price: "28.500.000đ",
    type: "Exclusive",
    desc: "Đắm mình trong thiên nhiên Bali huyền bí — yoga sáng sớm trên thửa ruộng bậc thang, thiền định tại đền cổ.",
  },
  {
    id: "dalat-highland",
    image: "/yoga-hero.png",
    title: "Đà Lạt Highland Retreat",
    location: "Đà Lạt, Việt Nam",
    duration: "3 ngày / 2 đêm",
    price: "8.900.000đ",
    type: "Weekend",
    desc: "Nghỉ dưỡng cuối tuần trên cao nguyên Đà Lạt se lạnh — yoga buổi sáng trong sương mù, thiền định giữa rừng thông.",
  },
  {
    id: "hoi-an-beach",
    image: "/yoga-products.png",
    title: "Hội An Beach Awakening",
    location: "Hội An, Việt Nam",
    duration: "5 ngày / 4 đêm",
    price: "15.800.000đ",
    type: "Signature",
    desc: "Yoga bãi biển bình minh tại Hội An phố cổ — hòa mình với biển xanh và nắng vàng trong yên tĩnh tuyệt đối.",
  },
];

export default function RetreatsSection() {
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
    <section className={styles.section} aria-labelledby="retreats-title">
      <div className={styles.glowTop} />

      <div className="container">
        <div className={`${styles.header} fade-in`}>
          <div className="section-label">Retreat Cao Cấp</div>
          <h2 id="retreats-title" className="section-title text-center">
            Hành Trình{" "}
            <em className="text-gradient-gold">Tâm Linh</em>
          </h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
            Những hành trình retreat được thiết kế theo phong cách xa hoa, 
            mang bạn đến không gian mà thân tâm thực sự được hồi sinh.
          </p>
        </div>

        <div className={styles.grid}>
          {retreats.map((retreat, i) => (
            <div
              key={retreat.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.imageOverlay} />
                <span className={styles.type}>{retreat.type}</span>
                <div className={styles.imageContent}>
                  <h3 className={styles.cardTitle}>{retreat.title}</h3>
                  <div className={styles.location}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {retreat.location}
                  </div>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.duration}>⏱ {retreat.duration}</span>
                </div>
                <p className={styles.desc}>{retreat.desc}</p>
                <div className={styles.footer}>
                  <div>
                    <p className={styles.fromText}>Từ</p>
                    <p className={styles.price}>{retreat.price}</p>
                  </div>
                  <Link href={`/retreats#${retreat.id}`} className="btn btn-gold">
                    Đặt Ngay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/retreats" className="btn btn-outline">
            Xem Tất Cả Retreat
          </Link>
        </div>
      </div>
    </section>
  );
}
