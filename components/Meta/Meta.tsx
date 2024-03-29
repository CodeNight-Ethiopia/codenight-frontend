import Head from "next/head";

interface MetaTypes {
	title?: string | null;
	desc?: string;
	image?: string;
	robots?: string;
	url?: string;
	tags?: string;
	type?: "Website" | "Article";
	author?: string;
	published_date?: string;
	edited_date?: string;
}

const Meta: React.FC<MetaTypes> = ({
	title,
	desc,
	image,
	robots,
	url,
	tags,
	author,
	published_date,
	edited_date,
	type = "Website",
}) => {
	const commonTitle = title ? `${title} || CodeNight` : "CodeNight";
	const commonDesc =
		desc ?? "Community of 🇪🇹 developers to showcase their projects";

	return (
		<Head>
			<title>{commonTitle}</title>
			<meta name="robots" content={robots ? robots : "index, follow"} />
			<meta name="description" content={commonDesc} />

			{/* Og tags */}
			<meta property="og:title" content={commonTitle} />
			<meta property="og:description" content={commonDesc} />
			<meta property="og:url" content={`${url ?? "https://codenight.et/"}`} />
			<meta property="og:site_name" content="CodeNight" />
			<meta
				property="og:image"
				content={`${image ?? "https://codenight.et/big-banner.png"}`}
			/>
			<meta property="og:type" content={type} />

			{/* Article tags */}
			{published_date ? (
				<meta property="article:published_time" content={published_date} />
			) : null}
			{edited_date ? (
				<meta property="article:modified_time" content={edited_date} />
			) : null}
			{author ? <meta property="article:author" content={author} /> : null}
			{tags ? <meta property="article:tag" content={tags} /> : null}

			{/* Twitter tags */}
			<meta name="twitter:title" content={commonTitle} />
			<meta name="twitter:description" content={commonDesc} />
			<meta
				name="twitter:image"
				content={`${image ?? "https://codenight.et/big-banner.png"}`}
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<link rel="canonical" href={`${url ?? "https://codenight.et"}`} />

			{/* Icons tags */}
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
	);
};

export default Meta;
