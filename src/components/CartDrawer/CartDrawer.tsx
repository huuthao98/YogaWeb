"use client";
import { useEffect, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} ref={drawerRef}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Giỏ Hàng</h2>
            <p className={styles.subtitle}>{items.length} sản phẩm</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Đóng giỏ hàng">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.divider} />

        {items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <Image src="/logo.jpg" alt="Yoga Lam Hương Logo" width={48} height={48} style={{ opacity: 0.3 }} />
            </div>
            <p className={styles.emptyText}>Giỏ hàng đang trống</p>
            <p className={styles.emptyDesc}>Khám phá bộ sưu tập yoga cao cấp của chúng tôi</p>
            <Link href="/shop" className="btn btn-outline" onClick={onClose} style={{ marginTop: "1.5rem" }}>
              Mua Sắm Ngay
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className={styles.itemBody}>
                    <p className={styles.itemCategory}>{item.category}</p>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>
                      {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                    </p>
                    <div className={styles.qtyControl}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={styles.qtyBtn}
                      >−</button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.qtyBtn}
                      >+</button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className={styles.removeBtn}
                        aria-label="Xóa"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polyline points="3,6 5,6 21,6" />
                          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4h6v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Tổng cộng</span>
                <span className={styles.totalPrice}>{totalPrice.toLocaleString("vi-VN")}đ</span>
              </div>
              <Link href="/checkout" className={`btn btn-gold ${styles.checkoutBtn}`} onClick={onClose}>
                Thanh Toán
              </Link>
              <button onClick={clearCart} className={styles.clearBtn}>Xóa tất cả</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
