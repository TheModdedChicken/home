import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logan Shaw</title>
        <meta name="description" content="Homepage for Logan Shaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className='font-semibold' >Website Under <a href="https://open.spotify.com/track/4Q3OgsT66RNNVvxBmf1p4W?si=78a9b4c0cc6a43a7">Construxion</a> :/</h4>
      </main>
    </div>
  )
}

export default Home
