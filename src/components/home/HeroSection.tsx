"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const slides = [
  {
    title: "Thức Tỉnh\nTâm Hồn",
    subtitle: "Hành trình yoga cao cấp — nơi thân thể, tâm trí và linh hồn hòa quyện trong tĩnh lặng thiêng liêng.",
    cta: "Khám Phá Ngay",
    ctaHref: "/classes",
    cta2: "Xem Retreat",
    cta2Href: "/retreats",
  },
  {
    title: "Nghệ Thuật\nSống Tỉnh Thức",
    subtitle: "Trải nghiệm các khóa học yoga độc quyền dưới sự hướng dẫn của những giảng viên hàng đầu.",
    cta: "Xem Khóa Học",
    ctaHref: "/classes",
    cta2: "Shop Yoga",
    cta2Href: "/shop",
  },
  {
    title: "Luxury\nYoga Retreat",
    subtitle: "Không gian retreat xa hoa, bình yên — nơi bạn tìm lại bản thân giữa thiên nhiên huyền diệu.",
    cta: "Đặt Chỗ Ngay",
    ctaHref: "/retreats",
    cta2: "Tìm Hiểu Thêm",
    cta2Href: "/about",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 6000;

  const resetTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progRef.current) clearInterval(progRef.current);
    setProgress(0);

    let p = 0;
    progRef.current = setInterval(() => {
      p += 100 / (DURATION / 50);
      setProgress(Math.min(p, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgress(0);
      p = 0;
    }, DURATION);
  };

  useEffect(() => {
    resetTimers();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progRef.current) clearInterval(progRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    resetTimers();
  };

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Hero Section">
      {/* Background */}
      <div className={styles.bgLayer}>
        <Image
          src="/yoga-hero.png"
          alt="Yoga Lam Hương - Luxury Yoga Retreat Vietnam"
          fill
          priority
          style={{ objectFit: "cover" }}
          quality={90}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGradient} />
      </div>

      {/* Sacred geometry floating */}
      <div className={styles.geometryContainer}>
        <div className={styles.geometry1}>
          <svg viewBox="0 0 200 200" fill="none">
            <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="rgba(212,175,106,0.15)" strokeWidth="0.5" />
            <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" stroke="rgba(212,175,106,0.1)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" stroke="rgba(212,175,106,0.08)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" stroke="rgba(212,175,106,0.06)" strokeWidth="0.5" />
          </svg>
        </div>
        <div className={styles.geometry2}>
          <svg viewBox="0 0 150 150" fill="none">
            <circle cx="75" cy="75" r="70" stroke="rgba(139,92,246,0.1)" strokeWidth="0.5" />
            <polygon points="75,10 138,47.5 138,102.5 75,140 12,102.5 12,47.5" stroke="rgba(139,92,246,0.08)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Floating lotus particles */}
      <div className={styles.particles}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Label */}
          <div className={styles.label} key={`label-${current}`}>
            <span className={styles.labelLine} />
            <span>Yoga Lam Hương Vietnam</span>
            <span className={styles.labelLine} />
          </div>

          {/* Title */}
          <h1 className={styles.title} key={`title-${current}`}>
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className={styles.titleLine} style={{ animationDelay: `${i * 0.1}s` }}>
                {i === 1 ? (
                  <em className={styles.titleItalic}>{line}</em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle} key={`sub-${current}`}>
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className={styles.ctas} key={`cta-${current}`}>
            <Link href={slide.ctaHref} className="btn btn-gold">
              {slide.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
            <Link href={slide.cta2Href} className="btn btn-glass">
              {slide.cta2}
            </Link>
          </div>

          {/* Slide indicators */}
          <div className={styles.indicators}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.indicator} ${i === current ? styles.indicatorActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              >
                {i === current && (
                  <span
                    className={styles.indicatorProgress}
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span>Cuộn để khám phá</span>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className={styles.bottomGradient} />
    </section>
  );
}
