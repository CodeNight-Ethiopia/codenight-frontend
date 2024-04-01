import StickyBottomBanner from "@/components/StickyBottomBanner";
import Nav from "@/components/nav/Nav";
import { Toaster } from "@/components/ui/toaster"

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
				rel="preconnect"
				href="https://cdn.fontshare.com"
				crossOrigin="anonymous"
				/>
				<link
				rel="stylesheet"
				href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
				/>
			
      <body>
        <main>
          <Nav />
          {children}
          <StickyBottomBanner />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
