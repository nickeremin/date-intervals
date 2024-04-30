"use client"

import React from "react"
import { motion } from "framer-motion"

import { subjectVariants } from "@/shared/lib/variants"

import { useSubjectContext } from "./subject-context-provider"

function SubjectName() {
  const { subject } = useSubjectContext()

  return (
    <div className="subject-name-wrapper">
      <motion.span
        key={subject.value}
        variants={subjectVariants}
        initial="inital"
        exit="exit"
        animate="animate"
      >
        {subject.name}
      </motion.span>
    </div>
  )
}

export default SubjectName
