import type { NextPage } from "next"
import Head from "next/head"
import { COLORS } from "../constants/color"
import globalStyle from "../styles/Global.module.css"
import fontStyle from "../styles/Fonts.module.css"
import Header from "../components/Header"
import Link from "next/link"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hisam Fahri</title>
        <meta name="description" content="Hisam Fahri's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={globalStyle.main}>
        <Header title="Hisam Fahri" />
        <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginBottom: "64px" }}>
          <p>Hi, I’m Hisam Fahri, a human, full-stack mobile and web developer, designer, and Formula 1 + Sherlock Holmes’ fan. Currently, working as a Software Engineer at PCCW Solutions.</p>
          <p>I am trying to write and share my thoughts more in form of a <Link href="/writing" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>blog post</span></Link>, but who knows at the time you are reading this, I might be create more posts or even rarely touch my blog.</p>
          <p>You can find me on <Link href="https://github.com/hisamafahri" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>GitHub</span></Link>, <Link href="https://twitter.com/hisamafahri" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Twitter</span></Link>, <Link href="https://instagram.com/hisamafahri" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Instagram</span></Link>, <Link href="https://linkedin.com/in/hisamafahri" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>LinkedIn</span></Link>, and <Link href="mailto:me@hisamafahri.com" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Email (me@hisamafahri.com)</span></Link>.</p>
        </div>
        <div>
          <Link href="/project" passHref={true}>
            <p className={fontStyle.textH2} style={{ color: COLORS.mainGreen, cursor: "pointer", width: "fit-content" }}>Projects</p>
          </Link>
          <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginTop: "20px" }}>
            <p><Link href="https://github.com/hisamafahri/nit" passHref={true}><span className={fontStyle.underlinedPink}>nit</span></Link>: a git CLI wrapperA CLI to replace your git command, so your git workflow can become more consistent, and fun. Built using Rust</p>
            <p><Link href="https://github.com/hisamafahri/coco" passHref={true}><span className={fontStyle.underlinedPink}>coco</span></Link>: the all-in-one color conversion package for go</p>
            <p><Link href="https://github.com/hisamafahri/wipe-for-you" passHref={true}><span className={fontStyle.underlinedPink}>Wipe For You</span></Link>: a chrome extensions to remove GitHub&apos;s &quot;For You&quot; section</p>
            <p><Link href="https://editr.hisamafahri.com/" passHref={true}><span className={fontStyle.underlinedPink}>Editr</span></Link>: yet another simple rich text editor, built using SlateJS</p>
            <p><Link href="https://github.com/hisamafahri/cm" passHref={true}><span className={fontStyle.underlinedPink}>cm</span></Link>: a CLI tools to easily commit changes by following <Link href="https://www.conventionalcommits.org/en/v1.0.0/" passHref={true}><span className={fontStyle.underlinedPink}>the conventional commit</span></Link>. Built using go</p>
            <p><Link href="https://www.github.com/hisamafahri/unilamaps" passHref={true}><span className={fontStyle.underlinedPink}>Unila Maps</span></Link>: a navigator app for University of Lampung area. Available for iOS and android.</p>
            <p><Link href="https://www.github.com/hisamafahri/website" passHref={true}><span className={fontStyle.underlinedPink}>Personal Website</span></Link>: this website. The design was heavily inspired by <Link href="https://github.com/probberechts/hexo-theme-cactus" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Cactus Dark Theme</span></Link>, and built using NextJS</p>
            <p><Link href="https://www.relectr.com/" passHref={true}><span className={fontStyle.underlinedPink}>Relectr</span></Link>: tools to help teachers doing their repetitive task while focusing on the online teaching</p>
            <p><Link href="https://github.com/hisamafahri/ting" passHref={true}><span className={fontStyle.underlinedPink}>ting</span></Link>: a CLI for useful tools for day-to-day developer. Built using go</p>
            <p><Link href="https://www.npmjs.com/package/tnkb" passHref={true}><span className={fontStyle.underlinedPink}>TNKB</span></Link>: an NPM package to validate and decode Indonesian&apos;s vehicle&apos;s registration/plate number</p>
            <p><Link href="https://www.github.com/hisamafahri/sandisam" passHref={true}><span className={fontStyle.underlinedPink}>SandiSam</span></Link>: personal password manager mobile app for iOS and android</p>
            <p><Link href="https://www.github.com/hisamafahri/ask-mee" passHref={true}><span className={fontStyle.underlinedPink}>AskMee</span></Link>: a simple desicion making app, inspired by Angela Yu&apos;s Project. Build for iOS and android</p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Home
