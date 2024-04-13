import PageHead from "@/components/PageHead";
import Nav from "@/components/nav/Nav";
import Image from "next/image";
import Link from "next/link";
import V2 from "../assets/Image/V2.jpg";
import highlighted from "../assets/Image/highlighted.jpg";
import pic1 from "../assets/Image/pic1.jpg";
import pic2 from "../assets/Image/pic2.jpg";
import pic3 from "../assets/Image/pic3.jpg";
import pic4 from "../assets/Image/pic4.jpg";
import pic5 from "../assets/Image/pic5.jpg";
import pic6 from "../assets/Image/pic6.jpg";

const HeroSection = () => (
	<section className="hero bg-gray-900 text-white py-20">
		<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
			<div className="md:w-1/2 text-center md:text-left">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Welcome to Codenight Events
				</h1>
			</div>
			<div className="md:w-1/2 text-center md:text-right mt-4 md:mt-0">
				<p className="text-lg md:text-xl mb-6 text-pretty">
					Join us as we bring together passionate individuals from across the
					tech landscape to explore cutting-edge technologies.
				</p>
				<Link
					href="#events"
					className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md text-lg font-semibold inline-block"
				>
					Explore Upcoming Events
				</Link>
			</div>
		</div>
	</section>
);

const Description = () => (
	<section className="about-section bg-gray-100 py-12">
		<div className="max-w-3xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
				About Codenight Events
			</h2>
			<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
				At <span className="font-bold">Codenight Events</span>, we believe in
				the power of community, curiosity, and collaboration. Our gatherings are
				more than just tech meetups they are vibrant hubs of excitement, where
				like-minded individuals come together to share stories, reconnect with
				old friends, and make new ones.
			</p>
		</div>
	</section>
);

const Gallery = () => (
	<section className="past-meetups-section py-12">
		<div className="max-w-5xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
				Past Meetups
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic1} alt="Meetup 1" className="w-full h-auto" />
				</div>
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic2} alt="Meetup 1" className="w-full h-auto" />
				</div>
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic3} alt="Meetup 1" className="w-full h-auto" />
				</div>
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic4} alt="Meetup 1" className="w-full h-auto" />
				</div>
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic5} alt="Meetup 1" className="w-full h-auto" />
				</div>
				<div className="bg-white rounded-lg overflow-hidden shadow-md">
					<Image src={pic6} alt="Meetup 1" className="w-full h-auto" />
				</div>

				{/* Add more meetup images here */}
			</div>
		</div>
	</section>
);
const Stats = () => (
	<section className="stats-section bg-gray-900 text-white py-12">
		<div className="max-w-5xl mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<h3 className="text-2xl font-bold mb-2">Total Attendees</h3>
					<p className="text-3xl font-bold">500+</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<h3 className="text-2xl font-bold mb-2">Total Speakers</h3>
					<p className="text-3xl font-bold">50+</p>
				</div>
				<div className="bg-gray-800 p-6 rounded-lg text-center">
					<h3 className="text-2xl font-bold mb-2">Hours of Content</h3>
					<p className="text-3xl font-bold">100+</p>
				</div>
			</div>
		</div>
	</section>
);

const Session = () => (
	<section className="highlighted-sessions-section py-12">
		<div className="max-w-5xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
				Highlighted Session
			</h2>
			<div className="flex flex-col md:flex-row gap-14 items-center md:items-start">
				<Image
					src={highlighted}
					alt="Session 1"
					className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0"
				/>
				<div className="md:ml-6 md:w-2/3">
					<h3 className="text-2xl font-bold mb-2">Get-Together</h3>
					<p className="text-lg text-gray-700 mb-4">
						We all learned that the challenges we face are mostly similar, and
						networking is an essential approach to overcoming these
						challenges.We had fun sharing stories, meeting old friends and new
						ones, and challenging our ideas.
					</p>
					<a
						href="https://www.linkedin.com/company/code-night/?miniCompanyUrn=urn%3Ali%3Afsd_company%3A91708512&lipi=urn%3Ali%3Apage%3Acompanies_company_posts_index%3B3f27d26d-dcdd-4755-8b9a-7788113a97a6"
						className="text-indigo-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md inline-block"
					>
						Learn More
					</a>
				</div>
			</div>
		</div>
	</section>
);

const Email = () => (
	<section className="subscribe-section bg-gray-100 py-12">
		<div className="max-w-3xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
				Subscribe to Our Newsletter
			</h2>
			<p className="text-lg text-gray-700 text-center mb-6">
				Be the first to know by signing up for our email list.
			</p>
			<div className="flex items-center justify-center">
				<input
					type="email"
					placeholder="Your email address"
					className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
				/>
				<button className="bg-indigo-600 text-white py-2 px-4 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
					Subscribe
				</button>
			</div>
		</div>
	</section>
);

const Upcoming = () => (
	<section className="highlighted-sessions-section py-12">
		<div className="max-w-5xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
				Up coming events
			</h2>
			<div className="flex flex-col md:flex-row gap-14 items-center md:items-start">
				<Image
					src={V2}
					alt="dev meetup v2"
					className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0"
				/>
				<div className="md:ml-6 md:w-2/3">
					<h3 className="text-2xl font-bold mb-2">Dev Meetup V2</h3>
					<p className="text-lg text-gray-700 mb-4">
						Last year, we hosted an amaizzing dev meetup that left us all
						buzzing with excitement. we had alot of fun and we learned a lot
						from each other. Even we put faces to the usernames and the voices
						to the names.
					</p>
					<Link
						href="https://www.linkedin.com/company/code-night/?miniCompanyUrn=urn%3Ali%3Afsd_company%3A91708512&lipi=urn%3Ali%3Apage%3Acompanies_company_posts_index%3B3f27d26d-dcdd-4755-8b9a-7788113a97a6"
						className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md inline-block"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	</section>
);

const Footer = () => (
	<footer className="bg-gray-900 text-white py-6">
		<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
			<div className="mb-4 md:mb-0">
				<h4 className="text-lg font-bold mb-2">Quick Links</h4>
				<ul className="flex flex-col md:flex-row">
					<li className="mr-4">
						<Link href="/" className="hover:text-gray-300">
							Home
						</Link>
					</li>
					<li className="mr-4">
						<Link href="/dev-meetup-v2" className="hover:text-gray-300">
							Events
						</Link>
					</li>
					<li className="mr-4">
						<Link href="/about" className="hover:text-gray-300">
							About
						</Link>
					</li>
					<li>
						<Link href="/faq" className="hover:text-gray-300">
							FAQ
						</Link>
					</li>
				</ul>
			</div>
			<div className="text-center md:text-left">
				<p className="mb-2">© 2024 Codenight. All rights reserved.</p>
				<p>Designed with ❤️ by the community</p>
			</div>
		</div>
	</footer>
);
export default function events() {
	return (
		<>
			<PageHead />
			<main>
				<Nav />
				<HeroSection />
				<Description />
				<Gallery />
				<Stats />
				<Session />
				<hr className="my-12 border-gray-300 border-t-2" />
				<Upcoming />
				<Email />
				<Footer />
			</main>
			{/* <StickyBottomBanner /> */}
		</>
	);
}
