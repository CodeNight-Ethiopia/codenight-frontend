import Head from "next/head";

import hahucloud from "../assets/Image/hahucloud-logo.png";
import Logo from "@/assets/Logo";
import Nav from "@/components/nav/Nav";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Contributors from "@/components/contributors";

const HeroSection = () => (
  <section className="px-4 py-32 mx-auto max-w-7xl">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
      <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">
        Community of 🇪🇹 developers to showcase their projects
      </h1>
      <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
        Codenight, is a community of developers to showcase their projects. We
        offer you the opportunity to display your work publicly and reach people
        who are interested in developing their skills.
      </p>
    </div>
  </section>
);

const programs = [
  {
    name: "Debugging Session - Wednesday",
    description:
      "Ask your questions and get answers from experienced developers.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
        />
      </svg>
    ),
  },
  {
    name: "Open Mic Discussion - Sunday",
    description:
      "Join our weekly discussion about the latest technologies and trends.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    name: "Chat with other developers - 24/7",
    description: "Chat with other developers and share your knowledge.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

const Programs = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
        Our Programs
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Meet our Community Members
      </p>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {programs.map((feature) => (
            <div key={feature.name} className="pt-6 h-full">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg text-white">
                      <feature.icon />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="bg-white pt-16 lg:py-24">
    <div className="pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="object-cover lg:h-full lg:w-full"
                src="/big-banner.png"
                alt="CodeNight Developers Community"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <p className="mt-6 text-2xl font-medium text-white">
                  CodeNight Developers Community is a community of developers
                  who are passionate about coding, software development, and
                  technology in general. the community are individuals from
                  diverse backgrounds and experiences, all coming together to
                  learn from one another and contribute to the world of software
                  development.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Partners = () => (
  <div className="mb-24">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center">Special Thanks To</h2>
      <div className="flow-root mt-8 lg:mt-10">
        <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
          <div className="mt-4 ml-8 flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 flex justify-center">
            <picture>
              <Image
                className="h-12 outline-black outline-2 object-cover"
                src={hahucloud}
                alt="HahuCloud"
                width={300}
                height={48}
              />
            </picture>
          </div>
        </div>
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
        <Programs />
        <AboutUs />
        <Partners />
        <Contributors />
      </main>
      <StickyBottomBanner />
    </>
  );
}
