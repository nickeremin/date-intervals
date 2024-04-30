"use client"

import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"

import { historicalSubjects } from "@/shared/constants"

import { useSubjectContext } from "./subject-context-provider"

import "swiper/css"

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { A11y, Navigation } from "swiper/modules"

import { subjectVariants } from "@/shared/lib/variants"

function SubjectEvents() {
  const {
    subject: currentSubject,
    setSubject,
    nextSubject,
    prevSubject,
  } = useSubjectContext()

  const events = historicalSubjects.find(
    (item) => item.value == currentSubject.value
  )?.events!

  return (
    <div className="subject-events-wrapper">
      <div className="subject-navbar">
        <div className="subject-index-wrapper">
          <span className="subject-index">
            {currentSubject.index}/{historicalSubjects.length}
          </span>
          <div className="subject-nav-buttons">
            <button disabled={currentSubject.index == 1} onClick={prevSubject}>
              <ChevronLeftIcon />
            </button>
            <button
              disabled={currentSubject.index == historicalSubjects.length}
              onClick={nextSubject}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="subject-pagination-buttons">
          {historicalSubjects.map((subject, i) => (
            <button
              key={i}
              className={
                currentSubject.index == subject.index
                  ? "active-subject"
                  : undefined
              }
              onClick={() => setSubject(subject.index)}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={currentSubject.value}
        variants={subjectVariants}
        initial="inital"
        exit="exit"
        animate="animate"
      >
        <Swiper
          modules={[Navigation, A11y]}
          navigation
          spaceBetween={24}
          slidesPerView={1.5}
          breakpoints={{
            768: {
              spaceBetween: 40,
              slidesPerView: 2.5,
            },
            1024: {
              spaceBetween: 80,
              slidesPerView: 3.5,
            },
          }}
        >
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <div className="subject-event">
                <span>{event.date}</span>
                <p>{event.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default SubjectEvents
