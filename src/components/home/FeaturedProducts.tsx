"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useRef } from "react";
import styles from "./FeaturedProducts.module.css";

const products = [
  {
    id: "mat-premium-purple",
    category: "Thảm Yoga",
    name: "Thảm Yoga Mandala Tím",
    price: 1890000,
    originalPrice: 2200000,
    image: "/yoga-products.png",
    badge: "Bán Chạy",
  },
  {
    id: "set-yoga-luxury",
    category: "Bộ Đồ Yoga",
    name: "Bộ Yoga Lụa Tự Nhiên",
    price: 2450000,
    originalPrice: null,
    image: "/yoga-teacher.png",
    badge: "Mới",
  },
  {
    id: "block-cork",
    category: "Phụ Kiện",
    name: "Block Yoga Gỗ Bần Cao Cấp",
    price: 650000,
    originalPrice: 780000,
    image: "/yoga-retreat.png",
    badge: "Giảm 17%",
  },
  {
    id: "mat-jade-natural",
    category: "Thảm Yoga",
    name: "Thảm Jade Thiên Nhiên",
    price: 3200000,
    originalPrice: null,
    image: "/yoga-products.png",
    badge: "Premium",
  },
];

export default function FeaturedProducts() {
  const { addItem } = useCart();
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
    <section className={styles.section} aria-labelledby="products-title">
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className="container">
        <div className={`${styles.header} fade-in`}>
          <div className="section-label">Shop Yoga</div>
          <h2 id="products-title" className="section-title text-center">
            Bộ Sưu Tập{" "}
            <em className="text-gradient-gold">Tinh Tuyển</em>
          </h2>
          <p className="section-subtitle text-center" style={{ margin: "0 auto" }}>
            Những sản phẩm yoga được tuyển chọn kỹ lưỡng từ các thương hiệu hàng đầu thế giới, 
            nâng tầm trải nghiệm luyện tập của bạn.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className={styles.imageWrap}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {product.badge && (
                  <span className={styles.badge}>{product.badge}</span>
                )}
                <div className={styles.imageOverlay}>
                  <button
                    className={styles.quickAddBtn}
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice ?? undefined,
                        image: product.image,
                        category: product.category,
                      })
                    }
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <p className={styles.category}>{product.category}</p>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.priceRow}>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>
                      {product.originalPrice.toLocaleString("vi-VN")}đ
                    </span>
                  )}
                  <span className={styles.price}>
                    {product.price.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/shop" className="btn btn-outline">
            Xem Toàn Bộ Sản Phẩm
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
