import Head from 'next/head'

import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}
