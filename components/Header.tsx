import React, { ReactElement } from 'react'
import { COLORS } from '../constants/color'
import homeStyle from '../styles/Home.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Logo from '../assets/svg/Logo'

export default function Header({ }: any): ReactElement {
    return (
        <div className={homeStyle.header}>
            <div onClick={() => { }} className={homeStyle.logo}>
                <Logo />
            </div>
            <div className={homeStyle.navigator}>
                <p className={fontStyle.textH2} style={{ color: COLORS.white, margin: 0 }}>Hisam Fahri</p>
                <p className={fontStyle.textBase} style={{ color: COLORS.mainGreen, marginTop: '4px', marginBottom: 0 }}><span className={homeStyle.headerNav} onClick={() => { }}>Home</span>  |  <span className={homeStyle.headerNav} onClick={() => { }}>About</span>  |  <span className={homeStyle.headerNav} onClick={() => { }}>Writing</span>  |  <span className={homeStyle.headerNav} onClick={() => { }}>Project</span></p>
            </div>
        </div>
    )
}
