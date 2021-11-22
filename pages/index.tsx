import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../constants/color'
import globalStyle from '../styles/Global.module.css'
import homeStyle from '../styles/Home.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hisam Fahri</title>
        <meta name="description" content="Hisam Fahri's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={globalStyle.main}>
        <Header />
      </main>
    </div>
  )
}

export default Home
