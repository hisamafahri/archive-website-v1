import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../constants/color'
import globalStyle from '../styles/Global.module.css'
import fontStyle from '../styles/Fonts.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hisam Fahri</title>
        <meta name="description" content="Hisam Fahri's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={globalStyle.main}>
        <p className={fontStyle.textSubBase} style={{ color: COLORS.textGrey }}>.textSubBase</p>
        <p className={fontStyle.textBase} style={{ color: COLORS.textGrey }}>.textBase</p>
        <p className={fontStyle.textH3} style={{ color: COLORS.textGrey }}>.textH3</p>
        <p className={fontStyle.textH2} style={{ color: COLORS.textGrey }}>.textH2</p>
        <p className={fontStyle.textSubBaseUnderlined} style={{ color: COLORS.textGrey }}>.textSubBaseUnderlined</p>
        <p className={fontStyle.textBaseUnderlined} style={{ color: COLORS.textGrey }}>.textBaseUnderlined</p>
        <p className={fontStyle.textH3Underlined} style={{ color: COLORS.textGrey }}>.textH3Underlined</p>
        <p className={fontStyle.textH2Underlined} style={{ color: COLORS.textGrey }}>.textH2Underlined</p>
      </main>
    </div>
  )
}

export default Home
