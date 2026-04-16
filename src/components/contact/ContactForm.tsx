"use client";
import Link from "next/link";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div>
      <h2 className={styles.title}>Gửi Tin Nhắn</h2>
      <form
        onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn! Chúng tôi sẽ liên hệ lại sớm nhất."); }}
        className={styles.form}
      >
        <div className={styles.grid2}>
          <div>
            <label htmlFor="fname">Họ</label>
            <input id="fname" type="text" className="input-luxury" placeholder="Nguyễn" />
          </div>
          <div>
            <label htmlFor="lname">Tên</label>
            <input id="lname" type="text" className="input-luxury" placeholder="Văn A" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="input-luxury" placeholder="email@example.com" />
        </div>
        <div>
          <label htmlFor="phone">Số Điện Thoại</label>
          <input id="phone" type="tel" className="input-luxury" placeholder="+84 ..." />
        </div>
        <div>
          <label htmlFor="subject">Chủ Đề</label>
          <select id="subject" className="input-luxury" style={{ cursor: "pointer" }}>
            <option value="">Chọn chủ đề...</option>
            <option>Đặt Lịch Học Thử</option>
            <option>Khóa Học & Lịch Tập</option>
            <option>Retreat & Tour</option>
            <option>Sản Phẩm Yoga</option>
            <option>Hợp Tác & Doanh Nghiệp</option>
            <option>Khác</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Nội Dung</label>
          <textarea
            id="message"
            className="input-luxury"
            rows={5}
            placeholder="Chia sẻ với chúng tôi điều bạn cần..."
            style={{ resize: "vertical" }}
          />
        </div>
        <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
          Gửi Tin Nhắn
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
        <div className={styles.cta}>
          <div className={styles.ctaBox}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎁</div>
            <h3 className={styles.ctaTitle}>Buổi Học Thử Miễn Phí</h3>
            <p className={styles.ctaDesc}>
              Trải nghiệm 1 buổi yoga hoàn toàn miễn phí. Không cần cam kết, không cần kinh nghiệm.
            </p>
            <Link href="/classes" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              Đặt Ngay
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
