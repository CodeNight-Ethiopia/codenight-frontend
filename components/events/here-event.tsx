import { Button } from "../ui/button";
import { GridPattern } from "./grid-pattern";
import { SectionHeading } from "./section-heading";

const HeroEvent = () => {
  return (
    <header className="overflow-hidden font-display  bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-[4rem] bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto mr-auto flex w-64 rounded-xl bg-transparent shadow-sm md:w-80 lg:w-auto">
            {/* <Image className="w-full" src={coverImage} alt="" priority /> */}
            <div className="mt-14 flex ml-[-300px] justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-60 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/community/pic-7.jpg"
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
                       src="/community/pic-10.jpg"

                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-52 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                       src="/community/pic-5.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                       src="/community/pic-1.jpg"

                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          {/* <Testimonial /> */}
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-10">
          <div className="mx-auto px-4 sm:px-6 md:max-w-4xl md:px-4 lg:px-0 ">
          <SectionHeading number="0">
            Putting Faces

          </SectionHeading>
            <h1 className="mt-4 font-display uppercase text-5xl font-bold text-slate-900 sm:text-7xl">
              Puting a face on  <span className="bg-gradient-to-tr from-purple-700/70 via-blue-600/90 to-blue-400/50 bg-clip-text text-transparent"> late </span> <span className="bg-gradient-to-tr from-blue-500 via-purple-500 to-purple-500/90 text-white rounded-2xl px-2 py-0">
               night </span> voice chats.
            </h1>
            <p className="mt-4 text-3xl  text-slate-600">
              A book and video course that teaches you how to design your own
              icons from scratch.
            </p>
            <div className="mt-8 flex gap-4 ">
              <Button variant={"blue"} className="px-8 py-7">
                Meet the Dev&apos;s
              </Button>
              <Button variant="outline" className="px-8 py-7" color="blue">
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroEvent;
