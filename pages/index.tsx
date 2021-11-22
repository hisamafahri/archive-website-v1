import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS } from '../constants/color'
import globalStyle from '../styles/Global.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'

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
        <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginBottom: '64px' }}>
          <p>Hi, I’m Hisam Fahri, a human, full-stack mobile and web developer, designer, and Formula 1 + Sherlock Holmes’ fan. Currently, working as a Software Engineer at Alpha AI.</p>
          <p>I am trying to write and share my thoughts more in form of a <Link href='/writing'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>blog post</span></Link>, but who knows at the time you are reading this, I might be create more posts or even rarely touch my blog.</p>
          <p>You can find me on <Link href='https://github.com/hisamafahri'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>GitHub</span></Link>, <Link href='https://twitter.com/hisamafahri'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Twitter</span></Link>, <Link href='https://instagram.com/hisamafahri'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Instagram</span></Link>, <Link href='https://linkedin.com/in/hisamafahri'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>LinkedIn</span></Link>, and <Link href='mailto:hisamafahri@gmail.com'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Email</span></Link>.</p>
        </div>
        <div>
          <Link href='/project'>
            <p className={fontStyle.textH2} style={{ color: COLORS.mainGreen, cursor: 'pointer', width: 'fit-content' }}>Projects</p>
          </Link>
          <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginTop: '20px' }}>
            <p><Link href='https://editr.hisamafahri.com/'><span className={fontStyle.underlinedPink}>Editr</span></Link>: yet another simple rich text editor, built using SlateJS</p>
            <p><Link href='https://www.npmjs.com/package/tnkb'><span className={fontStyle.underlinedPink}>TNKB</span></Link>: an NPM package to validate and decode Indonesian's vehicle's registration/plate number</p>
            <p><Link href='https://www.github.com/hisamafahri/sandisam'><span className={fontStyle.underlinedPink}>SandiSam</span></Link>: personal password manager mobile app for iOS and android</p>
            <p><Link href='https://www.github.com/hisamafahri/website'><span className={fontStyle.underlinedPink}>Personal Website</span></Link>: this website. The design was heavily inspired by <Link href='https://github.com/probberechts/hexo-theme-cactus'><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Cactus Dark Theme</span></Link>, and built using NextJS</p>
            <p><Link href='https://www.relectr.com/'><span className={fontStyle.underlinedPink}>Relectr</span></Link>: tools to help teachers doing their repetitive task while focusing on the online teaching</p>
            <p><Link href='https://www.github.com/hisamafahri/ask-mee'><span className={fontStyle.underlinedPink}>AskMee</span></Link>: a simple desicion making app, inspired by Angela Yu's Project. Build for iOS and android</p>
            <p><Link href='https://www.behance.net/gallery/106137831/kitalulus-Rebranding-Concept'><span className={fontStyle.underlinedPink}>KitaLulus Redesign Concept</span></Link>: logo redesign and rebranding concept for KitaLulus</p>
          </div>
        </div>
      <Footer />
      </main>
    </div>
  )
}

export default Home
