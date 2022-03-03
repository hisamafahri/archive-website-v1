import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../../constants/color'
import globalStyle from '../../styles/Global.module.css'
import fontStyle from '../../styles/Fonts.module.css'
import Header from '../../components/Header'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Writing: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Writing</title>
                <meta name="description" content="Hisam Fahri's Personal Website" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={globalStyle.main}>
                <Header title='Writing' />
                <div>
                    <p className={fontStyle.textH2} style={{ color: COLORS.textGrey, cursor: "pointer", width: "fit-content" }}>2022</p>
                    <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginTop: "20px" }}>
                        <p style={{ color: COLORS.secondaryTextGrey }}>03 Mar 2022 <Link href="/writing/20220303" passHref={true}><span className={fontStyle.underlinedPink} style={{ color: COLORS.textGrey }}>Let&apos;s get started</span></Link></p>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Writing