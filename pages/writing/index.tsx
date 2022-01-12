import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../../constants/color'
import globalStyle from '../../styles/Global.module.css'
import fontStyle from '../../styles/Fonts.module.css'
import Header from '../../components/Header'
import Image from 'next/image'
import Footer from '../../components/Footer'

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
                <div className={fontStyle.textH2} style={{ color: COLORS.textGrey, textAlign: 'center' }}>
                    <p>Coming soon...</p>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Writing