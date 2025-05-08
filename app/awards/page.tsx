"use client";

import Link from "next/link";
import { awards, certificates } from "./awards-data";

export default function Awards() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Awards & Honor</h1>
      <div>
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{award.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {award.date}
              </p>
            </div>
            {award.organizer && (
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {award.organizer}
              </p>
            )}
          </div>
        ))}
      </div>

      <h1 className="mt-16 mb-8 text-2xl font-medium">Certificate</h1>
      <div>
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{certificate.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {certificate.date}
              </p>
            </div>
            {certificate.organizer && (
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {certificate.organizer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 