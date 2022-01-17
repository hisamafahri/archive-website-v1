import type { NextPage } from "next"
import Head from "next/head"
import { COLORS } from "../../constants/color"
import globalStyle from "../../styles/Global.module.css"
import fontStyle from "../../styles/Fonts.module.css"
import markdownStyle from "../../styles/Markdown.module.css"
import Footer from "../../components/Footer"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import BlogHeader from "../../components/BlogHeader"
import remarkGfm from "remark-gfm"

const Writing: NextPage = ({ content, data }: any) => {
    const metadata = data
    return (
        <div>
            <Head>
                <title>{metadata.title} - A Hisam&apos;s Writing</title>
                <meta name="description" content="Hisam Fahri's Personal Website" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={globalStyle.main}>
                <BlogHeader title={metadata.title} />
                <div>
                    <p className={fontStyle.textH2} style={{ color: COLORS.mainGreen }}>{metadata.title}</p>
                    <p className={fontStyle.textBase} style={{ color: COLORS.textGrey, margin: 0 }}>{metadata.author.toUpperCase()} | {new Date(metadata.date).toDateString().substring(3, new Date(metadata.date).toDateString().length)}</p>
                </div>
                <div className={fontStyle.textBase} style={{ color: COLORS.textGrey }}>
                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[remarkGfm]}
                        className={markdownStyle.markdown}
                    />
                </div>
                <Footer />
            </main>
        </div>
    )
}

Writing.getInitialProps = async (context) => {
    const { id } = context.query
    const content = await import(`../../data/${id}.md`)
    const data = matter(content.default)
    return { ...data }
}

export default Writing
