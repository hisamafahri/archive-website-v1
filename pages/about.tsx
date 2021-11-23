import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../constants/color'
import globalStyle from '../styles/Global.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'

const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="Hisam Fahri's Personal Website" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={globalStyle.main}>
                <Header title='About' />
                <div className={fontStyle.textBase} style={{ color: COLORS.textGrey }}>
                    <p>Hi, I’m Hisam Fahri, a human, full-stack mobile and web developer, designer, and Formula 1 + Sherlock Holmes’ fan.</p>
                    <div style={{ width: '768px', height: '403.64px', position: 'relative', marginTop: '48px', marginBottom: '48px' }}>
                        <Image alt="Vercel logo" src='/self.png' layout='fill' />
                    </div>
                    <p>Born and raised in Indonesia, made me believe that this world is HUGE, but also have a HUGE amount of problems to solve. Everyday, I am wondering, “What should I do to bring meaningful impact to other people’s live, today?”</p>
                    <p>With those spirits in mind, every single day, no matter how small or big, I am trying to learn, understand, and help solving --not just mine, but also other people’s-- problems.</p>
                    <p>My works focuses on four things: “works great, easy to use, looks beautiful, and beneficial”.</p>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default About