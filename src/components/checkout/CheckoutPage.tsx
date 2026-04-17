"use client";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart();
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>✨</div>
          <h1 className={styles.successTitle}>Đặt Hàng Thành Công!</h1>
          <p className={styles.successDesc}>
            Cảm ơn bạn đã tin tưởng Yoga Lam Hương. Đơn hàng của bạn sẽ được xử lý 
            và giao đến trong 3–5 ngày làm việc.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-gold)", marginBottom: "2rem" }}>
            Email xác nhận đã được gửi đến địa chỉ của bạn.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/shop" className="btn btn-gold">Tiếp Tục Mua Sắm</Link>
            <Link href="/" className="btn btn-glass">Về Trang Chủ</Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyPage}>
        <div className={styles.emptyBox}>
          <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.2, marginBottom: "1.5rem" }}>
            <Image src="/logo.jpg" alt="Logo" width={64} height={64} style={{ filter: 'grayscale(1)' }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.75rem" }}>
            Giỏ hàng trống
          </h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
            Thêm sản phẩm vào giỏ trước khi thanh toán
          </p>
          <Link href="/shop" className="btn btn-gold">Mua Sắm Ngay</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link href="/" className={styles.logoLink}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/logo.jpg" alt="Yoga Lam Hương Logo" width={32} height={32} />
          </div>
          <span className={styles.logoText}>YOGA LAM HƯƠNG</span>
        </Link>
        <div className={styles.steps}>
          {["Thông Tin", "Vận Chuyển", "Thanh Toán"].map((s, i) => (
            <div key={s} className={`${styles.step} ${step === i + 1 ? styles.stepActive : ""} ${step > i + 1 ? styles.stepDone : ""}`}>
              <div className={styles.stepNum}>{step > i + 1 ? "✓" : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {/* Form */}
        <div className={styles.formCol}>
          {step === 1 && (
            <div>
              <h2 className={styles.sectionTitle}>Thông Tin Liên Hệ</h2>
              <div className={styles.formGrid}>
                <div><label>Họ</label><input className="input-luxury" type="text" placeholder="Nguyễn" /></div>
                <div><label>Tên</label><input className="input-luxury" type="text" placeholder="Văn A" /></div>
                <div style={{ gridColumn: "1/-1" }}><label>Email</label><input className="input-luxury" type="email" placeholder="email@example.com" /></div>
                <div style={{ gridColumn: "1/-1" }}><label>Số Điện Thoại</label><input className="input-luxury" type="tel" placeholder="+84 ..." /></div>
              </div>
              <h2 className={styles.sectionTitle} style={{ marginTop: "2rem" }}>Địa Chỉ Giao Hàng</h2>
              <div className={styles.formGrid}>
                <div style={{ gridColumn: "1/-1" }}><label>Địa chỉ</label><input className="input-luxury" type="text" placeholder="Số nhà, đường..." /></div>
                <div><label>Tỉnh/Thành</label><input className="input-luxury" type="text" placeholder="TP. Hồ Chí Minh" /></div>
                <div><label>Quận/Huyện</label><input className="input-luxury" type="text" placeholder="Quận 1" /></div>
                <div><label>Ghi Chú</label><input className="input-luxury" type="text" placeholder="Ghi chú thêm (tùy chọn)" /></div>
              </div>
              <button className="btn btn-gold" style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem" }} onClick={() => setStep(2)}>
                Tiếp Theo: Vận Chuyển →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className={styles.sectionTitle}>Phương Thức Vận Chuyển</h2>
              {[
                { id: "standard", label: "Giao hàng tiêu chuẩn", time: "3–5 ngày làm việc", fee: "Miễn phí" },
                { id: "express", label: "Giao hàng nhanh", time: "1–2 ngày làm việc", fee: "50.000đ" },
                { id: "same", label: "Giao trong ngày", time: "2–4 giờ (TP.HCM)", fee: "100.000đ" },
              ].map((opt) => (
                <div key={opt.id} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                }}>
                  <input type="radio" name="shipping" id={opt.id} defaultChecked={opt.id === "standard"} />
                  <div style={{ flex: 1 }}>
                    <label htmlFor={opt.id} style={{ fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", textTransform: "none", letterSpacing: 0 }}>
                      {opt.label}
                    </label>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{opt.time}</p>
                  </div>
                  <span style={{ color: opt.fee === "Miễn phí" ? "var(--color-gold)" : "var(--color-text-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                    {opt.fee}
                  </span>
                </div>
              ))}
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <button className="btn btn-glass" onClick={() => setStep(1)}>← Quay Lại</button>
                <button className="btn btn-gold" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(3)}>
                  Tiếp Theo: Thanh Toán →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className={styles.sectionTitle}>Phương Thức Thanh Toán</h2>
              {[
                { id: "cod", label: "Thanh toán khi nhận hàng (COD)", icon: "💵" },
                { id: "bank", label: "Chuyển khoản ngân hàng", icon: "🏦" },
                { id: "card", label: "Thẻ tín dụng/ghi nợ", icon: "💳" },
                { id: "momo", label: "Ví MoMo / ZaloPay", icon: "📱" },
              ].map((opt) => (
                <div key={opt.id} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{opt.icon}</span>
                  <input type="radio" name="payment" id={opt.id} defaultChecked={opt.id === "cod"} />
                  <label htmlFor={opt.id} style={{ fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", textTransform: "none", letterSpacing: 0 }}>
                    {opt.label}
                  </label>
                </div>
              ))}
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <button className="btn btn-glass" onClick={() => setStep(2)}>← Quay Lại</button>
                <button className="btn btn-gold" style={{ flex: 1, justifyContent: "center" }} onClick={() => setSuccess(true)}>
                  Đặt Hàng ({totalPrice.toLocaleString("vi-VN")}đ)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className={styles.summaryCol}>
          <h3 className={styles.summaryTitle}>Đơn Hàng ({totalItems} sản phẩm)</h3>
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImg}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                  <span className={styles.qty}>{item.quantity}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 500 }}>{item.name}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>{item.category}</p>
                </div>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold-light)" }}>
                  {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                </p>
              </div>
            ))}
          </div>
          <div className={styles.coupon}>
            <input className="input-luxury" type="text" placeholder="Mã giảm giá..." />
            <button className="btn btn-outline" style={{ whiteSpace: "nowrap" }}>Áp Dụng</button>
          </div>
          <div className={styles.totals}>
            <div className={styles.totalRow}><span>Tạm tính</span><span>{totalPrice.toLocaleString("vi-VN")}đ</span></div>
            <div className={styles.totalRow}><span>Vận chuyển</span><span style={{ color: "var(--color-gold)" }}>Miễn phí</span></div>
            <div className={`${styles.totalRow} ${styles.grandTotal}`}>
              <span>Tổng cộng</span>
              <span>{totalPrice.toLocaleString("vi-VN")}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
