import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from './grid-pattern'
import { SectionHeading } from './section-heading'
import authorImage from '@/images/avatars/author.png'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  )
}

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsor-title"
      className="relative scroll-mt-14 font-display pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>

      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
      <div className="mx-auto mt-2 max-w-5xl lg:mx-0 lg:max-w-8xl lg:pr-10">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Gold Level Sponsors.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900 mb-10">
            
          </p>
        </div>
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src='data:image/jpeg;base64,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'
              alt=""
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5 - 01" id="author-title">
              Sponsors 01
            </SectionHeading>
            
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Guillermo Rauch –</span>
              CEO -  Vercel and LinkedIn
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I’ve been designing icons professionally for over a decade and
              have worked with dozens of the biggest brands to create custom
              sets for their products. I’m an accomplished conference speaker,
              and have been teaching icon design workshops every month for the
              last three years. I’ve worked with designers of all skill levels
              and honed my way of teaching to really click for anyone who has
              the itch to start designing their own icons.
            </p>
            <p className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
              >
                <XIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow on X</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
