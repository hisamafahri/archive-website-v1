import { GoogleFonts } from "next-google-fonts";
import Head from "next/head";

function Header({ title }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Playfair+Display:wght@400;900&display=swap" />
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title} - Hisam A Fahri </title>
        <meta name="title" content={`${title} - Hisam A Fahri`} />
        <meta
          name="description"
          content="Hi, I am Hisam A Fahri, a coder and designer. I am a human that always trying to learn something extraordinary."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Hisam A Fahri`} />
        <meta
          property="og:description"
          content="Hi, I am Hisam A Fahri, a coder and designer. I am a human that always trying to learn something extraordinary."
        />
        <meta property="og:image" content="/cover-hisamafahri.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${title} - Hisam A Fahri`} />
        <meta
          property="twitter:description"
          content="Hi, I am Hisam A Fahri, a coder and designer. I am a human that always trying to learn something extraordinary."
        />
        <meta property="twitter:image" content="/cover-hisamafahri.png" />
      </Head>
    </>
  );
}

export default Header;
