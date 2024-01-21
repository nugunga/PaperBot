'use client'

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <h1 id="abc">ABC</h1>
    </main>
    <style jsx>{`
      #abc{
        font-size: 64px;
        color: red;
      }
    `}</style>
    </>
  );
}
