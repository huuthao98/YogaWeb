"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 5000, suffix: "+", label: "Học Viên", desc: "trên toàn Việt Nam" },
  { value: 12, suffix: "", label: "Năm Kinh Nghiệm", desc: "trong lĩnh vực yoga" },
  { value: 50, suffix: "+", label: "Khóa Học", desc: "đa dạng phong cách" },
  { value: 98, suffix: "%", label: "Hài Lòng", desc: "đánh giá 5 sao" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const inc = target / steps;
          let c = 0;
          const timer = setInterval(() => {
            c += inc;
            if (c >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(c));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section} aria-label="Thống Kê">
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.value}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.desc}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
