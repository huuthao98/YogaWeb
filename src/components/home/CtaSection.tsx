import Link from "next/link";
import Image from "next/image";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section} aria-label="Call to Action">
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      {/* Sacred geometry decoration */}
      <div className={styles.geometry}>
        <svg viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="rgba(212,175,106,0.06)" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="100" stroke="rgba(212,175,106,0.08)" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="60" stroke="rgba(212,175,106,0.1)" strokeWidth="0.5" />
          <polygon points="150,20 270,90 270,210 150,280 30,210 30,90" stroke="rgba(212,175,106,0.06)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.lotus}>
          <Image src="/logo.jpg" alt="Logo" width={48} height={48} style={{ opacity: 0.5 }} />
        </div>
        <div className="section-label">Bắt Đầu Ngay Hôm Nay</div>
        <h2 className={styles.title}>
          Sẵn Sàng Bắt Đầu
          <br />
          <em className="text-gradient-gold">Hành Trình Của Bạn?</em>
        </h2>
        <p className={styles.desc}>
          Hãy để chúng tôi đồng hành cùng bạn trên con đường yoga và tỉnh thức.
          Buổi học thử miễn phí đang chờ bạn — không cần kinh nghiệm, 
          chỉ cần một trái tim sẵn sàng.
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className="btn btn-gold">
            Đặt Lịch Học Thử Miễn Phí
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </Link>
          <Link href="/classes" className="btn btn-glass">
            Xem Tất Cả Khóa Học
          </Link>
        </div>
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <span>✓</span>
            <span>Buổi đầu miễn phí</span>
          </div>
          <div className={styles.trustItem}>
            <span>✓</span>
            <span>Không cần kinh nghiệm</span>
          </div>
          <div className={styles.trustItem}>
            <span>✓</span>
            <span>Huỷ bất cứ lúc nào</span>
          </div>
        </div>
      </div>
    </section>
  );
}
