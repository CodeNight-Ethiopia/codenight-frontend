'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./section-heading";
import { Textarea } from "../ui/textarea";

export function Register() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"blue"}
          className="mt-5 w-52 h-10 text-xl ml-auto font-bold py-8"
        >
          Get your tickets
        </Button>
      </DialogTrigger>
      <DialogContent className="font-display sm:max-w-fit bg-gradient-to-tr from-indigo-100 via-indigo-50 to-indigo-100/50 px-10 pr-32">
        <DialogHeader>
          <DialogTitle>
            <SectionHeading number="001">Register</SectionHeading>
            <h2
              id="speakers-title"
              className="font-display mt-5 text-3xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
            >
              Get your ticket and meet talents.
            </h2>
          </DialogTitle>
          <DialogDescription className="text-md text-blue-900">
            Make sure to fill this form carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 mr-auto w-full">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6  mb-4">
            <div className="flex flex-col w-full justify-center items-start gap-2">
              <Label htmlFor="firstname" className="text-right">
                First Name
              </Label>
              <Input
                id="name"
                value=""
                className="col-span-3"
                placeholder="Thoe"
              />
            </div>

            <div className="flex flex-col w-full justify-center items-start gap-2">
              <Label htmlFor="lastname" className="text-right">
                Last Name
              </Label>
              <Input
                id="name"
                value=""
                className="col-span-3"
                placeholder="Brownie"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full justify-center items-start gap-2">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="name"
                value=""
                className="col-span-3"
                placeholder="theo@t3.gg"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full justify-center items-start gap-2">
              <Label htmlFor="comment" className="text-right">
                Anything you would like to say
              </Label>
              <Textarea
                id="comment"
                value=""
                className="col-span-3"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="blue"  type="submit" className="mr-auto py-6">
                Get your tickets
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
