"use client";
import React from "react";
import { socialLinks } from "./config";
import * as Icons from "react-icons/si";
import { 
  SiPytorch, 
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
  SiNextdotjs,
  SiTailwindcss,
  SiTensorflow,
  SiPandas,
  SiCplusplus,
  SiApacheflink,
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
    capabilities: [
      "머신러닝 모델 개발 및 학습",
      "모델 버전 관리 및 실험 추적",
      "사전 학습된 모델 활용 및 파인튜닝",
      "모델 성능 모니터링 및 최적화"
    ]
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
    capabilities: [
      "대규모 데이터 처리 및 분석",
      "실시간 데이터 스트리밍 처리",
      "데이터 파이프라인 자동화",
      "분산 시스템 구축 및 운영",
      "검색 엔진 구축 및 최적화"
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
    capabilities: [
      "RESTful API 개발",
      "데이터베이스 설계 및 최적화",
      "비동기 처리 및 성능 최적화",
      "보안 및 인증 시스템 구현"
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
    ],
    capabilities: [
      "컨테이너화 및 배포 자동화",
      "버전 관리 및 협업",
      "CI/CD 파이프라인 구축",
      "인프라 관리 및 모니터링"
    ]
  },
];

const navItems = {
  "/projects": { name: "Projects" },
  "/awards": { name: "Awards" },
  "/others": { name: "Others" },
};

export default function Home() {
  const pathname = usePathname();

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
        <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50" />
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-7xl md:text-8xl font-bold text-[#111] dark:text-white mb-8 leading-tight animate-fade-in">
              MLOps Engineer
            </h1>
            <div className="space-y-4 text-2xl text-[#666] dark:text-[#999] max-w-3xl animate-slide-up">
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

      {/* 3분할 섹션 */}
      <section id="skills" className="pt-0 pb-32 bg-white dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* 왼쪽: Education + Awards */}
          <div className="flex flex-col justify-between h-full gap-12">
            {/* Education / Experience */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">EDUCATION</h2>
              <ul className="space-y-6 text-xl">
                <li>
                  <div className="flex">
                    <span className="min-w-[13rem]">2025.01 ~ present</span>
                    <div>
                      <span className="font-bold">삼성 청년 SW 아카데미 13th</span>
                      <div className="text-sm text-[#888] dark:text-[#aaa] mt-1">
                        <div>Data Track</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="min-w-[13rem]">2019.03 ~ 2025.02</span>
                    <div>
                      <span className="font-bold">한동대학교 AI 컴퓨터공학심화</span>
                      <div className="text-sm text-[#888] dark:text-[#aaa] mt-1">
                        <div>4.01 / 4.5</div>
                        <div>4.27 / 4.5 ( Major )</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Awards / Certificates */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">AWARDS / CERTIFICATES</h2>
              <ul className="space-y-6 text-xl">
                {awards.map((award, idx) => (
                  <li key={idx}>
                    <div className="flex">
                      <span className="min-w-[10rem]">{award.date}</span>
                      <div>
                        <div>
                          <span className="font-bold">{award.title}</span>
                          {award.rank && award.rank !== "자격증" && (
                            <span className="font-bold ml-2">{award.rank}</span>
                          )}
                        </div>
                        <div className="text-sm text-[#888] dark:text-[#aaa] mt-1">
                          {award.organizer}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 오른쪽: Skills */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">
                      {skill.category}
                    </h3>
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {skill.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-base">
                            <item.icon className="w-5 h-5 text-[#666] dark:text-[#999]" />
                            <span className="text-[#666] dark:text-[#999]">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <ul className="space-y-2">
                          {skill.capabilities.map((capability, i) => (
                            <li key={i} className="text-sm text-[#666] dark:text-[#999] flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-0 pb-32 bg-white dark:bg-[#181818]">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.id}`}
                className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-base text-[#666] dark:text-[#999]">
                      {project.date}
                    </div>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.link, '_blank');
                      }}
                      className="text-[#111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#666] dark:text-[#999] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.flatMap((category, categoryIndex) => 
                      category.items.map((item, itemIndex) => {
                        const Icon = (Icons as any)[item.icon];
                        return (
                          <div 
                            key={`${categoryIndex}-${itemIndex}-${item.name}`} 
                            className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-[#2a2a2a] rounded-full text-[#666] dark:text-[#999] group-hover:bg-gray-200 dark:group-hover:bg-[#333] transition-all duration-300"
                          >
                            {Icon && <Icon className="w-4 h-4" />}
                            <span className="text-xs font-medium">{item.name}</span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="pt-0 pb-16 bg-white dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">ACTIVITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="group bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                <div className="p-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-[#666] dark:text-[#999]">
                        {activity.date}
                      </div>
                      <div className="text-sm font-medium text-[#666] dark:text-[#999]">
                        {activity.role}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-[#666] dark:text-[#999]">
                      {activity.description}
                    </p>
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