import { Button } from '@/components/ui/button'
import { Wrapper } from "./wrapper"
import { GridishPattern } from './gridish-pattern'

export function GetStarted() {
  return (
    <section
      id="get-started"
      aria-label="Get Started"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Wrapper
          size="md"
          className="relative grid  font-display grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <GridishPattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get your self confirmed.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and I’ll send you a notice when events happens
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              You will be notified about everything in CodeNight{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                className="mt-4 text-black bg-white  w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none hover:bg-blue-600 hover:text-white"
              >
                Meet the devs
              </Button>
            </div>
          </form>
        </Wrapper>
      </div>
    </section>
  )
}
