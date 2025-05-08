export interface Activity {
  date: string;
  title: string;
  role: string;
  description: string;
}

export const externalActivities: Activity[] = [
  {
    date: "2023.06 ~ 2024.12",
    title: "GHOST(Global Handong Oriented Security Team)",
    role: "동아리원",
    description: "보안 및 알고리즘 스터디를 진행하였습니다.",
  },
];

export const internalActivities: Activity[] = [
  {
    date: "2023.06 ~ 2024-12",
    title: "Deep Learning 연구",
    role: "학부연구생",
    description: "Deep Learning 연구실에서 산학 연구를 진행하였습니다.",
  },
  {
    date: "2023-1",
    title: "Data Structure",
    role: "TA",
    description: "자료구조 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2023-2, 2024-2",
    title: "Computer Architecture",
    role: "TA",
    description: "컴퓨터 구조 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2024-1",
    title: "Algorithm Analysis",
    role: "TA",
    description: "알고리즘 분석 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 TA 역할을 수행하였습니다.",
  },
  {
    date: "2022-2, 2023-Summer",
    title: "SW 교육봉사단",
    role: "교육멘토",
    description: "경주고등학교, 포항대동고등학교에 방문하여 SW(Arduino, C++) 교육을 진행하였습니다.",
  },
  {
    date: "2022-1",
    title: "Calculus 튜터링",
    role: "튜터",
    description: "미적분학 수업을 수강하는 학생들을 대상으로 수업 내용을 이해하도록 도와주는 튜터 역할을 수행하였습니다.",
  },
]; 