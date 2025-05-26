"use client";

import Link from "next/link";
import { awards } from "./awards-data";

export default function Awards() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111]">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <h1 className="text-7xl font-bold text-[#111] dark:text-white mb-16">
          Awards
        </h1>
        <div className="space-y-16">
          {awards.map((award, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-[#111] dark:bg-white" />
              <div className="pl-8">
                <div className="text-sm text-[#666] dark:text-[#999] mb-2">
                  {award.date}
                </div>
                <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-4">
                  {award.title}
                </h2>
                <div className="text-[#666] dark:text-[#999] mb-2">
                  {award.organizer}
                </div>
                <div className="text-2xl font-bold text-[#111] dark:text-white">
                  {award.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 