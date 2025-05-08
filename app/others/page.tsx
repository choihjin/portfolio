"use client";

import Link from "next/link";
import { externalActivities, internalActivities } from "./others-data";

export default function Others() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">External Activities</h1>
      <div>
        {externalActivities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{activity.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {activity.date}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {activity.role}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {activity.description}
            </p>
          </div>
        ))}
      </div>

      <h1 className="mt-16 mb-8 text-2xl font-medium">Internal Activities</h1>
      <div>
        {internalActivities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{activity.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {activity.date}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {activity.role}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 