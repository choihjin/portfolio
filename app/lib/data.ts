import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaCode
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiKubernetes,
  SiApachekafka,
  SiApachespark,
  SiApacheflink,
  SiElasticsearch,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiJira,
  SiConfluence
} from 'react-icons/si';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/choihjin',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/choihjin',
    icon: FaLinkedin
  },
  {
    name: 'Email',
    url: 'mailto:choihjin@handong.ac.kr',
    icon: FaEnvelope
  }
];

export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript }
    ]
  },
  {
    category: 'ML & AI',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Scikit-learn', icon: FaPython },
      { name: 'OpenCV', icon: FaPython }
    ]
  },
  {
    category: 'Data Engineering',
    items: [
      { name: 'Apache Kafka', icon: SiApachekafka },
      { name: 'Apache Spark', icon: SiApachespark },
      { name: 'Apache Flink', icon: SiApacheflink },
      { name: 'Elasticsearch', icon: SiElasticsearch }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'AWS', icon: FaAws },
      { name: 'Linux', icon: FaLinux }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'MySQL', icon: FaDatabase }
    ]
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Jira', icon: SiJira },
      { name: 'Confluence', icon: SiConfluence },
      { name: 'VS Code', icon: FaCode }
    ]
  }
];

export const projects = [
  {
    id: 'ssafit-news',
    title: 'SSAFIT NEWS',
    date: '2025.04 ~ 2025.05',
    description: '실시간 뉴스 데이터 수집 및 분석 시스템',
    image: '/images/ssafit/web.png',
    link: 'https://github.com/choihjin/news-front-project',
    techStack: [
      {
        category: 'Data Engineering',
        items: [
          { name: 'Apache Kafka', icon: 'SiApachekafka' },
          { name: 'Apache Flink', icon: 'SiApacheflink' },
          { name: 'Apache Spark', icon: 'SiApachespark' }
        ]
      },
      {
        category: 'AI & ML',
        items: [
          { name: 'OpenAI GPT-4', icon: 'FaCode' },
          { name: 'OpenAI Embedding', icon: 'FaCode' }
        ]
      },
      {
        category: 'Database',
        items: [
          { name: 'PostgreSQL', icon: 'SiPostgresql' },
          { name: 'Elasticsearch', icon: 'SiElasticsearch' }
        ]
      },
      {
        category: 'Monitoring',
        items: [
          { name: 'Prometheus', icon: 'FaCode' },
          { name: 'Kibana', icon: 'FaCode' },
          { name: 'Grafana', icon: 'FaCode' }
        ]
      }
    ]
  },
  {
    id: 'vehicle-features',
    title: 'Vehicle Features',
    date: '2024.12 ~ 2025.01',
    description: 'OpenCV와 YOLO를 활용한 차량 특징 추출 시스템',
    image: '/images/vehicle-features/main.png',
    link: 'https://github.com/choihjin/vehicle-features',
    techStack: [
      {
        category: 'Computer Vision',
        items: [
          { name: 'OpenCV', icon: 'FaPython' },
          { name: 'YOLO', icon: 'FaPython' }
        ]
      },
      {
        category: 'Programming',
        items: [
          { name: 'Python', icon: 'FaPython' },
          { name: 'C++', icon: 'FaCode' }
        ]
      }
    ]
  }
]; 