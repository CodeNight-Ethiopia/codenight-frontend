"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Wrapper } from "./wrapper";
import { DiamondIcon } from "./icons/diamond";

import { SectionHeading } from "./section-heading";

const days = [
  {
    name: "Morning",
    date: "April 14",
    dateTime: "2022-04-04",
    speakers: [
      {
        name: "Thoe T3",
        role: "Full time OSS & Youtube",
        image: "https://media.licdn.com/dms/image/C4E03AQFLmpgLbJlfEw/profile-displayphoto-shrink_800_800/0/1595719913998?e=2147483647&v=beta&t=3E98YHVAzIg17LHqpYU3MJJ70sWr6NDKzj9kEdji2ng",
      },
      {
        name: "The Rustaceans",
        role: "Full time father & wife",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_lJ1PfKn5Fj0Fg1cgdkF7RTSCELyz_MbTiNuXVe=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Dianne Guilianelli",
        role: "Creator of RSC",
        image: "https://2018.jsconf.is/334be4f4b98a948a0ce4dcdad0774aa5.jpg",
      },
      {
        name: "Rich Harris",
        role: "Svelte Man",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",
      },
      {
        name: "Erhart Cockrin",
        role: "Product Lead at Cyberdyne Systems",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Parker Johnson",
        role: "UI Designer at MomCorp",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
    ],
  },
  {
    name: "Afternoons",
    date: "April 14",
    dateTime: "2022-04-05",
    speakers: [
      {
        name: "Damaris Kimura",
        role: "Senior Engineer at OCP",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Ibrahim Frasch",
        role: "Programmer at Umbrella Corp",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Cathlene Burrage",
        role: "Frontend Developer at Buy n Large",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Rinaldo Beynon",
        role: "Data Scientist at Rekall",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Waylon Hyden",
        role: "DevOps at RDA Corporation",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",

      },
      {
        name: "Giordano Sagucio",
        role: "Game Developer at Soylent Corp",
        image: "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",
      },
    ],
  },
//   {
//     name: "Interviews",
//     date: "April 6",
//     dateTime: "2022-04-06",
//     speakers: [
//       {
//         name: "Andrew Greene",
//         role: "Frontend Developer at Ultratech",
//         image: andrewGreeneImage,
//       },
//       {
//         name: "Heather Terry",
//         role: "Backend Developer at Xanatos Enterprises",
//         image: heatherTerryImage,
//       },
//       {
//         name: "Piers Wilkins",
//         role: "Full stack Developer at BiffCo",
//         image: piersWilkinsImage,
//       },
//       {
//         name: "Gordon Sanderson",
//         role: "Mobile Developer at Cobra Industries",
//         image: gordonSandersonImage,
//       },
//       {
//         name: "Kimberly Parsons",
//         role: "Game Developer at Tyrell Corporation",
//         image: kimberlyParsonsImage,
//       },
//       {
//         name: "Richard Astley",
//         role: "CEO at Roll Out",
//         image: richardAstley,
//       },
//     ],
//   },
];

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Wrapper className="font-display" size="lg">
        <SectionHeading number="3">Speakers & Workshops</SectionHeading>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Learn from the experts on the cutting-edge of deception at the most
            sinister companies.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          "absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block",
                          dayIndex === selectedIndex
                            ? "fill-blue-600 stroke-blue-600"
                            : "fill-transparent stroke-slate-400"
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            "font-mono text-sm",
                            dayIndex === selectedIndex
                              ? "text-blue-600"
                              : "text-slate-500"
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          "absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-blue-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          width={1000}
                          height={1000}
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Wrapper>
    </section>
  );
}
