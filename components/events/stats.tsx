import { Wrapper } from "./wrapper"
import Image from "next/image"
import  BackgroundImage  from "../../public/background-2.jpg"
import { SectionHeading } from "./section-heading"
const stats = [
    { id: 1, name: 'Community Member', value: '6,500+' },
    { id: 2, name: 'Support', value: '24/7' },
    { id: 3, name: 'Uptimes', value: '99.9%' },
    { id: 4, name: 'Money Raised', value: '$0' },
  ]
  
  export  function Stats() {
    return (
      <div className="bg-transparent font-display  w-ful font-displayl  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-lefet">
            <SectionHeading number="06">
                Community

            </SectionHeading>
            <h1 className="mt-4  text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">CodeNight - </span> Trusted by the <br /> community with <span className="bg-gradient-to-tr from-blue-400 via-red-200 to-red-300/80 bg-clip-text text-transparent">Love</span>.
          </h1>
              <p className="mt-4 font-display text-2xl leading-8 text-blue-900 ">
              A true coding phenomenon that commands respect and awe  the community.
              </p>
            </div>
         
            <dl className="mt-16 relative  font-display grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gradient-to-tr from-blue-100/90 via-blue-50 to-blue-50/90 md:p-8 lg:p-10 xl:p-14">
                  <dt className="z-20  text-md font-semibold leading-6 text-blue-900">{stat.name}</dt>
                  <dd className="z-20  bg-gradient-to-tr from-blue-600 via-bluee-300 to-blue-300/80 bg-clip-text text-transparent order-first text-5xl font-semibold tracking-tight ">{stat.value}</dd>
                     <Image
                        className="absolute -z-1 left-1/2 top-0 translate-x-[-20%] translate-y-[-45%] w-full lg:translate-x-[-60%]"
                        src={BackgroundImage}
                        alt=""
                        width={919}
                        height={1351}
                        unoptimized
                    />
                </div>
              ))}
            </dl>
          
            
          </div>
        </div>
      </div>
    )
  }
  