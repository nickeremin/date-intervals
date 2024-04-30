import { type Variants } from "framer-motion"

export const subjectVariants: Variants = {
  inital: {
    opacity: 0,
  },
  animate: {
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
