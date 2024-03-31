'use client'

import React, { useId } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./wrapper";
import { SectionHeading } from "./section-heading";

export const DevPicComponent = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  let id = useId();

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, indx) => (
            <ProductCard
              indx={indx}
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, indx) => (
            <ProductCard
              indx={indx}
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, indx) => (
            <ProductCard
              indx={indx}
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <Wrapper
      size="lg"
      className="max-w-7xl font-display  relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0"
    >
      <SectionHeading number="02">Previous Meetups.</SectionHeading>
      <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
        <span className="sr-only">CodeNight - </span>From Our Previous CodeNight
        Meeetups.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        The dynamic coding community fuels inspiration through collaborative
        learning, teaching, lively debates, and late-night voice chats, creating
        an electrifying environment that propels individuals to excel in their
        coding journeys.
      </p>
    </Wrapper>
  );
};

export const ProductCard = ({
  product,
  translate,
  indx,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  indx: number;
  translate: MotionValue<number>;
}) => {
  let id = useId();
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="relative group/product h-96 w-[30rem]  flex-shrink-0"
    >
      <Link
        href={"https://t.me/CodeNight"}
        className="block group-hover/product:shadow-2xl "
      >
        <div
          className="absolute inset-0 bg-indigo-50"
          style={{ clipPath: `url(#${id}-${(indx + 10) % 3})` }}
        >
          <Image
            src={product.thumbnail}
            height="800"
            width="800"
            className="object-cover rounded-xl object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-0 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
