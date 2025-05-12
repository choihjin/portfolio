export interface Project {
  name: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
}

export const teamProjects: Project[] = [
  {
    name: "License Plate Restoration",
    date: "2023.06~2024.12",
    description: "딥러닝을 활용한 도로 영상 복원 기술 개발",
    link: "https://github.com/choihjin/SuperResolution",
    tags: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    name: "Road Image De-identification",
    date: "2023.06~2023.12",
    description: "도로 이미지의 개인정보 익명화 프로세스 개발",
    link: "https://github.com/choihjin/De-identification",
    tags: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    name: "Root Image Recognition",
    date: "2023.02~2023.06",
    description: "뿌리 이미지를 인식하는 AI 모델 개발",
    link: "https://github.com/choihjin/RootRecognition",
    tags: ["Python", "CNN", "OpenCV"]
  },
  {
    name: "Smart Switch",
    date: "2024.05~2024.06",
    description: "스마트 스위치 기능 구현",
    link: "https://github.com/choihjin/SmartSwitch",
    tags: ["Python", "CNN", "OpenCV"]
  }
];

export const personalProjects: Project[] = [
  {
    name: "Vehicle Features",
    date: "2022.10~2022.12",
    description: "차량 관련 기능 구현 프로젝트",
    link: "https://github.com/choihjin/VehicleFeatures",
    tags: ["C++", "OpenCV", "YOLO"]
  },
  {
    name: "Portfolio",
    date: "2025.03~Present",
    description: "개인 포트폴리오 웹사이트",
    link: "https://github.com/choihjin/portfolio",
    tags: ["Vue.js", "Tailwind CSS"]
  }
];
