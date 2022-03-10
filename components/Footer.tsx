import Link from 'next/link'
import React, { ReactElement } from 'react'
import { COLORS } from '../constants/color'
import globalStyle from '../styles/Global.module.css'
import homeStyle from '../styles/HeaderFooter.module.css'
import fontStyle from '../styles/Fonts.module.css'

export default function Footer({ }: any): ReactElement {
    return (
        <footer className={globalStyle.footer}>
            <p className={fontStyle.textSubBase} style={{ color: COLORS.secondaryTextGrey, margin: 0 }}>© {new Date().getFullYear()} Hisam Fahri (<Link href='/gpg.txt' passHref={true}><span className={homeStyle.footerNav} onClick={() => { }}>GPG Key</span></Link>)</p>
            <div className={fontStyle.textSubBase} style={{ color: COLORS.secondaryTextGrey }}>
                <Link href='/' passHref={true}>
                    <span className={homeStyle.footerNav} onClick={() => { }}>Home</span>
                </Link>  | <Link href='/about' passHref={true}>
                    <span className={homeStyle.footerNav} onClick={() => { }}>About</span>
                </Link>  |  <Link href='/writing' passHref={true}>
                    <span className={homeStyle.footerNav} onClick={() => { }}>Writing</span>
                </Link>  |  <Link href='/project' passHref={true}>
                    <span className={homeStyle.footerNav} onClick={() => { }}>Project</span>
                </Link>
            </div>
        </footer>
    )
}
