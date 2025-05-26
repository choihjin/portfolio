"use client";
import React from "react";
import { socialLinks } from "./config";
import { SiPytorch, 
  SiMlflow, 
  SiHuggingface,
  SiApachespark, 
  SiApachekafka, 
  SiApacheairflow, 
  SiApachehadoop, 
  SiElasticsearch, 
  SiDjango,
  SiFastapi, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiGitlab,
  SiVuejs,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenCV,
  SiTensorflow,
  SiPandas,
  SiCplusplus,
  SiApacheflink,
  SiSklearn,
   } from "react-icons/si";
import { projects } from "./projects/project-data";
import { awards } from "./awards/awards-data";
import { activities } from "./others/others-data";

const skills = [
  {
    category: "MLOps",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "MLFlow", icon: SiMlflow },
      { name: "Hugging Face", icon: SiHuggingface },
    ],
  },
  {
    category: "Data Engineering",
    items: [
      { name: "Apache Spark", icon: SiApachespark },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Apache Hadoop", icon: SiApachehadoop },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111]">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-[#111] dark:text-white mb-6 leading-tight">
              MLOps Engineer
            </h1>
            <div className="space-y-3 text-xl text-[#666] dark:text-[#999] max-w-3xl">
              <p>
                안녕하세요. AI와 데이터 엔지니어링에 열정을 가진 개발자입니다.
              </p>
              <p>
                머신러닝 모델 개발과 대규모 데이터 처리 시스템 구축에 전문성을 가지고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-12">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#111] dark:bg-white" />
                <div className="pl-8">
                  <div className="text-sm text-[#666] dark:text-[#999] mb-2">2025.01 ~ Present</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-3">SSAFY 13th</h3>
                  <div className="space-y-1 text-lg text-[#666] dark:text-[#999]">
                    <p>삼성 청년 SW AI 아카데미</p>
                    <p>Data Track</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#111] dark:bg-white" />
                <div className="pl-8">
                  <div className="text-sm text-[#666] dark:text-[#999] mb-2">2019.03 ~ 2025.02</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-3">한동대학교</h3>
                  <div className="space-y-1 text-lg text-[#666] dark:text-[#999]">
                    <p>AI 컴퓨터공학심화</p>
                    <p>4.01 / 4.5</p>
                    <p>4.27 / 4.5 (major)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full max-w-[1400px] px-8 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-12">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-5">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base text-[#666] dark:text-[#999] group">
                      <item.icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Projects Section */}
            <section className="py-20 bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full max-w-[1400px] px-8 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-[#666] dark:text-[#999]">
                      {project.date}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#666] dark:text-[#999] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => {
                      const Icon = skills.flatMap(skill => skill.items)
                        .find(item => item.name === tech)?.icon;
                      
                      return (
                        <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#2a2a2a] rounded-full text-[#666] dark:text-[#999] group-hover:bg-gray-200 dark:group-hover:bg-[#333] transition-colors">
                          {Icon && <Icon className="w-4 h-4" />}
                          <span className="text-sm">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full max-w-[1400px] px-8 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-12">
            Awards
          </h2>
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#111] dark:bg-white" />
                <div className="pl-8">
                  <div className="text-xs text-[#666] dark:text-[#999] mb-1">
                    {award.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-1">
                    {award.title}
                  </h3>
                  <div className="text-sm text-[#666] dark:text-[#999] mb-1">
                    {award.organizer}
                  </div>
                  <div className="text-lg font-bold text-[#111] dark:text-white">
                    {award.rank}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#111]">
        <div className="w-full max-w-[1400px] px-8 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-12">
            Activities
          </h2>
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="group bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#111] dark:bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-white dark:text-[#111] text-2xl font-bold">
                        {activity.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-[#666] dark:text-[#999] mb-1">
                        {activity.date}
                      </div>
                      <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-1">
                        {activity.title}
                      </h3>
                      <div className="text-base text-[#666] dark:text-[#999]">
                        {activity.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-[#666] dark:text-[#999] pl-20">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}