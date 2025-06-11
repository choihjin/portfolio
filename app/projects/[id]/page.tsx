"use client";

import { useParams } from "next/navigation";
import { projects } from "../project-data";
import Link from "next/link";
import * as Icons from "react-icons/si";
import Image from "next/image";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#111] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111] dark:text-white mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111]">
      <section className="min-h-screen py-32">
        <div className="w-full max-w-[1400px] px-8 mx-auto">
          <Link href="/" className="inline-block mb-8 text-[#111] dark:text-white hover:opacity-70 transition-opacity">
            ← 메인 페이지로 돌아가기
          </Link>
          
          {/* 프로젝트 개요 */}
          <div className="mb-16">
            {project.image && (
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain py-8"
                />
              </div>
            )}
            
            <div className="text-sm text-[#666] dark:text-[#999] mb-2">
              {project.date}
            </div>
            <h1 className="text-6xl font-bold text-[#111] dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-[#666] dark:text-[#999] mb-8 whitespace-pre-line">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#111] dark:text-white border-b border-[#111] dark:border-white hover:opacity-70 transition-opacity text-lg"
            >
              GitHub →
            </a>
          </div>

          {/* 주요 기능 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">주요 기능</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-[#666] dark:text-[#999] mb-4">{feature.description}</p>
                  {feature.image && (
                    <div className="mt-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={400}
                        className="rounded-lg object-contain w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">기술 스택</h2>
            <div className="space-y-8">
              {project.techStack.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-[#1a1a1a]/80 rounded-full shadow-lg">
                        {getIcon(item.icon)}
                        <span className="text-[#666] dark:text-[#999]">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 핵심 알고리즘/기술 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">핵심 알고리즘/기술</h2>
            <div className="space-y-6">
              {project.coreTechnologies.map((tech, index) => (
                <div key={index} className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">{tech.title}</h3>
                  <p className="text-[#666] dark:text-[#999] mb-4">{tech.description}</p>
                  {tech.image && (
                    <div className="mt-4">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-contain h-[300px] w-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 개발자 역할 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">개발자 역할</h2>
            <div className="space-y-6">
              {project.role.map((role, index) => (
                <div key={index} className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-2">{role.title}</h3>
                  <p className="text-[#666] dark:text-[#999]">{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 성능 평가 */}
          {project.performance && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">성능 평가</h2>
              <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">{project.performance.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.performance.metrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-[#666] dark:text-[#999]">{metric.name}</span>
                      <span className="text-[#111] dark:text-white font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 결과 예시 */}
          {project.results && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">결과 예시</h2>
              <div className="space-y-8">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">{result.title}</h3>
                    <p className="text-[#666] dark:text-[#999] mb-6">{result.description}</p>
                    {result.images && (
                      <div className="space-y-4">
                        {result.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${result.title} ${idx + 1}`}
                            className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 프로젝트 구조 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">프로젝트 구조</h2>
            <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">{project.projectStructure.title}</h3>
              <p className="text-[#666] dark:text-[#999] mb-6">{project.projectStructure.description}</p>
              {project.projectStructure.structure && (
                project.projectStructure.structure.startsWith('/') ? (
                  <img
                    src={project.projectStructure.structure}
                    alt="프로젝트 구조도"
                    className="rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="bg-[#111] dark:bg-white rounded-lg p-4 mb-6">
                    <pre className="text-white dark:text-[#111] font-mono text-sm">
                      {project.projectStructure.structure}
                    </pre>
                  </div>
                )
              )}
            </div>
          </div>

          {/* 설치 및 실행 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">설치 및 실행</h2>
            <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">환경 요구사항</h3>
              <ul className="list-disc list-inside text-[#666] dark:text-[#999] mb-6">
                {project.installation.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">설치 방법</h3>
              <div className="bg-[#111] dark:bg-white rounded-lg p-4 mb-6">
                <pre className="text-white dark:text-[#111]">
                  {project.installation.steps.map((step, index) => (
                    <div key={index}>{step}</div>
                  ))}
                </pre>
              </div>
              
              {project.installation.notes && (
                <>
                  <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">주의사항</h3>
                  <ul className="list-disc list-inside text-[#666] dark:text-[#999]">
                    {project.installation.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* 산학협력 성과 */}
          {project.collaboration && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">산학협력 성과</h2>
              <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#111] dark:text-white mb-4">{project.collaboration.organization}</h3>
                <ul className="list-disc list-inside text-[#666] dark:text-[#999] mb-6">
                  {project.collaboration.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                
                {project.collaboration.patents && (
                  <>
                    <h4 className="text-lg font-bold text-[#111] dark:text-white mb-2">특허</h4>
                    <ul className="list-disc list-inside text-[#666] dark:text-[#999] mb-6">
                      {project.collaboration.patents.map((patent, index) => (
                        <li key={index}>{patent}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {project.collaboration.papers && (
                  <>
                    <h4 className="text-lg font-bold text-[#111] dark:text-white mb-2">논문</h4>
                    <ul className="list-disc list-inside text-[#666] dark:text-[#999]">
                      {project.collaboration.papers.map((paper, index) => (
                        <li key={index}>{paper}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {/* 수상 내역 */}
          {project.awards && project.awards.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">수상 내역</h2>
              <div className="bg-white/80 font-bold dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  {project.awards.map((award, idx) => (
                    <li key={idx} className="text-[#666] dark:text-[#999] text-lg">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 발표자료 */}
          {project.presentation && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">발표자료</h2>
              <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                {project.presentation.type === 'pdf' && (
                  <iframe
                    src={project.presentation.url as string}
                    width="100%"
                    height="600px"
                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                    title="발표자료 PDF"
                  />
                )}
                {project.presentation.type === 'image' && (
                  <div className="max-h-[80vh] overflow-y-auto">
                    <img
                      src={project.presentation.url as string}
                      alt="발표자료 이미지"
                      className="rounded-lg shadow-lg w-full h-auto object-contain"
                    />
                  </div>
                )}
                {project.presentation.type === 'images' && (
                  <div className="flex flex-col gap-8">
                    {(project.presentation.url as string[]).map((image, index) => (
                      <div key={index} className="max-h-[80vh] overflow-y-auto">
                        <img
                          src={image}
                          alt={`발표자료 이미지 ${index + 1}`}
                          className="rounded-lg shadow-lg w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 참고 문헌 */}
          {project.references && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#111] dark:text-white mb-6">참고 문헌</h2>
              <div className="bg-white/80 dark:bg-[#1a1a1a]/80 rounded-xl p-6 shadow-lg">
                <ul className="space-y-4">
                  {project.references.map((ref, index) => (
                    <li key={index}>
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 