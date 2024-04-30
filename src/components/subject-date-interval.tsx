"use client"

import React from "react"

import AnimatedNumber from "./animated-number"
import { useSubjectContext } from "./subject-context-provider"

function SubjectDateInterval() {
  const { subject } = useSubjectContext()

  const [startYear, endYear] = subject.interval

  return (
    <div className="subject-date-interval">
      <AnimatedNumber value={startYear} />
      <AnimatedNumber value={endYear} />
    </div>
  )
}

export default SubjectDateInterval
