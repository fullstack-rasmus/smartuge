import React from 'react'

interface PlanCardProps {
  day: string
  breakfast: string
  dinner: string
  activity: string
}

export const PlanCard: React.FC<PlanCardProps> = ({ day, breakfast, dinner, activity }) => (
  <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col space-y-2">
    <h3 className="text-xl font-semibold">{day}</h3>
    <p><span className="font-medium">Morgen:</span> {breakfast}</p>
    <p><span className="font-medium">Aften:</span> {dinner}</p>
    <p><span className="font-medium">Aktivitet:</span> {activity}</p>
  </div>
)
