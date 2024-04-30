import HomePageTitle from "@/components/home-page-title"
import SubjectCarousel from "@/components/subject-carousel"
import SubjectDateInterval from "@/components/subject-date-interval"
import SubjectEvents from "@/components/subject-events"
import SubjectName from "@/components/subject-name"

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <HomePageTitle />
      <SubjectDateInterval />
      <SubjectName />
      <SubjectCarousel />
      <SubjectEvents />
    </div>
  )
}
