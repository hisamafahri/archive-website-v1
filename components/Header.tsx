import React, { ReactElement } from 'react'
import { COLORS } from '../constants/color'
import homeStyle from '../styles/HeaderFooter.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Logo from '../assets/svg/Logo'
import Link from 'next/link'

export default function Header({ title='Hisam Fahri' }: any): ReactElement {
    return (
        <div className={homeStyle.header}>
            <Link href='/' passHref={true}>
                <div className={homeStyle.logo}>
                    <Logo />
                </div>
            </Link>
            <div className={homeStyle.navigator}>
                <p className={fontStyle.textH2} style={{ color: COLORS.textGrey, margin: 0 }}>{title}</p>
                <p className={fontStyle.textBase} style={{ color: COLORS.mainGreen, marginTop: '4px', marginBottom: 0 }}>
                    <Link href='/' passHref={true}>
                        <span className={homeStyle.headerNav} onClick={() => { }}>Home</span>
                    </Link>  | <Link href='/about' passHref={true}>
                        <span className={homeStyle.headerNav} onClick={() => { }}>About</span>
                    </Link>  |  <Link href='https://github.com/hisamafahri' passHref={true}>
                        <span className={homeStyle.headerNav} onClick={() => { }}>Project</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
