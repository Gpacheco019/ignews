import styles from './styles.module.scss'
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with a Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum delectus enim, quia deserunt earum quaerat aperiam. Tenetur natus sit, accusantium consequuntur temporibus sed unde recusandae ipsam possimus? Repellat, vero!</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with a Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum delectus enim, quia deserunt earum quaerat aperiam. Tenetur natus sit, accusantium consequuntur temporibus sed unde recusandae ipsam possimus? Repellat, vero!</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with a Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum delectus enim, quia deserunt earum quaerat aperiam. Tenetur natus sit, accusantium consequuntur temporibus sed unde recusandae ipsam possimus? Repellat, vero!</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps =  async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}
