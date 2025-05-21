import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ActivityListProps {
  activities: string[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <ul className="space-y-3">
      {activities.map((activity, idx) => (
        <li key={idx} className="flex items-center bg-white rounded-2xl shadow p-4">
          <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700">{activity}</span>
        </li>
      ))}
    </ul>
  );
}