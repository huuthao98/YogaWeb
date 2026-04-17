"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const footerLinks = {
  pages: [
    { href: "/about", label: "Về Chúng Tôi" },
    { href: "/classes", label: "Khóa Học Yoga" },
    { href: "/retreats", label: "Retreat" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Liên Hệ" },
  ],
  shop: [
    { href: "/shop?cat=mat", label: "Thảm Yoga" },
    { href: "/shop?cat=clothing", label: "Đồ Yoga" },
    { href: "/shop?cat=accessories", label: "Phụ Kiện" },
    { href: "/shop?cat=meditation", label: "Thiền Định" },
    { href: "/shop?cat=wellness", label: "Sức Khoẻ" },
  ],
  legal: [
    { href: "/privacy", label: "Chính Sách Bảo Mật" },
    { href: "/terms", label: "Điều Khoản Dịch Vụ" },
    { href: "/shipping", label: "Chính Sách Vận Chuyển" },
    { href: "/returns", label: "Đổi Trả Hàng" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background glow */}
      <div className={styles.glowPurple} />
      <div className={styles.glowGold} />

      <div className={styles.inner}>
        {/* Top Section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/logo.jpg" alt="Yoga Lam Hương Logo" width={42} height={42} />
              </div>
              <div>
                <span className={styles.logoText}>YOGA LAM HƯƠNG</span>
                <span className={styles.logoTagline}>Nghệ Thuật Sống Tỉnh Thức</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Hành trình đến với sức khoẻ toàn diện — nơi thân tâm và linh hồn 
              được chữa lành trong không gian đẳng cấp nhất.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Trang</h3>
              {footerLinks.pages.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Cửa Hàng</h3>
              {footerLinks.shop.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Pháp Lý</h3>
              {footerLinks.legal.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3 className={styles.linkTitle}>Nhận Tin Tức</h3>
            <p className={styles.newsletterDesc}>
              Đăng ký để nhận các ưu đãi độc quyền, bí quyết yoga và cập nhật từ chúng tôi.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email của bạn..."
                className={styles.newsletterInput}
                aria-label="Email"
              />
              <button type="submit" className={`btn btn-gold ${styles.newsletterBtn}`}>
                Đăng Ký
              </button>
            </form>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+84 28 1234 5678</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>hello@yogalamhuong.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Yoga Lam Hương Vietnam. All rights reserved.
          </p>
          <p className={styles.quote}>
            <em>&ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;</em>
          </p>
        </div>
      </div>
    </footer>
  );
}
