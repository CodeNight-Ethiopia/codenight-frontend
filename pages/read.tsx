import BlogCard from "@/components/card/BlogCard";
import Nav from "@/components/nav/Nav";
import PageHead from "@/components/PageHead";
import { Menu, Transition } from "@headlessui/react";
import { BookOpenIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

interface BlogType {
  title: string;
  tags: string[];
  date: Date;
  view: number;
}

const blogs: BlogType[] = [
  {
    title:
      "Berenta Cement and China National Building Materials Collaborate for Cement Production in Amhara State",
    tags: ["Article", "Tech", "News"],
    date: new Date(),
    view: 320,
  },
  {
    title:
      "Ethiopia’s Arifpay Claims Fintech Innovation of the Year Award for Digital Payment Breakthroughs",
    tags: ["Article", "Tech", "News"],
    date: new Date(),
    view: 340,
  },
  {
    title:
      "Last Chance to Get Insider Tips for JoyHack Game Development Hackathon at Free Webinar",
    tags: ["Article", "Tech", "News"],
    date: new Date(),
    view: 329,
  },
];
export default function Home() {
  return (
    <>
      <PageHead />
      <main>
        <Nav />
        <div className="py-8 flex gap-12 justify-center ">
          <div className="col-span-2 flex flex-col w-full gap-3 max-w-xs">
            <div className="py-4 px-8 bg-slate-200 hover:bg-slate-300 rounded-md">General News</div>
            <div className="py-4 px-8 bg-slate-200 hover:bg-slate-300 rounded-md">Announcement</div>
            <div className="py-4 px-8 bg-slate-200 hover:bg-slate-300 rounded-md">Product News</div>
            <div className="py-4 px-8 bg-slate-200 hover:bg-slate-300 rounded-md">Dev</div>
            <div className="py-4 px-8 bg-slate-200 hover:bg-slate-300 rounded-md">Other</div>
          </div>
          <div className="col-span-7 flex flex-col  gap-8 max-w-4xl">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-brand-blue hover:bg-opacity-90  px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Options
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-brand-blue hover:bg-opacity-90  px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Options
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-brand-blue hover:bg-opacity-90  px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Options
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`group flex w-full items-center gap-4 rounded-md px-4 py-2 text-sm`}
                        >
                          <BookOpenIcon className="w-6 h-6 fill-brand-blue text-brand-blue" />
                          <span>Edit</span>
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="flex gap-4">
                <input className="py-2 px-4 rounded-lg bg-slate-100 text-brand-blue " />
                <button className="py-2 px-6 rounded-lg bg-brand-blue text-slate-100 ">
                  Search
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {blogs.map((blog) => (
                <BlogCard key={blog.title} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
