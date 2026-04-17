"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer/CartDrawer";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/about", label: "Về Chúng Tôi" },
  { href: "/classes", label: "Khóa Học" },
  { href: "/retreats", label: "Retreat" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, isCartOpen, setCartOpen } = useCart();
  const lastScroll = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 50);
      if (sy > lastScroll.current && sy > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = sy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""}`}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIconWrapper}>
              <Image src="/logo.jpg" alt="Logo" width={36} height={36} className={styles.logoImg} />
            </div>
            <div>
              <span className={styles.logoText}>LAM HƯƠNG</span>
              <span className={styles.logoSub}>YOGA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
                <span className={styles.navUnderline} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              id="cart-btn"
              className={styles.cartBtn}
              onClick={() => setCartOpen(true)}
              aria-label="Giỏ hàng"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>
            <Link href="/contact" className={`btn btn-gold ${styles.ctaBtn}`}>
              Đặt Lịch
            </Link>

            {/* Hamburger */}
            <button
              id="menu-btn"
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        <div className={styles.mobileInner}>
          <div className={styles.mobileDecor}>
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} style={{ opacity: 0.4 }} />
          </div>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ""}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-gold ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
            Đặt Lịch Ngay
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} />
      )}

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
