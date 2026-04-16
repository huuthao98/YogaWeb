"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import styles from "./ShopPage.module.css";

const categories = [
  { id: "all", label: "Tất Cả" },
  { id: "mat", label: "Thảm Yoga" },
  { id: "clothing", label: "Đồ Yoga" },
  { id: "accessories", label: "Phụ Kiện" },
  { id: "meditation", label: "Thiền Định" },
  { id: "wellness", label: "Sức Khoẻ" },
];

const products = [
  { id: "1", cat: "mat", name: "Thảm Mandala Tím Luxury", price: 1890000, original: 2200000, badge: "Bán Chạy", image: "/yoga-products.png", rating: 4.9, reviews: 234 },
  { id: "2", cat: "mat", name: "Thảm Jade Natural Cork", price: 3200000, original: null, badge: "Premium", image: "/yoga-retreat.png", rating: 5.0, reviews: 89 },
  { id: "3", cat: "mat", name: "Thảm TPE Eco Xanh Thiên Nhiên", price: 980000, original: 1200000, badge: null, image: "/yoga-hero.png", rating: 4.7, reviews: 156 },
  { id: "4", cat: "mat", name: "Thảm B-Mat Strong SH", price: 2450000, original: null, badge: "Mới", image: "/yoga-products.png", rating: 4.8, reviews: 67 },
  { id: "5", cat: "clothing", name: "Bộ Yoga Lụa Tự Nhiên Trắng Ngà", price: 2450000, original: null, badge: "Mới", image: "/yoga-teacher.png", rating: 4.9, reviews: 43 },
  { id: "6", cat: "clothing", name: "Áo Yoga Seamless Boho", price: 850000, original: 1050000, badge: "Giảm 19%", image: "/yoga-retreat.png", rating: 4.6, reviews: 178 },
  { id: "7", cat: "clothing", name: "Quần Yoga High-Waist Mandala", price: 1200000, original: null, badge: null, image: "/yoga-hero.png", rating: 4.8, reviews: 95 },
  { id: "8", cat: "clothing", name: "Bộ Yoga Zen Flowing Set", price: 3100000, original: null, badge: "Exclusive", image: "/yoga-products.png", rating: 5.0, reviews: 28 },
  { id: "9", cat: "accessories", name: "Block Yoga Gỗ Bần Premium", price: 650000, original: 780000, badge: "Giảm 17%", image: "/yoga-retreat.png", rating: 4.7, reviews: 321 },
  { id: "10", cat: "accessories", name: "Dây Đai Yoga Tự Nhiên", price: 280000, original: null, badge: null, image: "/yoga-products.png", rating: 4.5, reviews: 456 },
  { id: "11", cat: "accessories", name: "Túi Đựng Thảm Canvas Organic", price: 420000, original: 520000, badge: null, image: "/yoga-hero.png", rating: 4.6, reviews: 213 },
  { id: "12", cat: "accessories", name: "Gối Thiền Zafu Nhung Tím", price: 890000, original: null, badge: "Mới", image: "/yoga-retreat.png", rating: 4.9, reviews: 67 },
  { id: "13", cat: "meditation", name: "Bát Pha Lê Himalaya Set 7", price: 4500000, original: null, badge: "Exclusive", image: "/yoga-products.png", rating: 5.0, reviews: 34 },
  { id: "14", cat: "meditation", name: "Chuỗi Tràng Hạt Mala 108", price: 1350000, original: 1600000, badge: "Giảm 16%", image: "/yoga-teacher.png", rating: 4.8, reviews: 189 },
  { id: "15", cat: "meditation", name: "Nến Thiền Sandalwood", price: 380000, original: null, badge: null, image: "/yoga-retreat.png", rating: 4.7, reviews: 278 },
  { id: "16", cat: "wellness", name: "Tinh Dầu Yoga Pure Blend", price: 750000, original: 900000, badge: "Bán Chạy", image: "/yoga-products.png", rating: 4.9, reviews: 345 },
  { id: "17", cat: "wellness", name: "Trà Thảo Mộc Ayurveda Set", price: 580000, original: null, badge: null, image: "/yoga-hero.png", rating: 4.6, reviews: 123 },
  { id: "18", cat: "wellness", name: "Jade Roller & Gua Sha Set", price: 850000, original: 1100000, badge: "Giảm 23%", image: "/yoga-retreat.png", rating: 4.8, reviews: 234 },
];

const sortOptions = [
  { value: "featured", label: "Nổi Bật" },
  { value: "price-asc", label: "Giá Thấp → Cao" },
  { value: "price-desc", label: "Giá Cao → Thấp" },
  { value: "rating", label: "Đánh Giá Cao" },
];

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const { addItem } = useCart();

  let filtered = products.filter((p) => {
    const catMatch = activeCat === "all" || p.cat === activeCat;
    const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className="section-label">Cửa Hàng</div>
          <h1 className={styles.heroTitle}>
            Shop Yoga <em className="text-gradient-gold">Cao Cấp</em>
          </h1>
          <p className={styles.heroDesc}>
            Những sản phẩm yoga được chọn lọc kỹ càng — từ thảm yoga, đồ tập đến phụ kiện thiền định, 
            tất cả đều chất lượng premium cho hành trình tỉnh thức của bạn.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Toolbar */}
        <div className={styles.toolbar}>
          {/* Search */}
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              className={styles.searchInput}
              aria-label="Tìm kiếm sản phẩm"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={styles.sortSelect}
            aria-label="Sắp xếp"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* Categories */}
        <div className={styles.cats}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${activeCat === cat.id ? styles.catActive : ""}`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className={styles.count}>{filtered.length} sản phẩm</p>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <div className={styles.overlay}>
                  <button
                    className={styles.addBtn}
                    onClick={() =>
                      addItem({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        originalPrice: p.original ?? undefined,
                        image: p.image,
                        category: categories.find((c) => c.id === p.cat)?.label || "",
                      })
                    }
                  >
                    + Thêm Vào Giỏ
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.ratingRow}>
                  <span className={styles.stars}>{"★".repeat(Math.floor(p.rating))}</span>
                  <span className={styles.rating}>{p.rating}</span>
                  <span className={styles.reviews}>({p.reviews})</span>
                </div>
                <h3 className={styles.name}>{p.name}</h3>
                <div className={styles.priceRow}>
                  {p.original && (
                    <span className={styles.original}>{p.original.toLocaleString("vi-VN")}đ</span>
                  )}
                  <span className={styles.price}>{p.price.toLocaleString("vi-VN")}đ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
