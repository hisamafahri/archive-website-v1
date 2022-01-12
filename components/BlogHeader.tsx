import React, { ReactElement } from 'react'
import { COLORS } from '../constants/color'
import homeStyle from '../styles/HeaderFooter.module.css'
import fontStyle from '../styles/Fonts.module.css'
import Link from 'next/link'

export default function Header({ title = 'Hisam Fahri' }: any): ReactElement {
    return (
        <div className={homeStyle.blogHeader}>
            <p className={fontStyle.textBase} style={{ color: COLORS.mainGreen, marginTop: '4px', marginBottom: 0 }}>
                <Link href='/' passHref={true}>
                    <span className={homeStyle.headerNav} onClick={() => { }}>Home</span>
                </Link>  | <Link href='/about' passHref={true}>
                    <span className={homeStyle.headerNav} onClick={() => { }}>About</span>
                </Link>  |  <Link href='/writing' passHref={true}>
                    <span className={homeStyle.headerNav} onClick={() => { }}>Writing</span>
                </Link>  |  <Link href='/project' passHref={true}>
                    <span className={homeStyle.headerNav} onClick={() => { }}>Project</span>
                </Link>
            </p>
        </div>
    )
}
