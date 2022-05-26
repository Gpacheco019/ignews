import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
      <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 hey, welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>
            get access to all the pubications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}