import Document, { Html, Head, Main, NextScript } from 'next/document'
import { COLORS } from '../constants/color'

class MyDocument extends Document {
    static async getInitialProps(ctx:any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                </Head>
                <body style={{backgroundColor: COLORS.darkBackground}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument