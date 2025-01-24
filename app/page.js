import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log('...Executing')
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <p><Link href="/meals">Meals</Link></p>
        <p><Link href="/meals/share">Share Meals</Link></p>
        <p><Link href="/community">Community</Link></p>
      </main>
    </div>
  );
}
