export interface Activity {
  date: string;
  title: string;
  role: string;
  description: string;
  image?: string;
}

export const activities: Activity[] = [
  {
    date: "2023.06 ~ 2024.12",
    title: "GHOST(Global Handong Oriented Security Team)",
    role: "동아리원",
    description: "보안 및 알고리즘 스터디를 진행하였습니다.",
    image: "/activities/ghost.png"
  },
  {
    date: "2023 ~ 2024",
    title: "Deep Learning 연구",
    role: "학부연구생",
    description: "Deep Learning 연구실에서 산학 연구를 진행하였습니다.",
    image: "/activities/research.png"
  },
  {
    date: "2022, 2023",
    title: "SW 교육봉사단",
    role: "교육멘토",
    description: "경주고등학교, 포항대동고등학교에 방문하여 SW(Arduino, C++) 교육을 진행하였습니다.",
    image: "/activities/teaching.png"
  },
  {
    date: "2023 ~ 2024",
    title: "Teaching Assistant",
    role: "TA",
    description: "자료구조, 컴퓨터 구조, 알고리즘 분석 수업에서 TA 역할을 수행하며 학생들의 학습을 지원하였습니다.",
    image: "/activities/ta.png"
  },
  {
    date: "2022-1",
    title: "Calculus 튜터링",
    role: "튜터",
    description: "미적분학 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 튜터 역할을 수행하였습니다.",
    image: "/activities/tutoring.png"
  }
]; 