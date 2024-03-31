'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from './bg-image'
import { Wrapper } from './wrapper'
import { SectionHeading } from './section-heading'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'April 14',
    dateTime: '2022-04-04',
    summary:
      'Morning Event schedules.',
    timeSlots: [
      {
        name: 'Steven McHail',
        description: 'Not so one-time payments',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Jaquelin Isch',
        description: 'The finer print',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Dianne Guilianelli',
        description: 'Post-purchase blackmail',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Ronni Cantadore',
        description: 'Buy or die',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Erhart Cockrin',
        description: 'In-person cancellation',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Parker Johnson',
        description: 'The pay/cancel switcheroo',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 14',
    dateTime: '2022-04-05',
    summary:
      'AfterNoon Event Schedules.',
    timeSlots: [
      {
        name: 'Damaris Kimura',
        description: 'The invisible card reader',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Ibrahim Frasch',
        description: 'Stealing fingerprints',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Cathlene Burrage',
        description: 'Voting machines',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Rinaldo Beynon',
        description: 'Blackhat SEO that works',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Waylon Hyden',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Giordano Sagucio',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'Post Event',
    dateTime: '2022-04-06',
    summary:
      'Post Event Schedules.',
    timeSlots: [
      {
        name: 'Andrew Greene',
        description: 'Neuralink dark patterns',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Heather Terry',
        description: 'DALL-E for passports',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Piers Wilkins',
        description: 'Quantum password cracking',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Gordon Sanderson',
        description: 'SkyNet is coming',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Kimberly Parsons',
        description: 'Dark patterns for the metaverse',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Richard Astley',
        description: 'Knowing the game and playing it',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Wrapper className="relative z-10 font-display " size='lg'>
      <SectionHeading number="4">Schedules</SectionHeading>

        <div className="mx-auto mt-2 max-w-5xl lg:mx-0 lg:max-w-8xl lg:pr-10">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            The schedule where all the magic happens with amazing perks and networking events
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div>
      </Wrapper>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Wrapper className="relative font-display" size='lg'>
          <ScheduleTabbed />
          <ScheduleStatic />
        </Wrapper>
      </div>
    </section>
  )
}
