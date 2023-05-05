import Link from 'next/link'
import { useRouter } from 'next/router'
type TabProps = {
	link: string
	name: string
}
function Tab({ navLinks }: { navLinks: TabProps[] }) {
	const router = useRouter()

	return (
		<>
			{navLinks?.map((link) => (
				<li key={link.link}>
					<Link
						href={link.link}
						className={`font-medium tracking-wide text-gray-200 hover:text-gray-50 transition delay-150 ease-in-out duration-200 hover:text-deep-purple-accent-400 py-1 hover:bg-gray-800 hover:scale-y-125 rounded-sm px-2 ${
							router.pathname === link.link
								? 'bg-gray-700 rounded-sm px-2 py-1'
								: ''
						}`}>
						{link.name}
					</Link>
				</li>
			))}
		</>
	)
}

export default Tab
