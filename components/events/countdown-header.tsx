"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const CountDownTimerHeader = () => {
  const divRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: divRef,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.4, 0])
  return (
    <motion.div ref={divRef} style={{ opacity }} className="flex justify-start items-start my-10 mr-auto">
      <h1 className="text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">We are almost there...</h1>
    </motion.div>
  )
}
export default CountDownTimerHeader