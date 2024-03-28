import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type ContributorsType = {
	id: string
	html_url: string
	avatar_url: string
	login: string
}

const Contributors = () => {
	const [contributors, setContributors] = useState<ContributorsType[] | null>(
		null
	)
	const contributorAPI =
		'https://api.github.com/repos/CodeNight-Ethiopia/codenight-frontend/contributors'

	useEffect(() => {
		async function fetchContributors(url: string) {
			try {
				const response = await fetch(url)
				if (!response.ok) throw new Error(`API error: ${response.status}`)
				const data = (await response.json()) as ContributorsType[]
				setContributors(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchContributors(contributorAPI)
	}, [])
	return (
		<>
			<h1 className='my-10 text-3xl font-extrabold text-center text-gray-50'>
				Our Contributors
			</h1>
			{/* Contributors section */}
			<section className='flex flex-wrap justify-center max-w-2xl gap-4 px-10 mx-auto'>
				{contributors?.map((contributor) => {
					return (
						<Link
							href={contributor.html_url}
							key={contributor.id}
							className='relative w-12 h-12 overflow-hidden border rounded-full cursor-pointer border-yellow-50'>
							<Image
								src={contributor.avatar_url}
								alt={contributor.login}
								height={50}
								width={50}
							/>
						</Link>
					)
				})}
			</section>
			{/* spacing */}
			<div className='py-16' />
		</>
	)
}

export default Contributors
