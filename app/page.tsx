"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "./config";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C / C++"],
  },
  {
    category: "MLOps",
    items: ["PyTorch", "MLFlow", "Hugging Face"], // tensorflow, openCV 제외
  },
  // {
  //   category: "Data Processing",
  //   items: ["Pandas", "NumPy", "Matplotlib"],
  // },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Apache Kafka", "Apache Airflow"],
  },
  {
    category: "Backend & Database",
    items: ["FastAPI", "PostgreSQL", "MySQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Docker Compose", "Git", "GitHub"],
  },
];

export default function Page() {
  return (
    <section>
      <div className="prose-neutral dark:prose-invert">
        <h1 className="mb-4 text-2xl font-medium">About Me</h1>
        <div className="space-y-2">
          <p>
            안녕하세요. AI와 데이터 엔지니어링에 열정을 가진 개발자입니다.
          </p>
          <p>
            머신러닝 모델 개발과 대규모 데이터 처리 시스템 구축에 전문성을 가지고 있으며,
          </p>
          <p>
            산업-학술 협업 프로젝트를 통해 실제 문제 해결 경험을 쌓아왔습니다.
          </p>
          <p>
            새로운 기술을 배우고 적용하는 것을 즐기며, 지속적인 성장을 추구합니다.
          </p>
        </div>

        <h1 className="mt-8 mb-4 text-2xl font-medium">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">2025.01 ~ Present</p>
            <p className="font-medium">SSAFY 13th</p>
          </div>
          <div>
            <div className="space-y-1">
              <p>삼성 청년 SW AI 아카데미</p>
              <p>Data Track</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">2019.03 ~ 2025.02</p>
            <p className="font-medium">한동대학교</p>
          </div>
          <div>
            <div className="space-y-1">
              <p>AI 컴퓨터공학심화</p>
              <p>4.01 / 4.5</p>
              <p>4.27 / 4.5 (major)</p>
            </div>
          </div>
        </div>

        <h1 className="mt-8 mb-4 text-2xl font-medium">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <div>
                <p className="font-medium text-neutral-600 dark:text-neutral-400">{skill.category}</p>
              </div>
              <div>
                <ul className="space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}