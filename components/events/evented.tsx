import Image from 'next/image'

import { Wrapper } from './wrapper'
import { SectionHeading } from './section-heading'
import SectionPic from "../../public/logo-big.jpg"


const videos = [
  {
    title: 'Getting started community',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: SectionPic,
  },
  {
    title: 'Engage with like minded peoples',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: SectionPic,
  },
  {
    title: 'Help as core value',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: SectionPic,
  },
  {
    title: 'Supports as a service',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: SectionPic,
  },
]



export function Evented() {
  return (
    <section
      id="event"
      aria-labelledby="evented"
      className="scroll-mt-14 font-display py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Wrapper>
        <SectionHeading number="2" id="screencasts-title">
          Core Things  
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Lets put a face on late night voice chats for wee hours and roasts
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        The dynamic coding community fuels inspiration through collaborative learning, teaching, lively debates, and late-night voice chats, creating an electrifying environment that propels individuals to excel in their coding journeys.






        </p>
      </Wrapper>
      <Wrapper size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 font-display gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded w-50 h-36 bg-center shadow-sm">
                  <Image src={video.image} alt="" unoptimized />
                </div>
                
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Wrapper>
    </section>
  )
}

