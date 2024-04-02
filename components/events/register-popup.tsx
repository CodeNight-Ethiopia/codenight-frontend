"use client";
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
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { registerDevs } from "@/actions/meetup";
const GENDER_ENUMS = ["male", "female"];
const FASTING_ENUMS = ["yes", "no"];
const PHONE_REGEX = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const RegisterSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  firstName: z.string().min(2, {
    message: "First name must be more than 2 character.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be more than 2 character.",
  }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  fasting: z.string({
    required_error: "Please select an options for fasting.",
  }),
  status: z.string({
    required_error: "Please select an options for your status.",
  }),
  other: z.string({
    required_error: "Please select an options for your profession.",
  }),

  profession: z.string().optional(),  
  // other: z.string({
  //   required_error: "Please select an options for your profession.",
  // }),

  comment: z.string().min(2, {
    message: "The comment should be more than 2 characters",
  }),
  phone: z.string().regex(PHONE_REGEX, {
    message: "Invalid phone number",
  }),

});
export function Register() {
  const [pending, startTransition] = React.useTransition();
  const [otherProfession, setOtherProfession] = React.useState(false);
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      fasting: "",
      status: "",
      profession: "",
      other: "",
    },
  });
  const [selectedProfession , setSelectedProfession] = React.useState<string>('')
  const onHandleSubmit = (data: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registerDevs(
        data.firstName,
        data.lastName,
        data.email,
        data.gender,
        data.phone,
        data.fasting,
        data.comment,
        data.status , 
        !!selectedProfession.length ? selectedProfession : data.other,
      )
        .then((res) => {
          toast({
            title: "Registered Successfully",
            description: `Dear ${data.firstName} , you have successfully registered for CodeNight Dev 2 Meetup. We will send you an email shortly`,
          });
        })
        .catch((err) => {
          toast({
            title: "Something went wrong",
            description: "There is something wrong while submitting the form",
            variant: "destructive",
          });
        });
    });
  };
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
      <DialogContent className="font-display sm:max-w-fit bg-gradient-to-tr from-indigo-100 via-indigo-50 to-indigo-100/50 px-10 pr-20">
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onHandleSubmit)}>
            <div className="grid gap-4 py-4 mr-auto w-full">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-2">
                <div className="flex flex-col w-full justify-center items-start gap-2">
                  <Label htmlFor="firstname" className="text-right">
                    First Name
                  </Label>

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            id="firstName"
                            className="col-span-3"
                            placeholder="Thoe"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col w-full justify-center items-start gap-2">
                  <Label htmlFor="lastname" className="text-right">
                    Last Name
                  </Label>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            id="lastName"
                            className="col-span-3"
                            placeholder="Brownie"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-2">
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              {...field}
                              id="email"
                              className="col-span-3"
                              placeholder="thoe@t3.gg"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full justify-center items-start gap-2">
                  <Label htmlFor="phone" className="text-right">
                    Phone Number
                  </Label>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            {...field}
                            id="phone"
                            className="col-span-3"
                            placeholder="0912345678"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-2">
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="gender" className="text-right">
                      Gender
                    </Label>
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a gender" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectGroup className="font-display">
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="email" className="text-right">
                      Are you fasting ?
                    </Label>
                    <FormField
                      control={form.control}
                      name="fasting"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an answer" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectGroup className="font-display">
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-2">
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="status" className="text-right">
                      Status 
                    </Label>
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Status" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectGroup className="font-display">
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="fresh">
                                  Fresh Graduate
                                </SelectItem>
                                <SelectItem value="mid_senior">
                                  Mid Senior Developer
                                </SelectItem>
                                <SelectItem value="senior">
                                  Senior Developer
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="profession" className="text-right">
                     Choose Profession ?
                    </Label>
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <Select   
                            onValueChange={(val) => {
                              field.onChange()
                              if(val === 'other') {
                                setOtherProfession(true)
                                setSelectedProfession('') 
                              }else {
                                setOtherProfession(false)
                                setSelectedProfession(val)
                              }
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your profession" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent >
                              <SelectGroup className="font-display">
                                <SelectItem value="web_dev">
                                  Web Development
                                </SelectItem>
                                <SelectItem value="ai">
                                  AI/Machine Learning
                                </SelectItem>
                                <SelectItem value="game_dev">
                                  Game Development
                                </SelectItem>

                                <SelectItem
                                  value="other">
                                      Other
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              {otherProfession && (
                <div className="w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-2">
                    <Label htmlFor="profession" className="text-right">
                      Profession ?
                    </Label>
                    <FormField
                      control={form.control}
                      name="other"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              {...field}
                              id="other"
                              className="col-span-3"
                              placeholder="Mention it here"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="w-full">
                <div className="flex flex-col w-full justify-center items-start gap-2">
                  <Label htmlFor="comment" className="text-right">
                    Anything you would like to say
                  </Label>
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Textarea
                            {...field}
                            id="comment"
                            className="col-span-3"
                            placeholder=""
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                disabled={pending}
                variant="blue"
                type="submit"
                className="mr-auto py-6"
              >
                {pending && <Loader className="animate-spin w-4 h-4 mr-1" />}{" "}
                Get your tickets
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
