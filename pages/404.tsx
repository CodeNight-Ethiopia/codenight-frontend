import Head from 'next/head'
import { FC } from 'react'

import Logo from '@/assets/Logo'
import Link from 'next/link'

const PageHead = () => (
	<Head>
		<title>Coming Soon | CodeNight</title>
		<meta
			name='description'
			content='Community of Ethiopian developers to showcase their projects'
		/>
		<link rel='icon' href='/favicon.ico' />
	</Head>
)

const HeroSection = () => (
	<section className='px-4 py-32 mx-auto max-w-7xl '>
		<div className='w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center'>
			<div className='flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full '>
				<Link href='/' title='CodeNight' aria-label='CodeNight'>
					<Logo />
				</Link>
			</div>
			<h1 className='mb-3 text-4xl font-bold text-gray-100 md:text-5xl md:leading-tight md:font-extrabold'>
				404
			</h1>
			<p className='mb-6 text-lg text-gray-300 md:text-xl md:leading-normal'>
				Page not found
			</p>
		</div>
	</section>
)

export default function NotFound() {
	return (
		<>
			<PageHead />
			<main className='bg-slate-950 h-screen overflow-hidden'>
				<HeroSection />
			</main>
		</>
	)
}
