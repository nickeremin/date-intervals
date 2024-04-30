"use client"

import React from "react"

import { historicalSubjects } from "@/shared/constants"

import { useSubjectContext } from "./subject-context-provider"

function SubjectCarousel() {
  const { subject: currentSubject, setSubject } = useSubjectContext()

  return (
    <div className="subject-carousel-wrapper">
      <div className="subject-wrapper">
        {historicalSubjects.map((subject) => (
          <span
            key={subject.index}
            className="subject"
            style={
              {
                "--subject-index": subject.index,
                transform: `rotate(calc(360deg/${historicalSubjects.length} * var(--subject-index) - 60deg - ${currentSubject.index * 90}deg)) translate(265px, 0)`,
              } as React.CSSProperties
            }
          >
            <span
              role="button"
              className={`subject-index-wrapper ${currentSubject.index == subject.index && "active-subject"}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setSubject(subject.index)
                }
              }}
              onClick={() => setSubject(subject.index)}
            >
              <span
                style={
                  {
                    transition: "0.3s ease-in-out",
                    transform: `rotate(calc(-360deg/${historicalSubjects.length} * var(--subject-index) + 60deg + ${currentSubject.index * 90}deg))`,
                  } as React.CSSProperties
                }
              >
                {subject.index}
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SubjectCarousel
