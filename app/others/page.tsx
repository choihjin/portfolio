"use client";

import Link from "next/link";
import { activities } from "./others-data";

export default function Others() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111]">
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-[1400px] px-8">
          <h1 className="text-8xl font-bold text-[#111] dark:text-white mb-16">
            Activities
          </h1>
          <div className="space-y-32">
            {activities.map((activity, index) => (
              <div key={index} className="group">
                {activity.image && (
                  <div className="aspect-video mb-8 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <div className="text-sm text-[#666] dark:text-[#999] mb-2">
                      {activity.date}
                    </div>
                    <h2 className="text-4xl font-bold text-[#111] dark:text-white mb-4">
                      {activity.title}
                    </h2>
                    <div className="text-xl text-[#666] dark:text-[#999] mb-4">
                      {activity.role}
                    </div>
                    <p className="text-lg text-[#666] dark:text-[#999]">
                      {activity.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-[#111] dark:bg-white flex items-center justify-center">
                      <span className="text-white dark:text-[#111] text-5xl font-bold">
                        {activity.role.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 