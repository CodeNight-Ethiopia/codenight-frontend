import { BackgroundImage } from "./bg-image";
import { Button } from "@/components/ui/button";
import { Wrapper } from "./wrapper";
import { SectionHeading } from "./section-heading";
import { Register } from "./register-popup";

export function UpcomingEvent() {
  return (
    <div className="relative pb-20 font-display sm:pb-24 sm:pt-15 md:flex">
      <BackgroundImage className="-bottom-14 -top-36 w-full" />
      <Wrapper className="relative">
        <SectionHeading number="2">Upcominng Events</SectionHeading>
        <div className="mx-auto  mt-5 max-w-2xl lg:max-w-6xl lg:px-3">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">CodeNight - </span>Codenight Dev 2 In
            Person Meetup.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At CodeNight Dev 2 Meetup you’ll learn about the latest dark
              patterns being developed to trick even the smartest visitors, and
              you’ll learn how to deploy them without ever being detected.
            </p>
          </div>
          <Register />
          {/* <Button
            variant={"blue"}
            className="mt-5 w-52 h-10 text-xl ml-auto font-bold py-8"
          >
            Get your tickets
          </Button> */}
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "200"],
              ["Venue", "ALX"],
              ["Location", "Addis Ababa"],
              ["Date", "Apr 14 , 2024"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl  font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Wrapper>
      <div className="sm:hidden mr-1 md:hidden lg:flex mt-14 flex ml-[-00px] justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        <div className="ml-auto w-52 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
          <div className="relative">
            <img
              src="/community/pic-4.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="mr-auto w-52 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <img
              src="/community/pic-6.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              src="/community/pic-8.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
          <div className="relative">
            <img
              src="/community/pic-7.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              src="/community/pic-9.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
