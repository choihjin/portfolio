export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  image?: string;
  
  // 주요 기능
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  
  // 기술 스택
  techStack: {
    category: string;
    items: {
      name: string;
      icon: string;
    }[];
  }[];
  
  // 핵심 알고리즘/기술
  coreTechnologies: {
    title: string;
    description: string;
    image?: string;
  }[];
  
  // 개발자 역할
  role: {
    title: string;
    description: string;
  }[];
  
  // 성능 평가 (선택)
  performance?: {
    title: string;
    metrics: {
      name: string;
      value: string;
    }[];
  };
  
  // 결과 예시 (선택)
  results?: {
    title: string;
    description: string;
    images?: string[];
  }[];
  
  // 프로젝트 구조
  projectStructure: {
    title: string;
    description: string;
    structure?: string;
  };
  
  // 설치 및 실행
  installation: {
    requirements: string[];
    steps: string[];
    notes?: string[];
  };
  
  // 산학협력 성과 (선택)
  collaboration?: {
    organization: string;
    achievements: string[];
    patents?: string[];
    papers?: string[];
  };
  
  // 참고 문헌 (선택)
  references?: {
    title: string;
    link: string;
  }[];
}

export const projects: Project[] = [
  // {
  //   id: "ssabab",
  //   title: "SSABAB",
  //   date: "2025.04~2025.06",
  //   description: "SSAFY 13th 팀 프로젝트",
  //   link: "https://github.com/ssabab/ssabab-mlops",
  //   image: "/images/ssabab.png",
  //   features: [
  //     {
  //       title: "실시간 데이터 처리",
  //       description: "Apache Kafka를 활용한 실시간 데이터 스트리밍 처리"
  //     },
  //     {
  //       title: "ML 모델 자동화",
  //       description: "MLFlow를 통한 머신러닝 모델 학습 및 배포 자동화"
  //     }
  //   ],
  //   techStack: [
  //     {
  //       category: "MLOps",
  //       items: [
  //         { name: "MLFlow", icon: "SiMlflow" },
  //         { name: "PyTorch", icon: "SiPytorch" }
  //       ]
  //     },
  //     {
  //       category: "Data Engineering",
  //       items: [
  //         { name: "Apache Kafka", icon: "SiApachekafka" },
  //         { name: "Apache Spark", icon: "SiApachespark" },
  //         { name: "Apache Airflow", icon: "SiApacheairflow" }
  //       ]
  //     }
  //   ],
  //   coreTechnologies: [
  //     {
  //       title: "실시간 데이터 파이프라인",
  //       description: "Kafka와 Spark를 활용한 실시간 데이터 처리 파이프라인 구축"
  //     }
  //   ],
  //   role: [
  //     {
  //       title: "MLOps 엔지니어",
  //       description: "ML 모델 자동화 파이프라인 구축 및 운영"
  //     }
  //   ],
  //   results: [
  //     {
  //       title: "실시간 데이터 처리 결과",
  //       description: "실시간 데이터 처리 파이프라인 구축 완료",
  //       images: ["/projects/ssabab-result1.png", "/projects/ssabab-result2.png"]
  //     }
  //   ],
  //   projectStructure: {
  //     title: "마이크로서비스 아키텍처",
  //     description: "각 컴포넌트가 독립적으로 동작하는 마이크로서비스 구조",
  //     structure: "/projects/ssabab-architecture.png"
  //   },
  //   installation: {
  //     requirements: [
  //       "Docker",
  //       "Python 3.8+",
  //       "Java 11+"
  //     ],
  //     steps: [
  //       "git clone https://github.com/ssabab/ssabab-mlops",
  //       "docker-compose up -d",
  //       "python setup.py install"
  //     ],
  //     notes: [
  //       "환경 변수 설정이 필요합니다",
  //       "데이터베이스 초기화가 필요합니다"
  //     ]
  //   }
  // },
  {
    id: "ssafit-news",
    title: "SSAFIT NEWS",
    date: "2025.01 ~ 2025.05",
    description: "실시간 뉴스 데이터를 수집하고, 텍스트 임베딩 기반으로 유사 뉴스 추천 및 인사이트 분석이 가능한 플랫폼을 구축합니다.",
    link: "https://github.com/choihjin/news-data-project",
    image: "/images/ssafit/web.png",
    features: [
      {
        title: "실시간 뉴스 수집",
        description: "RSS 피드를 통한 실시간 뉴스 데이터 수집, 한국경제, AI타임스, 전자신문 등 주요 IT 언론사 데이터 수집, 수집된 데이터는 Kafka 토픽으로 전송"
      },
      {
        title: "스트리밍 처리",
        description: "Kafka → Flink 기반 실시간 데이터 처리, 뉴스 본문 전처리 및 정제, 중복 뉴스 필터링 및 데이터 정합성 검증, OpenAI GPT-4를 활용한 카테고리 분류 및 키워드 추출"
      },
      {
        title: "데이터 분석 및 저장",
        description: "뉴스 키워드 추출 및 카테고리 분류, OpenAI Embedding API를 활용한 텍스트 벡터화, PostgreSQL(pgvector) 및 Elasticsearch 이중 저장, HDFS 기반 실시간 데이터 아카이빙, 실시간 검색 및 추천 기능 지원"
      },
      {
        title: "리포트 생성",
        description: "Spark 기반 일간 뉴스 분석, 키워드 트렌드 및 시각화, 카테고리별 기사 분포 분석, PDF 형식의 분석 리포트 자동 생성, HDFS 기반 리포트 아카이빙"
      }
    ],
    techStack: [
      {
        category: "Data Collection & Processing",
        items: [
          { name: "Apache Kafka", icon: "SiApachekafka" },
          { name: "Apache Flink", icon: "SiApacheflink" },
          { name: "Apache Spark", icon: "SiApachespark" }
        ]
      },
      {
        category: "Storage",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql" },
          { name: "Elasticsearch", icon: "SiElasticsearch" },
          { name: "Apache Hadoop", icon: "SiApachehadoop" }
        ]
      },
      {
        category: "Embedding & NLP",
        items: [
          { name: "OpenAI", icon: "SiOpenai" },
          { name: "KoNLPy", icon: "SiPython" }
        ]
      },
      {
        category: "Orchestration & Infrastructure",
        items: [
          { name: "Apache Airflow", icon: "SiApacheairflow" },
          { name: "Docker", icon: "SiDocker" }
        ]
      },
      {
        category: "Monitoring & Visualization",
        items: [
          { name: "Prometheus", icon: "SiPrometheus" },
          { name: "Kibana", icon: "SiKibana" },
          { name: "Grafana", icon: "SiGrafana" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "실시간 데이터 파이프라인",
        description: "Kafka → Flink 기반 실시간 데이터 처리, 뉴스 본문 전처리 및 정제, 중복 뉴스 필터링 및 데이터 정합성 검증, OpenAI GPT-4를 활용한 카테고리 분류 및 키워드 추출",
        // image: "/images/ssafit/kafka_dag.png"
      },
      {
        title: "텍스트 분석 및 임베딩",
        description: "OpenAI GPT-4 기반 키워드 추출 및 카테고리 분류, 뉴스 본문에서 핵심 키워드 5개 추출, 15개 IT 기술 카테고리 분류, OpenAI Embedding API를 활용한 1536차원 벡터 생성",
        // image: "/images/ssafit/embedding.png"
      },
      {
        title: "데이터 저장 및 검색",
        description: "PostgreSQL(pgvector) 및 Elasticsearch 이중 저장 구조, 벡터 기반 유사 뉴스 검색, 실시간 검색 및 추천 기능, HDFS 기반 데이터 아카이빙",
        // image: "/images/ssafit/storage.png"
      },
      {
        title: "일간 리포트 생성",
        description: "Spark 기반 일간 뉴스 분석, 키워드 트렌드 및 시각화, 카테고리별 기사 수 분포 분석, matplotlib을 활용한 PDF 리포트 자동 생성",
        // image: "/images/ssafit/spark_dag.png"
      }
    ],
    role: [
      {
        title: "데이터 파이프라인 설계",
        description: "전체 시스템 아키텍처 설계, 데이터 흐름 및 저장소 설계, 확장성 고려한 시스템 구성"
      },
      {
        title: "실시간 처리 구현",
        description: "Flink 기반 스트리밍 처리 로직, 데이터 전처리 및 정제 파이프라인, 실시간 모니터링 시스템 구축"
      },
      {
        title: "데이터 분석 및 저장",
        description: "Spark 분석 로직 구현, Elasticsearch 색인 설계, 벡터 검색 최적화"
      },
      {
        title: "시스템 운영",
        description: "Airflow DAG 설계 및 구현, Docker 기반 컨테이너화, 모니터링 및 로깅 시스템 구축"
      }
    ],
    projectStructure: {
      title: "프로젝트 구조",
      description: "모듈화된 구조로 각 컴포넌트의 독립적인 개발과 테스트가 가능",
      structure: `
.
├── batch/                    # 배치 처리 관련 코드
│   ├── dags/                # Airflow DAG 정의
│   │   ├── daily_report_dag.py
│   │   ├── sync_postgres_to_es.py
│   │   └── streaming_dag.py  # 실시간 뉴스 수집 DAG
│   ├── scripts/             # 실행 스크립트
│   │   ├── spark_daily_report.py
│   │   ├── consumer.py
│   │   ├── db_config.py
│   │   ├── db_utils.py
│   │   ├── models.py
│   │   ├── news_model.py
│   │   ├── preprocess.py
│   │   ├── producer_aitimes.py
│   │   ├── producer_hankyung.py
│   │   ├── producer_etnews.py 
│   │   └── config/
│   ├── data/               # 데이터 저장소
│   │   └── daily_reports/
│   ├── logs/              # 로그 파일
│   └── output/            # 출력 결과물
├── docker/                # Docker 관련 파일
│   ├── Dockerfile.airflow
│   ├── Dockerfile.spark
│   ├── Dockerfile.flink
│   ├── requirements.txt   # Python 패키지 의존성
│   ├── flink-conf.yaml    # Flink 설정 파일
│   └── flink-entrypoint.sh # Flink 실행 스크립트
├── hadoop/               # Hadoop 관련 설정 및 파일
├── img/                 # 이미지 파일 저장소
├── setup/              # 초기 설정 스크립트
├── test.py            # 테스트 스크립트
├── .env               # 환경 변수 설정
├── .gitignore        # Git 무시 파일 목록
├── docker-compose.yaml # Docker Compose 설정
└── requirements.txt    # Python 패키지 의존성`
    },
    installation: {
      requirements: [
        "Docker",
        "Python 3.8+",
        "Java 11+",
        "OpenAI API Key",
        "PostgreSQL",
        "Elasticsearch",
        "Apache Kafka",
        "Apache Flink",
        "Apache Spark",
        "Apache Airflow"
      ],
      steps: [
        "git clone https://github.com/choihjin/news-data-project.git",
        "cd news-data-project",
        "vi .env # 환경 변수 설정",
        "docker-compose up -d --build",
        "docker-compose logs -f"
      ],
      notes: [
        "환경 변수 설정이 필요합니다",
        "Docker와 Docker Compose가 필요합니다",
        "OpenAI API 키가 필요합니다"
      ]
    },
    results: [
      {
        title: "데이터 파이프라인",
        description: "데이터 파이프라인 구조 및 각 단계 설명",
        images: ["/images/ssafit/pipeline.png"]
      },
      {
        title: "워크플로우 모니터링",
        description: "DAG 실행 상태 및 로그 모니터링, DAG 실행 이력 및 성공/실패 현황, 태스크별 실행 시간 및 리소스 사용량, 실시간 로그 확인 및 디버깅",
        images: ["/images/ssafit/kibana.png", "/images/ssafit/grafana.png"]
      }
    ],
    references: [
      {
        title: "Frontend Github Repository",
        link: "https://github.com/choihjin/news-front-project"
      },
      {
        title: "Backend Github Repository",
        link: "https://github.com/choihjin/news-back-project"
      }
    ]
  },
  {
    id: "lpr2",
    title: "LPR2",
    date: "2023.06 ~ 2024.12",
    description: `( License Plate Restoration & Recognition )
      블랙박스 영상에서 흐릿한 자동차 번호판을 고화질로 복원하는 딥러닝 기반 화질 개선 시스템입니다.`,
    link: "https://github.com/choihjin/LPR2",
    image: "/images/lpr2/structure.png",
    features: [
      {
        title: "DeepLabV3 기반 번호판 세그멘테이션",
        description: "블랙박스 영상에서 번호판 영역을 정확하게 추출"
      },
      {
        title: "FlowFormer++ 기반 Optical Flow 추정",
        description: "프레임 간 움직임을 정확하게 추정하여 정렬"
      },
      {
        title: "시공간적 일관성 보정",
        description: "프레임 정렬을 통한 안정적인 영상 처리"
      },
      {
        title: "CLAHE를 통한 대비 향상",
        description: "영상의 대비를 개선하여 가독성 향상"
      },
      {
        title: "TCDM 기반 후처리",
        description: "Scene Text Prior를 활용한 번호판 복원"
      }
    ],
    techStack: [
      {
        category: "Languages & Frameworks",
        items: [
          { name: "Python", icon: "SiPython" },
          { name: "PyTorch", icon: "SiPytorch" },
          { name: "OpenCV", icon: "SiOpencv" }
        ]
      },
      {
        category: "ML Models",
        items: [
          { name: "DeepLabV3", icon: "SiPytorch" },
          { name: "FlowFormer++", icon: "SiPytorch" },
          { name: "TCDM", icon: "SiPytorch" }
        ]
      },
      {
        category: "Hardware",
        items: [
          { name: "CUDA", icon: "SiNvidia" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "License Plate Region Extraction",
        description: "DeepLabV3로 번호판 영역 추출 → 고정 비율(4:1)로 업샘플링, Homography를 이용해 시점 보정, 최종적으로 1장의 Pseudo-GT + 31장의 LR 번호판 프레임으로 구성"
      },
      {
        title: "Optical Flow Estimation & Refinement",
        description: "FlowFormer++를 통해 각 프레임의 움직임 추정, Temporal/Spatial Smoothness 기반 오류 보정 수행, 기준 프레임으로 모든 프레임 정렬 (De-warping)"
      },
      {
        title: "Aggregation & Post-processing",
        description: "정렬된 프레임들을 집계하여 하나의 이미지로 생성, CLAHE로 대비 개선, TCDM으로 Scene Text Prior를 활용한 복원 향상"
      }
    ],
    role: [
      {
        title: "DeepLabV3 기반 번호판 세그멘테이션",
        description: "번호판 영역 검출 모델 구현 및 최적화, Precision 89%, Recall 87.5% 달성, Homography 기반 시점 보정 알고리즘 개발"
      },
      {
        title: "TCDM 기반 후처리",
        description: "Scene Text Prior를 활용한 번호판 복원 모델 구현, Hallucination 현상 제거 및 복원 정확도 향상, ESRGAN, SwinIR 등 기존 모델 대비 우수한 성능 달성"
      }
    ],
    performance: {
      title: "성능 평가",
      metrics: [
        { name: "Detection Precision", value: "0.890" },
        { name: "Detection Recall", value: "0.875" },
        { name: "평균 RMSE 개선", value: "3.71%" },
        { name: "Worst 30% frame 기준 RMSE 개선", value: "13.37%" }
      ]
    },
    results: [
      {
        title: "프로젝트 결과",
        description: "ESRGAN, SwinIR, TATT 등 최신 모델들과 비교하여 Hallucination 현상 없이 번호판 복원 정확도 우수",
        images: ["/images/lpr2/result1.png", "/images/lpr2/result2.png"]
      }
    ],
    projectStructure: {
      title: "프로젝트 구조",
      description: "모듈화된 구조로 각 컴포넌트의 독립적인 개발과 테스트가 가능",
      structure: `
.
├── Data/                # 입력/출력 데이터
├── DT_core/            # 번호판 Detection (DeepLabV3)
├── FF_core/            # Optical Flow 보정 (FlowFormer++)
├── FlowFormerPlusPlus/ # FlowFormer++ 원본 코드
├── TCDM/               # 후처리용 텍스트 기반 복원 모델
├── scripts/            # 실행 스크립트 모음
└── main.py             # 메인 실행 스크립트`
    },
    installation: {
      requirements: [
        "Python 3.8+",
        "PyTorch",
        "OpenCV",
        "CUDA 11.3 이상"
      ],
      steps: [
        "Conda 환경 설정: conda env create -f environment.yaml",
        "모델 다운로드: model_v2.pth → DT_core/에 저장",
        "실행: python main.py"
      ],
      notes: [
        "GPU 지원이 필요합니다"
      ]
    },
    collaboration: {
      organization: "NC&",
      achievements: [
        "실제 블랙박스 데이터 기반 모델 검증",
        "기업 요구사항에 맞춘 시스템 최적화",
        "성공적인 산학협력 프로젝트 완료"
      ]
    },
    references: [
      {
        title: "DeepLabV3",
        link: "https://arxiv.org/abs/1706.05587"
      },
      {
        title: "FlowFormer++",
        link: "https://arxiv.org/abs/2303.01237"
      },
      {
        title: "TCDM (Scene Text Restoration)",
        link: "https://arxiv.org/abs/2203.09388"
      }
    ]
  },
  {
    id: "deid",
    title: "Road Image De-identification",
    date: "2023.06 ~ 2023.12",
    description: "이미지 및 영상 내 번호판과 얼굴 정보를 자동으로 비식별화하는 딥러닝 기반 시스템입니다.",
    link: "https://github.com/choihjin/De-identification",
    image: "/images/deid/day2.png",
    features: [
      {
        title: "DeepLabV3 기반 번호판 Segmentation",
        description: "블랙박스 영상에서 번호판 영역을 정확하게 추출"
      },
      {
        title: "YOLOv5 기반 얼굴 검출 및 블러 처리",
        description: "영상 내 얼굴 영역을 자동으로 검출하고 블러 처리"
      },
      {
        title: "이미지 및 영상 파일의 자동 비식별화 파이프라인",
        description: "다양한 입력 형식을 지원하는 자동화된 비식별화 처리",
        image: "/images/deid/workflow.png"
      },
      {
        title: "CLI 기반 다중 입력, 디렉토리 처리 기능",
        description: "대량의 파일을 효율적으로 처리할 수 있는 CLI 인터페이스"
      }
    ],
    techStack: [
      {
        category: "Languages & Frameworks",
        items: [
          { name: "Python", icon: "SiPython" },
          { name: "PyTorch", icon: "SiPytorch" },
          { name: "OpenCV", icon: "SiOpencv" }
        ]
      },
      {
        category: "ML Models",
        items: [
          { name: "DeepLabV3", icon: "SiPytorch" },
          { name: "YOLOv5", icon: "SiPytorch" }
        ]
      },
      {
        category: "Hardware",
        items: [
          { name: "CUDA", icon: "SiNvidia" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "License Plate Detection & Blur",
        description: "DeepLabV3 모델을 사용하여 번호판 영역을 검출하고 cv2.blur(ksize=(50,50))로 블러 처리"
      },
      {
        title: "Head Detection & Blur",
        description: "YOLOv5-crowdhuman 모델로 얼굴 영역을 검출하고 cv2.blur(ksize=(100,100))로 블러 처리"
      }
    ],
    role: [
      {
        title: "차량 번호판 / 사람 얼굴 디텍션 모델 선정 및 실험",
        description: "DeeplabV3, YOLOv5-crowdhuman 등 다양한 딥러닝 모델 비교 후 최종 선정, 모델 성능 평가 및 하이퍼파라미터 튜닝 진행"
      },
      {
        title: "디텍션 결과 기반 Blur 처리 파이프라인 구현",
        description: "디텍션된 Bounding Box 좌표를 기반으로 OpenCV blur 함수 적용, 번호판 및 머리 영역의 자동 추출 및 비식별화 처리 전체 로직 구현"
      },
      {
        title: "전체 파이프라인 통합 개발",
        description: "이미지 및 영상 입력 → 디텍션 → Blur → 결과 저장의 전체 흐름 구현, CLI 기반 실행 스크립트 옵션 정리 및 예외 처리 로직 구현"
      }
    ],
    performance: {
      title: "성능 평가",
      metrics: [
        { name: "DeeplabV3 Precision", value: "0.890" },
        { name: "DeeplabV3 Recall", value: "0.875" },
        { name: "YOLOv5 Person Precision", value: "0.866" },
        { name: "YOLOv5 Person Recall", value: "0.712" },
        { name: "YOLOv5 Head Precision", value: "0.882" },
        { name: "YOLOv5 Head Recall", value: "0.656" }
      ]
    },
    results: [
      {
        title: "프로젝트 결과",
        description: "주간/야간 환경에서 안정적인 번호판 및 얼굴 비식별화 성능 달성",
        images: ["/images/deid/day.png", "/images/deid/day2.png", "/images/deid/night.png"]
      }
    ],
    projectStructure: {
      title: "프로젝트 구조",
      description: "모듈화된 구조로 각 컴포넌트의 독립적인 개발과 테스트가 가능",
      structure: `
.
├── data/                # 입력 이미지/영상
├── license/             # 번호판 blur 처리 결과
├── output/              # 최종 결과 (번호판 + 머리 blur)
├── pytorch_licenseplate_segmentation/ # 번호판 모델
├── yolov5_crowdhuman/   # 머리 검출 모델
├── blur.py              # 메인 실행 파일
└── requirements.txt     # 의존 패키지 목록`
    },
    installation: {
      requirements: [
        "Python 3.11.5",
        "PyTorch",
        "OpenCV",
        "CUDA 11.8+",
        "cuDNN 8.7+"
      ],
      steps: [
        "conda create -n blur_env python=3.11.5",
        "conda activate blur_env",
        "pip install -r requirements.txt",
        "python blur.py"
      ],
      notes: [
        "GPU 지원이 필요합니다",
        "CUDA 11.8 이상이 필요합니다"
      ]
    },
    collaboration: {
      organization: "NC&",
      achievements: [
        "실제 블랙박스 데이터 기반 검증 및 피드백 반영",
        "기업 요구사항에 맞춘 비식별화 성능 개선",
        "시스템 최적화 및 사용자 입력 기반 처리 기능 구현"
      ]
    },
    references: [
      {
        title: "YOLOv5 Crowdhuman",
        link: "https://github.com/deepakcrk/yolov5-crowdhuman"
      },
      {
        title: "License Plate Segmentation",
        link: "https://github.com/dbpprt/pytorch-licenseplate-segmentation"
      }
    ]
  },
  {
    id: "root",
    title: "Root Image Recognition",
    date: "2023.02 ~ 2023.06",
    description: "식물의 촬영 이미지를 분석하여, 생장이 시작된 후 12시간 단위로 시간이 얼마나 흘렀는지 분류하는 인공지능 모델입니다.",
    link: "https://github.com/choihjin/RootRecognition",
    image: "/images/root/root.png",
    features: [
      {
        title: "식물 생장 시간 분류",
        description: "식물 촬영 이미지의 생장 시간을 12시간 단위로 분류"
      },
      {
        title: "다양한 이미지 전처리",
        description: "Gamma 보정, Thresholding 등 다양한 전처리 기법 적용"
      },
      {
        title: "화분 제거 및 중심 정렬",
        description: "화분 제거 및 중심 정렬을 통한 주요 특징 정렬"
      },
      {
        title: "Morphological Transformation",
        description: "Morphological Transformation을 통한 뿌리와 배경 분리"
      }
    ],
    techStack: [
      {
        category: "Languages & Frameworks",
        items: [
          { name: "Python", icon: "SiPython" },
          { name: "OpenCV", icon: "SiOpencv" },
          { name: "NumPy", icon: "SiNumpy" },
          { name: "Matplotlib", icon: "SiMatplotlib" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "Gamma 보정",
        description: "Gamma 보정을 통해 이미지의 명암 대비를 조정하여 더 명확한 이미지 확보",
        image: "/images/root/gamma.png"
      },
      {
        title: "Cropping",
        description: "이미지의 중앙을 기준으로 화분 제거 및 중심 정렬",
        image: "/images/root/cropping.png"
      },
      {
        title: "Blurring & Thresholding",
        description: "Blurring 및 Thresholding을 통해 노이즈 제거 및 명확한 특징 강화",
        image: "/images/root/blur.png"
      },
      {
        title: "Bounding Rectangle Detection",
        description: "Bounding Rectangle Detection을 통해 뿌리 영역 추출",
        image: "/images/root/bounding.png"
      },
      {
        title: "X축 중앙 정렬",
        description: "X축 중앙 정렬을 통해 뿌리 영역 중앙 정렬",
        image: "/images/root/x.png"
      },
      {
        title: "Morphological Transformation",
        description: "Morphological Transformation을 통해 뿌리와 배경 분리",
        image: "/images/root/morph.png"
      },
      {
        title: "Extra Cropping",
        description: "Extra Cropping을 통해 뿌리 영역 추출",
        image: "/images/root/extra.png"
      }
    ],
    role: [
      {
        title: "이미지 전처리 파이프라인 개발",
        description: "다양한 전처리 기법을 적용하여 노이즈 제거 및 특징 강화, 화분 제거 및 중심 정렬 알고리즘 구현"
      },
      {
        title: "분류 모델 개발",
        description: "전처리된 이미지를 기반으로 생장 시간 분류 모델 개발 및 학습"
      }
    ],
    performance: {
      title: "성능 평가",
      metrics: [
        { name: "Test Accuracy", value: "0.5084" },
        { name: "Loss", value: "5.95" }
      ]
    },
    results: [
      {
        title: "프로젝트 결과",
        description: "다양한 전처리 기법을 통해 노이즈가 제거된 깨끗한 입력 데이터 확보",
        images: ["/images/root/result.png", "/images/root/result2.png", "/images/root/result3.png"]
      }
    ],
    projectStructure: {
      title: "프로젝트 구조",
      description: "전처리, 모델 학습, 추론 등 각 단계별로 모듈화된 구조",
      structure: `
├── preprocessing/          # 전처리 스크립트
│   └── process.py
├── model/                  # 학습 및 추론 코드
│   ├── train.py
│   └── infer.py
├── dataset/                # 원본 및 전처리 이미지
├── example/                # 결과 시각화 예시
├── notebook/               # 분석 노트북
└── README.md`
    },
    installation: {
      requirements: [
        "Python 3.8+",
        "OpenCV",
        "NumPy",
        "Matplotlib"
      ],
      steps: [
        "pip install -r requirements.txt",
        "python preprocessing/process.py --input_dir dataset/raw --output_dir dataset/processed",
        "python model/train.py",
        "python model/infer.py --image example/input1.png"
      ]
    }
  },
  // {
  //   id: "smart-switch",
  //   title: "Smart Switch",
  //   date: "2024.05~2024.06",
  //   description: "스마트 스위치 기능 구현",
  //   link: "https://github.com/choihjin/SmartSwitch",
  //   image: "/projects/smart.png",
  //   features: [
  //     {
  //       title: "스마트 스위치 기능 구현",
  //       description: "C++를 활용한 스마트 스위치 기능 구현"
  //     }
  //   ],
  //   techStack: [
  //     {
  //       category: "Programming Language",
  //       items: [
  //         { name: "C++", icon: "SiCplusplus" }
  //       ]
  //     }
  //   ],
  //   coreTechnologies: [
  //     {
  //       title: "스마트 스위치 기능 구현",
  //       description: "C++를 활용한 스마트 스위치 기능 구현"
  //     }
  //   ],
  //   role: [
  //     {
  //       title: "프로그래머",
  //       description: "C++를 활용한 스마트 스위치 기능 구현"
  //     }
  //   ],
  //   projectStructure: {
  //     title: "스마트 스위치 구조",
  //     description: "스마트 스위치의 구조와 각 컴포넌트 설명"
  //   },
  //   installation: {
  //     requirements: [
  //       "C++ 컴파일러",
  //       "STM32 마이크로컨트롤러"
  //     ],
  //     steps: [
  //       "git clone https://github.com/choihjin/SmartSwitch",
  //       "컴파일 및 프로그램 다운로드"
  //     ],
  //     notes: [
  //       "하드웨어 설정이 필요합니다"
  //     ]
  //   }
  // },
  {
    id: "vehicle-features",
    title: "Vehicle Features",
    date: "2022.10 ~ 2022.12",
    description: "OpenCV와 YOLO를 활용한 차량 주행 보조 기능 구현 프로젝트입니다. 차선 이탈 감지, 전방 차량 출발 감지, 보행자 및 차량 근접 감지 기능을 제공합니다.",
    link: "https://github.com/choihjin/VehicleFeatures",
    image: "/images/vehicle/lanedeparture.png",
    features: [
      {
        title: "차선 이탈 감지 및 경고",
        description: "Hough Transform을 이용한 차선 검출, 좌우 차선 각도 분석, 차선 이탈 지속성 판단을 통한 안전한 주행 지원"
      },
      {
        title: "전방 차량 출발 감지 및 알림",
        description: "YOLO를 이용한 차량 객체 검출, 차량 크기 변화 모니터링, 정지 상태에서의 차량 이동 감지로 교통 흐름 개선"
      },
      {
        title: "보행자 및 차량 근접 감지 및 경고",
        description: "YOLO를 이용한 객체 검출, 객체 크기 기반 근접도 판단, 차량과 보행자에 대한 차별화된 경고 제공"
      }
    ],
    techStack: [
      {
        category: "Computer Vision",
        items: [
          { name: "OpenCV", icon: "SiOpencv" },
          { name: "YOLO", icon: "SiPytorch" }
        ]
      },
      {
        category: "Programming Language",
        items: [
          { name: "C++", icon: "SiCplusplus" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "차선 이탈 감지",
        description: "Hough Transform을 이용한 차선 검출, 좌우 차선 각도 분석 (30-60도, 120-150도), 차선 이탈 지속성 판단 (5프레임 이상)"
      },
      {
        title: "전방 차량 출발 감지",
        description: "YOLO를 이용한 차량 객체 검출, 차량 크기 변화 모니터링, 정지 상태에서의 차량 이동 감지"
      },
      {
        title: "보행자/차량 근접 감지",
        description: "YOLO를 이용한 객체 검출, 객체 크기 기반 근접도 판단, 차량: 너비 130px 또는 높이 110px 이상, 보행자: 높이 120px 이상"
      }
    ],
    role: [
      {
        title: "컴퓨터 비전 엔지니어",
        description: "OpenCV와 YOLO를 활용한 객체 검출 및 추적 알고리즘 구현, 실시간 영상 처리 파이프라인 구축"
      }
    ],
    results: [
      {
        title: "차선 이탈 감지",
        description: "차선 이탈 시 'Lane departure!' 경고 메시지 표시",
        images: ["/images/vehicle/lanedeparture.png"]
      },
      {
        title: "전방 차량 출발 감지",
        description: "전방 차량 출발 시 'Start Moving!' 알림 메시지 표시",
        images: ["/images/vehicle/startmoving.png"]
      },
      {
        title: "보행자/차량 근접 감지",
        description: "보행자/차량 근접 시 'Human/Car detected nearby!' 경고 메시지 표시",
        images: ["/images/vehicle/humandetect.png", "/images/vehicle/cardetect.png"]
      }
    ],
    projectStructure: {
      title: "프로젝트 구조",
      description: "모듈화된 구조로 각 기능의 독립적인 개발과 테스트가 가능",
      structure: `
VehicleFeatures/
├── main.cpp          # 메인 소스 코드
├── YOLO/             # YOLO 모델 파일
│   ├── yolov4-tiny.cfg
│   ├── yolov4-tiny.weights
│   └── coco.names
└── src/              # 테스트 사진 및 기타 리소스
    ├── lanedeparture.png
    ├── startmoving.png
    ├── humandetect.png
    └── cardetect.png`
    },
    installation: {
      requirements: [
        "OpenCV 4.x",
        "YOLO v4-tiny",
        "C++ 컴파일러"
      ],
      steps: [
        "sudo apt update && sudo apt install -y libopencv-dev",
        "wget https://raw.githubusercontent.com/AlexeyAB/darknet/master/cfg/yolov4-tiny.cfg -O YOLO/yolov4-tiny.cfg",
        "wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v4_pre/yolov4-tiny.weights -O YOLO/yolov4-tiny.weights",
        "g++ main.cpp -o main `pkg-config --cflags --libs opencv4`",
        "./main"
      ],
      notes: [
        "OpenCV 4.x가 필요합니다",
        "YOLO v4-tiny 모델 파일이 필요합니다"
      ]
    }
  },
  {
    id: "portfolio",
    title: "Portfolio",
    date: "2025.03 ~ Present",
    description: "개인 포트폴리오 웹사이트",
    link: "https://github.com/choihjin/portfolio",
    image: "/images/portfolio.png",
    features: [
      {
        title: "개인 포트폴리오 웹사이트",
        description: "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트 개발"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" }
        ]
      },
      {
        category: "Programming Language",
        items: [
          { name: "TypeScript", icon: "SiTypescript" }
        ]
      }
    ],
    coreTechnologies: [
      {
        title: "개인 포트폴리오 웹사이트",
        description: "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트 개발"
      }
    ],
    role: [
      {
        title: "프론트엔드 개발자",
        description: "개인 포트폴리오 웹사이트 개발"
      }
    ],
    projectStructure: {
      title: "개인 포트폴리오 웹사이트 구조",
      description: "개인 포트폴리오 웹사이트의 구조와 각 컴포넌트 설명"
    },
    installation: {
      requirements: [
        "Node.js 14+",
        "npm 6+",
        "Next.js 13+"
      ],
      steps: [
        "git clone https://github.com/choihjin/portfolio",
        "npm install",
        "npm run dev"
      ],
      notes: [
        "Node.js와 npm이 필요합니다",
        "Next.js 13+가 필요합니다"
      ]
    }
  }
];
