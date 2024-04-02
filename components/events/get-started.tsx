"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Wrapper } from "./wrapper";
import backgroundImage from "../../public/background-2.jpg";
import { SectionHeading } from "./section-heading";
import { useState, useTransition } from "react";
import { addSubscription } from "@/actions/subsctibe";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GetStarted() {
  const [pending, startTransition] = useTransition();
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email.length) {
      toast({
        title: "Email is not provided",
        description:
          "Email must be provided to subscribe to the codenight news",
        variant: "destructive",
      });
      return;
    }
    startTransition(() => {
      addSubscription(email)
        .then((res) => {
          toast({
            title: "Subscription Added",
            description:
              "You have successfully subscribed to codenight news letter",
          });
          setEmail("")
        })
        .catch((err) => {
          toast({
            title: "Something went wrong",
            description:
              "There is something wrong while subscribing to codenight news letter",
            variant: "destructive",
          });
        });
    });
  };

  return (
    <section id="newsletter" aria-label="Newsletter" className="font-display">
      <Wrapper size="lg" className="rounded-3xl">
        <SectionHeading number="07" className="mb-5">
          Subscribe
        </SectionHeading>
        <div className="relative font-display -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-[2.0rem] md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="email"
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <Button
                  disabled={pending}
                  onClick={handleSubmit}
                  className="rounded-3xl"
                  variant={"blue"}
                >
                  {pending && <Loader className="animate-spin w-3 h-3 mr-2" />}
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
