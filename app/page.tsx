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
  SiTypescript,
} from "react-icons/si";
import { projects } from "./projects/project-data";
import { awards } from "./awards/awards-data";
import { activities } from "./others/others-data";
import Link from "next/link";
import { ThemeSwitch } from "./components/theme-switch";
import { usePathname } from "next/navigation";

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
      { name: "Apache Flink", icon: SiApacheflink },
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

const navItems = {
  "/projects": { name: "Projects" },
  "/awards": { name: "Awards" },
  "/others": { name: "Others" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#111]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
            >
              {metaData.title}
            </Link>
          </div>
          <div className="flex flex-row gap-6 mt-4 md:mt-0 md:ml-auto items-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative text-base font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2" />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50" />
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-[#111] dark:text-white mb-6 leading-tight animate-fade-in">
              MLOps Engineer
            </h1>
            <div className="space-y-3 text-xl text-[#666] dark:text-[#999] max-w-3xl animate-slide-up">
              <p>
                안녕하세요. AI와 데이터 엔지니어링에 열정을 가진 개발자입니다.
              </p>
              <p>
                머신러닝 모델 개발과 대규모 데이터 처리 시스템 구축에 전문성을 가지고 있습니다.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <link.icon className="w-6 h-6 text-[#666] dark:text-[#999]" />
                </a>
              ))}
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
      <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#111] dark:text-white mb-16 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-6">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#2a2a2a] group hover:bg-gray-100 dark:hover:bg-[#333] transition-all duration-300">
                      <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110" />
                      <span className="text-base font-medium text-[#666] dark:text-[#999]">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#111] dark:text-white mb-16 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-base text-[#666] dark:text-[#999]">
                      {project.date}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#666] dark:text-[#999] mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => {
                      let Icon;
                      switch (tech) {
                        case "Next.js":
                          Icon = SiNextdotjs;
                          break;
                        case "Tailwind CSS":
                          Icon = SiTailwindcss;
                          break;
                        case "TypeScript":
                          Icon = SiTypescript;
                          break;
                        case "Vue":
                          Icon = SiVuejs;
                          break;
                        case "OpenCV":
                          Icon = SiOpenCV;
                          break;
                        case "TensorFlow":
                          Icon = SiTensorflow;
                          break;
                        case "C++":
                          Icon = SiCplusplus;
                          break;
                        case "sklearn":
                          Icon = SiSklearn;
                          break;
                        default:
                          Icon = skills.flatMap(skill => skill.items)
                            .find(item => item.name === tech)?.icon;
                      }
                      
                      return (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full text-[#666] dark:text-[#999] group-hover:bg-gray-200 dark:group-hover:bg-[#333] transition-all duration-300">
                          {Icon && <Icon className="w-5 h-5" />}
                          <span className="text-sm font-medium">{tech}</span>
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
      <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#111] dark:text-white mb-16 text-center">
            Awards
          </h2>
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">
                      {award.title?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <div>
                    <div className="text-base text-[#666] dark:text-[#999] mb-2">
                      {award.date}
                    </div>
                    <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <div className="text-base text-[#666] dark:text-[#999] mb-2">
                      {award.organizer}
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {award.rank || '수상'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#111] dark:text-white mb-16 text-center">
            Activities
          </h2>
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">
                        {activity.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-base text-[#666] dark:text-[#999] mb-2">
                        {activity.date}
                      </div>
                      <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">
                        {activity.title}
                      </h3>
                      <div className="text-base text-[#666] dark:text-[#999]">
                        {activity.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-[#666] dark:text-[#999] pl-24">
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