import React from 'react'
import Nav from './nav/Nav'
import StickyBottomBanner from './StickyBottomBanner'
import PageHead from './PageHead'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<PageHead />
			<Nav />
			<main>{children}</main>
			<StickyBottomBanner />
		</>
	)
}

export default Layout
