import React, { ReactElement } from 'react'
import { COLORS } from '../constants/color'
import homeStyle from '../styles/Home.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Logo from '../assets/svg/Logo'
import Link from 'next/link'

export default function Header({ }: any): ReactElement {
    return (
        <div className={homeStyle.header}>
            <div onClick={() => { }} className={homeStyle.logo}>
                <Logo />
            </div>
            <div className={homeStyle.navigator}>
                <p className={fontStyle.textH2} style={{ color: COLORS.textGrey, margin: 0 }}>Hisam Fahri</p>
                <p className={fontStyle.textBase} style={{ color: COLORS.mainGreen, marginTop: '4px', marginBottom: 0 }}>
                    <Link href='/'>
                        <span className={homeStyle.headerNav} onClick={() => { }}>Home</span>
                    </Link>  | <Link href='/about'>
                        <span className={homeStyle.headerNav} onClick={() => { }}>About</span>
                    </Link>  |  <Link href='/writing'>
                        <span className={homeStyle.headerNav} onClick={() => { }}>Writing</span>
                    </Link>  |  <Link href='/project'>
                        <span className={homeStyle.headerNav} onClick={() => { }}>Project</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}