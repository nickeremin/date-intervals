export type HistoricalSubject = {
  index: number
  name: string
  value: string
  interval: [number, number]
  events: SubjectEvent[]
}

export type SubjectEvent = {
  date: number
  description: string
}
