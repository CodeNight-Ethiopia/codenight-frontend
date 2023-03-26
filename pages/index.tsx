import Head from "next/head";
import { FC } from "react";

import Logo from "@/assets/Logo";
import Nav from "@/components/nav/Nav";

const posts = [
	{
		title: "Boost your conversion rate",
		href: "#",
		category: { name: "Article", href: "#" },
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
		readingTime: "6 min",
		author: {
			name: "Roel Aufderehar",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		title: "How to use search engine optimization to drive sales",
		href: "#",
		category: { name: "Video", href: "#" },
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
		date: "Mar 10, 2020",
		datetime: "2020-03-10",
		imageUrl:
			"https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
		readingTime: "4 min",
		author: {
			name: "Brenna Goyette",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		title: "Improve your customer experience",
		href: "#",
		category: { name: "Case Study", href: "#" },
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		imageUrl:
			"https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
		readingTime: "11 min",
		author: {
			name: "Daniela Metz",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
];

const PageHead = () => (
	<Head>
		<title>CodeNight</title>
		<meta
			name="description"
			content="Community of 🇪🇹 developers to showcase their projects"
		/>
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

const HeroSection = () => (
	<section className="px-4 py-32 mx-auto max-w-7xl">
		<div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
			<h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl md:leading-tight md:font-extrabold">
				Community of 🇪🇹 developers to showcase their projects
			</h1>
			<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
				Codenight, is a community of developers to showcase their projects. We
				offer you the opportunity to display your work publicly and reach people
				who are interested in developing their skills.
			</p>
			<form className="flex justify-center group w-full ">
				<input
					type="email"
					placeholder="Enter your email"
					className="py-2 px-4 w-80 rounded-l border border-gray-300 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue  text-gray-500"
				/>
				<button className="text-white py-2 px-4 bg-brand-black group-hover:bg-brand-blue group-focus:border-brand-blue rounded-r">
					Become a Member
				</button>
			</form>
		</div>
	</section>
);

const Projects = () => (
	<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
		<div className="absolute inset-0">
			<div className="bg-white h-1/3 sm:h-2/3" />
		</div>
		<div className="relative max-w-7xl mx-auto">
			<div className="text-center">
				<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
					Projects
				</h2>
				<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
					labore natus atque, ducimus sed.
				</p>
			</div>
			<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
				{posts.map((post, i) => (
					<Project key={`project-${i}`} post={post} />
				))}
			</div>
		</div>
	</div>
);

const Project: FC<{
	post: { title: string; href: string; description: string; imageUrl: string };
}> = ({ post }) => (
	<div
		key={post.title}
		className="flex flex-col rounded-lg shadow-lg overflow-hidden"
	>
		<div className="flex-shrink-0">
			<picture>
				<img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
			</picture>
		</div>
		<div className="flex-1 bg-white p-6 flex flex-col justify-between">
			<div className="flex-1">
				<a href={post.href} className="block mt-2">
					<p className="text-xl font-semibold text-gray-900">{post.title}</p>
					<p className="mt-3 text-base text-gray-500">{post.description}</p>
				</a>
			</div>
		</div>
	</div>
);

const AboutUs = () => (
	<div className="bg-white pt-16 lg:py-24">
		<div className="pb-16 bg-[#152258] lg:pb-0 lg:z-10 lg:relative">
			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
				<div className="relative lg:-my-8">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
					/>
					<div className="mx-auto max-w-md px-4 sm:max-w-3xl bg-[#040B27] sm:px-6 lg:p-0 lg:h-full">
						<div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
							<picture>
								<img
									className="object-contain lg:h-full lg:w-full"
									src="/logo-big.jpg"
									alt="CodeNight Developers Community"
								/>
							</picture>
						</div>
					</div>
				</div>
				<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
						<blockquote>
							<div>
								<h3 className="text-4xl font-bold hidden md:inline text-white">
									About us
								</h3>
								<p className="mt-6 text-2xl font-medium text-white">
									CodeNight Developers Community is a community of developers
									who are passionate about coding, software development, and
									technology in general. the community are individuals from
									diverse backgrounds and experiences, all coming together to
									learn from one another and contribute to the world of software
									development.
								</p>
							</div>
							<footer className="mt-6">
								<p className="text-base font-medium text-white">Written by</p>
								<p className="text-base font-medium text-indigo-100">
									Chat GPT
								</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const Partners = () => (
	<div className="bg-gray-50">
		<div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
			<h2 className="text-3xl text-center tracking-tight font-extrabold text-gray-900 sm:text-4xl">
				OUR PARTNERS
			</h2>

			<div className="grid grid-cols-1 my-10 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
				<picture>
					<img
						src={"https://www.hahucloud.com/images/hahucloud-logo.svg"}
						alt=""
						className="h-24 w-auto"
					/>
				</picture>
				<picture>
					<img
						src={"https://www.hahucloud.com/images/hahucloud-logo.svg"}
						alt=""
						className="h-24 w-auto"
					/>
				</picture>
				<picture>
					<img
						src={"https://www.hahucloud.com/images/hahucloud-logo.svg"}
						alt=""
						className="h-24 w-auto"
					/>
				</picture>
				<picture>
					<img
						src={"https://www.hahucloud.com/images/hahucloud-logo.svg"}
						alt=""
						className="h-24 w-auto"
					/>
				</picture>
			</div>
		</div>
	</div>
);

const StickyBottomBanner = () => (
	<div className="fixed inset-x-0 bottom-0 z-50">
		<div className="bg-indigo-600">
			<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between flex-wrap">
					<div className="w-0 flex-1 flex items-center">
						<span className="flex p-2 rounded-lg bg-indigo-800">
							<div
								className="h-6 w-6 flex justify-center items-center text-white"
								aria-hidden="true"
							>
								<Logo />
							</div>
						</span>
						<p className="ml-3 font-medium text-white truncate">
							<span className="hidden md:inline">
								Join the community on telegram
							</span>
						</p>
					</div>
					<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
						<a
							href="https://t.me/codenight"
							className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
						>
							Join Now
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default function Home() {
	return (
		<>
			<PageHead />
			<main>
				<Nav />
				<HeroSection />
				<Projects />
				<AboutUs />
				<Partners />
			</main>
			<StickyBottomBanner />
		</>
	);
}
