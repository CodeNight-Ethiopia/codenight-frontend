import React from 'react'
import Nav from './nav/Nav'
import StickyBottomBanner from './StickyBottomBanner'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<StickyBottomBanner />
		</>
	)
}

export default Layout
