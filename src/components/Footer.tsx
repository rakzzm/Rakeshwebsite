import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p className={styles.footerText}>
          &copy; 2026 Rakesh Mohan. Transforming businesses through innovation.
        </p>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
