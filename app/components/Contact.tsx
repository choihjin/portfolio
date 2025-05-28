import { socialLinks } from '../config';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#111] dark:to-[#1a1a1a]">
      <div className="w-full max-w-[1200px] px-8 mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#111] dark:text-white mb-16 text-center">
          Contact
        </h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-[#666] dark:text-[#999] text-center max-w-2xl">
            프로젝트 협업이나 채용 제안에 대해 이야기하고 싶으시다면 언제든지 연락해 주세요.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white dark:bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <link.icon className="w-8 h-8 text-[#666] dark:text-[#999]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 