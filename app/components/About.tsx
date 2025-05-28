import { socialLinks } from '../config';
import { skills } from '../lib/data';

export default function About() {
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
    </div>
  );
} 