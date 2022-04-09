import type { NextPage } from "next"
import Head from "next/head"
import { COLORS } from "../constants/color"
import globalStyle from "../styles/Global.module.css"
import fontStyle from "../styles/Fonts.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import Link from "next/link"

const Project: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Project</title>
                <meta name="description" content="Hisam Fahri's Personal Website" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={globalStyle.main}>
                <Header title="Project" />
                <div className={fontStyle.textBase} style={{ color: COLORS.textGrey }}>
                    <p>Most of my projects are open-source and can be found on my <Link href="https://github.com/hisamafahri" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>GitHub</span></Link> or its respective GitHub organization. But few of them are also close-source.</p>
                </div>
                <div className={fontStyle.textBase} style={{ color: COLORS.textGrey, marginTop: "48px" }}>
                    <p><Link href="https://github.com/hisamafahri/coco" passHref={true}><span className={fontStyle.underlinedPink}>coco</span></Link>: the all-in-one color conversion package for go</p>
                    <p><Link href="https://github.com/hisamafahri/cm" passHref={true}><span className={fontStyle.underlinedPink}>cm</span></Link>: a CLI tools to easily commit changes by following <Link href="https://www.conventionalcommits.org/en/v1.0.0/" passHref={true}><span className={fontStyle.underlinedPink}>the conventional commit</span></Link>. Built using go</p>
                    <p><Link href="https://github.com/hisamafahri/wipe-for-you" passHref={true}><span className={fontStyle.underlinedPink}>Wipe For You</span></Link>: a chrome extensions to remove GitHub&apos;s &quot;For You&quot; section</p>
                    <p><Link href="https://github.com/hisamafahri/ting" passHref={true}><span className={fontStyle.underlinedPink}>ting</span></Link>: a CLI for useful tools for day-to-day developer. Built using go</p>
                    <p><Link href="https://editr.hisamafahri.com/" passHref={true}><span className={fontStyle.underlinedPink}>Editr</span></Link>: yet another simple rich text editor, built using SlateJS</p>
                    <p><Link href="https://www.github.com/hisamafahri/unilamaps" passHref={true}><span className={fontStyle.underlinedPink}>Unila Maps</span></Link>: a navigator app for University of Lampung area. Available for iOS and android.</p>
                    <p><Link href="https://www.npmjs.com/package/tnkb" passHref={true}><span className={fontStyle.underlinedPink}>TNKB</span></Link>: an NPM package to validate and decode Indonesian&apos;s vehicle&apos;s registration/plate number</p>
                    <p><Link href="https://www.github.com/hisamafahri/sandisam" passHref={true}><span className={fontStyle.underlinedPink}>SandiSam</span></Link>: personal password manager mobile app for iOS and android</p>
                    <p><Link href="https://www.github.com/hisamafahri/website" passHref={true}><span className={fontStyle.underlinedPink}>Personal Website</span></Link>: this website. The design was heavily inspired by <Link href="https://github.com/probberechts/hexo-theme-cactus" passHref={true}><span className={`${fontStyle.textBase} ${fontStyle.underlinedPink}`}>Cactus Dark Theme</span></Link>, and built using NextJS</p>
                    <p><Link href="https://www.relectr.com/" passHref={true}><span className={fontStyle.underlinedPink}>Relectr</span></Link>: tools to help teachers doing their repetitive task while focusing on the online teaching</p>
                    <p><Link href="https://www.github.com/hisamafahri/ask-mee" passHref={true}><span className={fontStyle.underlinedPink}>AskMee</span></Link>: a simple desicion making app, inspired by Angela Yu&apos;s Project. Build for iOS and android</p>
                    <p><Link href="https://www.behance.net/gallery/106137831/kitalulus-Rebranding-Concept" passHref={true}><span className={fontStyle.underlinedPink}>KitaLulus Redesign Concept</span></Link>: logo redesign and rebranding concept for KitaLulus</p>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Project