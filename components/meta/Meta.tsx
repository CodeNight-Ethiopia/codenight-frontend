import Head from 'next/head';
import { FC } from 'react';

interface MetaProps {
    title?: string;
    desc?: string;
    image?: string;
    url?: string;
    tags?: string;
}

const Meta: FC<MetaProps> = ({ title, desc, image, url, tags }) => {
    return (
        <Head>
            <title>{`${title ? `${title} - CodeNight` : "CodeNight"}`}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={desc ?? "Community of 🇪🇹 developers to showcase their projects"} />

            <link rel="canonical" href={`${url ? url : 'https://codenight.et'}`} />
            {/* <meta name="google-site-verification" content="MdNrJGD6d5sAV9hQZlUPXSk6JmOaZ-XBbnLO48ZZZVk" /> // if codenight uses google search consol */}
            <meta property="og:title" content={`${title ? `${title} - CodeNight` : "CodeNight"}`} />
            <meta property="og:description" content={desc ?? "Community of 🇪🇹 developers to showcase their projects"} />
            <meta property="og:url" content={`${url ?? 'https://codenight.et'}`} />
            <meta property="og:site_name" content="Css tools" />
            <meta property="og:image" content={`${image ?? 'https://codenight.et/big-banner.png'}`} />
            { tags ? <meta property="keywords" content={`${tags}`} /> : null}
            <meta property="og:type" content='Website' />

            <meta name="google-site-verification" content="k1U_1YqFIMFAkAdRAElB1C42R9bZWEyN4OS-Yx37G1c" />
            <meta name="twitter:title" content={`${title}`} />
            <meta name="twitter:description" content={desc ?? ''} />
            <meta name="twitter:image" content={`${image ?? 'https://codenight.et/big-banner.png'}`} />
            <meta name="twitter:card" content="summary_large_image" />

            {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" /> */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Meta
