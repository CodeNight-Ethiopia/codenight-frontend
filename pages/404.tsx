import Head from "next/head";
import { FC } from "react";

import Logo from "@/assets/Logo";
import Nav from "@/components/nav/Nav";
import Link from "next/link";

const PageHead = () => (
  <Head>
    <title>Coming Soon | CodeNight</title>
    <meta
      name="description"
      content="Community of Ethiopian developers to showcase their projects"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const HeroSection = () => (
  <section className="px-4 py-32 mx-auto max-w-7xl">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100">
        <Link href="/" title="CodeNight" aria-label="CodeNight">
          <Logo />
        </Link>
      </div>

      <div className="sm:flex justify-center items-center text-center flex-col">

      <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">
        Coming Soon
      </h1>
      <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
        Stay tuned for more updates
      </p>

      </div>
    </div>
  </section>
);

export default function ComingSoon() {
  return (
    <>
      <PageHead />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
