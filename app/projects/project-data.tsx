export interface Project {
  title: string;
  date: string;
  description: string;
  link: string;
  tech: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "SSABAB",
    date: "2025.04~2025.06",
    description: "SSAFY 13th 팀 프로젝트",
    link: "https://github.com/ssabab/ssabab-mlops",
    tech: ["Apache Airflow", "Apache Kafka", "Apache Spark", "MLFlow", "FastAPI", "MySQL", "Docker"],
    image: "/projects/ssabab.png"
  },
  {
    title: "LPR2",
    date: "2023.06~2024.12",
    description: "딥러닝을 활용한 도로 영상 복원 기술 개발",
    link: "https://github.com/choihjin/SuperResolution",
    tech: ["PyTorch", "TensorFlow", "OpenCV"],
    image: "/projects/lpr2.png"
  },
  {
    title: "Road Image De-identification",
    date: "2023.06~2023.12",
    description: "도로 이미지의 개인정보 익명화 프로세스 개발",
    link: "https://github.com/choihjin/De-identification",
    tech: ["PyTorch", "TensorFlow", "OpenCV"],
    image: "/projects/deid.png"
  },
  {
    title: "Root Image Recognition",
    date: "2023.02~2023.06",
    description: "뿌리 이미지를 인식하는 AI 모델 개발",
    link: "https://github.com/choihjin/RootRecognition",
    tech: ["TensorFlow", "sklearn", "OpenCV"],
    image: "/projects/root.png"
  },
  {
    title: "Smart Switch",
    date: "2024.05~2024.06",
    description: "스마트 스위치 기능 구현",
    link: "https://github.com/choihjin/SmartSwitch",
    tech: ["C++",],
    image: "/projects/smart.png"
  },
  {
    title: "SSAFIT NEWS",
    date: "2025.04~2025.05",
    description: "IT 뉴스 데이터 수집 및 분석 프로젝트",
    link: "https://github.com/choihjin/news-data-project",
    tech: ["Apache Airflow", "Apache Kafka","Apache Spark",
      "Apache Flink", "Apache Hadoop", "Elasticsearch", 
      "Docker", "PostgreSQL", "Django", "Vue"
    ],
    image: "/projects/ssafit.png"
  },
  {
    title: "Vehicle Features",
    date: "2022.10~2022.12",
    description: "차량 관련 기능 구현 프로젝트",
    link: "https://github.com/choihjin/VehicleFeatures",
    tech: ["OpenCV"],
    image: "/projects/vehicle.png"
  },
  {
    title: "Portfolio",
    date: "2025.03~Present",
    description: "개인 포트폴리오 웹사이트",
    link: "https://github.com/choihjin/portfolio",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio.png"
  }
];
