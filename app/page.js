import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p><Link href="/meals">Meals</Link></p>
        <p><Link href="/meals/share">Share Meals</Link></p>
        <p><Link href="/community">Community</Link></p>
      </main>
    </div>
  );
}
