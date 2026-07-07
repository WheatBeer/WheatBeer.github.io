export const resumeTagline = "Software Engineer at KB Securities";

export interface ResumeItem {
  /** May contain trusted inline HTML (links, <br>) authored by the site owner. */
  titleHtml: string;
  dateRange?: string;
  subItemsHtml?: string[];
  /** Draws a divider above this item, separating it from the previous one. */
  separatorBefore?: boolean;
  /** Only used by the Contact section, rendered as an icon + label link. */
  icon?: "email" | "linkedin" | "github";
  href?: string;
  label?: string;
}

export interface ResumeSection {
  id: string;
  heading: string;
  items: ResumeItem[];
}

export const resumeSections: ResumeSection[] = [
  {
    id: "interests",
    heading: "Interests",
    items: [
      { titleHtml: "AI Programming" },
      { titleHtml: "Market Making, Arbitrage Trading, HFT" },
      { titleHtml: "DMA (OMS + FEP)" },
      {
        titleHtml:
          '<span class="text-xs tracking-widest text-indigo-600 uppercase dark:text-indigo-400">Skills</span>',
        separatorBefore: true,
        subItemsHtml: [
          "C++/Boost C++, Python",
          "Linux, Mac, WSL",
          "Redis, Kafka",
          "MySQL, PostgreSQL, Altibase",
          "Onload, TCPDirect",
        ],
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    items: [
      {
        titleHtml: `Linkedin: <a href="https://www.linkedin.com/in/sungmin-ryu-2b0605194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>`,
        icon: "linkedin",
        href: "https://www.linkedin.com/in/sungmin-ryu-2b0605194/",
        label: "LinkedIn",
      },
      {
        titleHtml: `E-mail: <a href="mailto:sungminryu94@gmail.com">sungminryu94@gmail.com</a>`,
        icon: "email",
        href: "mailto:sungminryu94@gmail.com",
        label: "sungminryu94@gmail.com",
      },
      {
        titleHtml: `Github: <a href="https://github.com/WheatBeer" target="_blank" rel="noopener noreferrer">GitHub</a>`,
        icon: "github",
        href: "https://github.com/WheatBeer",
        label: "GitHub",
      },
    ],
  },
  {
    id: "education",
    heading: "Education",
    items: [
      {
        titleHtml:
          "M.S. in Electrical &amp; Electronic Engineering<br>Yonsei University, Seoul, Republic of Korea",
        dateRange: "Mar. 2020 - Feb. 2022",
        subItemsHtml: [
          `Advisor: <a href="https://sites.google.com/site/wjhsong" target="_blank" rel="noopener noreferrer">William J. Song</a>`,
          `Lab: <a href="https://casl.yonsei.ac.kr/" target="_blank" rel="noopener noreferrer">Computer Architecture and System Lab (CASL)</a>`,
        ],
      },
      {
        titleHtml:
          "B.S. in Electrical &amp; Electronic Engineering<br>Yonsei University, Seoul, Republic of Korea",
        dateRange: "Mar. 2017 - Feb. 2020",
        subItemsHtml: ["Transferred from Sogang University"],
      },
      {
        titleHtml: "Whimoon High School, Seoul, Republic of Korea",
        dateRange: "Mar. 2009 - Feb. 2012",
      },
    ],
  },
  {
    id: "work-experiences",
    heading: "Work Experiences",
    items: [
      {
        titleHtml: `Software Engineer, Passive Tech Team, <a href="https://www.kbsec.com" target="_blank" rel="noopener noreferrer">KB Securities</a><br>Seoul, Republic of Korea`,
        dateRange: "Apr. 2026 - Present",
        subItemsHtml: [
          "Supporting ETF/ETN/ELW Liquidity Provider (LP) and Derivatives Market Making (MM)",
          "Managing the installation of Horizon OMS at HKEX (Hong Kong Exchange) colocation",
        ],
      },
      {
        titleHtml: `Quantitative Developer, Quant Dealing Part, <a href="https://iprovest.com/" target="_blank" rel="noopener noreferrer">Kyobo Securities</a><br>Seoul, Republic of Korea`,
        dateRange: "Feb. 2023 - Apr. 2026",
        subItemsHtml: [
          "Developed and improved automated market making (MM) systems in KRX securities and derivatives markets",
          "Developed HFT-based arbitrage platform through DMA systems",
          "Developed an order management system (OMS) from scratch",
          "C++17/Boost C++, MySQL, Redis, Onload, and TCPDirect",
        ],
      },
      {
        titleHtml: `Software Engineer, IT Team, <a href="https://futures.co.kr/" target="_blank" rel="noopener noreferrer">NH Futures</a> (Derivatives Brokerage House)<br>Seoul, Republic of Korea`,
        dateRange: "Aug. 2022 - Jan. 2023",
        subItemsHtml: [
          "Linux system programming (e.g., IPC, thread, socket, etc.)",
          "Developed and operated front-end processor (FEP) systems",
          "Reorganized and developed HTS/MTS server systems to respond to the next-generation system of the Korea Exchange (KRX)",
          "Operated direct market access (DMA) order management systems",
        ],
      },
      {
        titleHtml: `Intern, <a href="https://www.etri.re.kr/intro.html" target="_blank" rel="noopener noreferrer">Electronics and Telecommunications Research Institute</a> (ETRI)<br>SW-SoC R&amp;D Center, Gyeonggi-do, Republic of Korea`,
        dateRange: "Jul. 2019 - Aug. 2019",
        subItemsHtml: [
          "Internship program sponsored by the national government",
          "Developed a framework for lightweight DNNs (i.e., quantization) using PyTorch",
        ],
      },
      {
        titleHtml: `Intern, <a href="https://www.chain.partners/" target="_blank" rel="noopener noreferrer">Chain Partners</a> (Blockchain Start-up)<br>Seoul, Republic of Korea`,
        dateRange: "May. 2018 - Sep. 2018",
        subItemsHtml: ["Research on blockchain systems", "UI/UX design for blockchain applications"],
      },
    ],
  },
  {
    id: "activities",
    heading: "Activities",
    items: [
      {
        titleHtml:
          "Capstone Design in School of Electrical &amp; Electronic Engineering<br>Yonsei University, Seoul, Republic of Korea",
        dateRange: "Dec. 2018 - Jun. 2019",
        subItemsHtml: [
          "Topic: Improving GPU performance in deep neural network on GPU simulator",
        ],
      },
      {
        titleHtml:
          "Vice President of International Yonsei Community<br>Yonsei University, Seoul, Republic of Korea",
        dateRange: "Sep. 2018 - Dec. 2018",
      },
      {
        titleHtml: "Yonsei Blockchain LAB<br>Yonsei University, Seoul, Republic of Korea",
        dateRange: "May. 2018 - Sep. 2018",
        subItemsHtml: [
          "Developed smart contracts in C++",
          `Lecturer for <a href="https://github.com/EOSIO" target="_blank" rel="noopener noreferrer">EOSIO</a> software system`,
        ],
      },
      {
        titleHtml:
          "ESL Course in Intensive English Institute<br>University of Illinois at Urbana-Champaign (UIUC), Illinois, USA",
        dateRange: "Jan. 2018 - May. 2018",
      },
      {
        titleHtml: "Military Service (Auxiliary police)<br>Yeongdeungpo Police Station, Seoul, Republic of Korea",
        dateRange: "Jun. 2014 - Mar. 2016",
      },
    ],
  },
  {
    id: "publications",
    heading: "Publications",
    items: [
      {
        titleHtml: `C. Park, B. Kim, <b>S. Ryu</b>, and W. Song, &ldquo;NeuroSpector: Systematic Optimization of Dataflow Scheduling in DNN Accelerators,&rdquo; <i>IEEE Transactions on Parallel and Distributed Systems (TPDS)</i>, vol. 34, no. 8, Aug. 2023, pp. 2279-2294 <a href="https://ieeexplore.ieee.org/document/10145602/" target="_blank" rel="noopener noreferrer">[Paper]</a> <a href="https://github.com/yonsei-icsl/neurospector" target="_blank" rel="noopener noreferrer">[Github]</a>`,
      },
      {
        titleHtml: `<b>S. Ryu</b>, &ldquo;Optimization of Reconfigurable Deep Neural Network Accelerators Using Bottom-up Mapping and Energy Prediction,&rdquo; <i>Master&rsquo;s Thesis</i>, Yonsei University, Dec. 2021. <a href="https://library.yonsei.ac.kr/search/detail/CAT000002096932?briefLink=/main/searchBrief?q=%EB%B0%94%ED%85%80%EC%97%85+%EB%A7%A4%ED%95%91" target="_blank" rel="noopener noreferrer">[Paper]</a> <a href="/yonsei_ms_thesis/">[Summary]</a>`,
      },
    ],
  },
  {
    id: "patents",
    heading: "Patents",
    items: [
      {
        titleHtml: `W. Song, C. Park, B. Kim, and <b>S. Ryu</b>, &ldquo;Neural Network Computing Device and Control Method,&rdquo; <i>US17/883010</i>, Aug. 2022.`,
      },
    ],
  },
  {
    id: "certifications",
    heading: "Certifications",
    items: [
      {
        titleHtml: "Certified Derivatives Investment Advisor (파생상품투자권유자문인력), Korea Financial Investment Association",
        dateRange: "Nov. 2022",
      },
    ],
  },
  {
    id: "awards",
    heading: "Awards and Honors",
    items: [
      { titleHtml: "Graduate Admission Scholarship, Yonsei University", dateRange: "Jan. 2020" },
      { titleHtml: "High Honors Student Award, Yonsei University", dateRange: "Jan. 2019" },
    ],
  },
];
