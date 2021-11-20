import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { COLORS } from '../constants/color'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hisam Fahri</title>
        <meta name="description" content="Hisam Fahri's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <p style={{color: COLORS.white}}># Hello, world!</p>
      </main>
    </div>
  )
}

export default Home
