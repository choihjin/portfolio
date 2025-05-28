"use client";

import Link from "next/link";
import { projects } from "./project-data";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111]">
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-[1400px] px-8">
          <h1 className="text-8xl font-bold text-[#111] dark:text-white mb-16">
            Projects
          </h1>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                {project.image && (
                  <div className="aspect-video mb-8 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <div className="text-sm text-[#666] dark:text-[#999] mb-2">
                      {project.date}
                    </div>
                    <h2 className="text-4xl font-bold text-[#111] dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-[#666] dark:text-[#999]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] text-lg"
                      >
                        {tech.category}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-[#111] dark:text-white border-b border-[#111] dark:border-white hover:opacity-70 transition-opacity text-lg"
                >
                  GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
