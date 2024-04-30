"use client"

import React from "react"
import { HTMLMotionProps, motion, useSpring, useTransform } from "framer-motion"

interface AnimatedNumberProps {
  value: number
}

function AnimatedNumber({
  value,
  ...props
}: HTMLMotionProps<"span"> & AnimatedNumberProps) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => Number(current).toFixed())

  React.useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span {...props}>{display}</motion.span>
}

export default AnimatedNumber
