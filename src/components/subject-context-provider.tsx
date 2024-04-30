"use client"

import React from "react"

import { historicalSubjects } from "@/shared/constants"
import { HistoricalSubject } from "@/shared/types"

type SubjectContextData = {
  subject: HistoricalSubject
  setSubject: (index: number) => void
  nextSubject: () => void
  prevSubject: () => void
}

const SubjectContext = React.createContext<SubjectContextData | null>(null)

interface SubjectContextProviderProps {
  children: React.ReactNode
}

function SubjectContextProvider({ children }: SubjectContextProviderProps) {
  const [currentSubject, setCurrentSubject] = React.useState<HistoricalSubject>(
    historicalSubjects[0]
  )

  function setSubject(index: number) {
    setCurrentSubject(historicalSubjects[index - 1])
  }

  function nextSubject() {
    const currentIndex = historicalSubjects.findIndex(
      (subject) => subject.value == currentSubject.value
    )

    if (historicalSubjects.length - 1 != currentIndex) {
      setCurrentSubject(historicalSubjects[currentIndex + 1])
    }
  }

  function prevSubject() {
    const currentIndex = historicalSubjects.findIndex(
      (subject) => subject.value == currentSubject.value
    )

    if (currentIndex != 0) {
      setCurrentSubject(historicalSubjects[currentIndex - 1])
    }
  }

  return (
    <SubjectContext.Provider
      value={{ subject: currentSubject, setSubject, nextSubject, prevSubject }}
    >
      {children}
    </SubjectContext.Provider>
  )
}

export function useSubjectContext() {
  const context = React.useContext(SubjectContext)

  if (!context) {
    throw new Error("use useSubjectContext inside SubjectContext boundary")
  }

  return context
}

export default SubjectContextProvider
