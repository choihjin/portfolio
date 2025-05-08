"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "./config";

const skills = [
  {
    category: "Languages",
    items: ["C / C++", "Java", "Python"],
  },
  {
    category: "AI & Data Analysis",
    items: ["PyTorch", "TensorFlow", "OpenCV", "Numpy", "Pandas", "Matplotlib"],
  },
  {
    category: "Databases & Backend",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Linux"],
  },
];

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="mb-8 text-2xl font-medium">About Me</h1>
        <p>
          안녕하세요. 끊임없이 성장하는 개발자입니다.<br />
          Deep Learning 연구와 AI 기반 프로젝트 개발에 관심이 많으며,<br />
          다양한 산업-학술 협업 프로젝트를 진행하며 경험을 쌓아왔습니다.
        </p>

        <h1 className="mt-8 mb-4 text-xl font-medium">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-none">2019.03 ~ 2025.02</p>
            <p className="font-medium leading-none">한동대학교</p>
          </div>
          <div className="md:col-span-9">
            <div className="leading-none">
              <p>AI 컴퓨터공학심화</p>
              <p>4.04 / 4.5</p>
              <p>4.27 / 4.5 (major)</p>
            </div>
          </div>
        </div>

        <h1 className="mt-8 mb-4 text-xl font-medium">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <div>
                <p className="font-medium text-neutral-600 dark:text-neutral-400">{skill.category}</p>
              </div>
              <div className="md:col-span-3">
                <ul>
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