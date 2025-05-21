import React from 'react';

interface MealPlanCardProps {
  day: string;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}

export default function MealPlanCard({ day, meals }: MealPlanCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-4">{day}</h3>
      <ul className="space-y-2 flex-grow">
        <li><span className="font-medium">Morgenmad:</span> {meals.breakfast}</li>
        <li><span className="font-medium">Frokost:</span> {meals.lunch}</li>
        <li><span className="font-medium">Aftensmad:</span> {meals.dinner}</li>
      </ul>
    </div>
  );
}