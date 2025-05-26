export interface Award {
  date: string;
  title: string;
  organizer: string;
  rank?: string;
}

export const awards: Award[] = [
  {
    date: "2024.05.11",
    title: "대경권 프로그래밍 경진대회",
    organizer: "대구 경북 소재 SW중심대학사업단",
    rank: "우수상",
  },
  {
    date: "2023.11.07",
    title: "SW 페스티벌 AI 육목 경진대회",
    organizer: "SW중심대학사업단",
    rank: "금상",
  },
  {
    date: "2023.11.07",
    title: "SW 페스티벌 프로그래밍 경진대회",
    organizer: "SW중심대학사업단",
    rank: "장려상",
  },
  {
    date: "2023-1, 2023-2",
    title: "성적 우수 장학금",
    organizer: "",
  },
];

export const certificates: Award[] = [
  {
    date: "2025.06",
    title: "정보처리기사",
    organizer: "한국산업인력공단",
  },
  {
    date: "2025.04",
    title: "SQLD",
    organizer: "한국데이터산업진흥원",
  },
]; 