export const resumeTagline = "Software Engineer — AI, Trading Systems, C++, Linux";

export interface ResumeItem {
  /** May contain trusted inline HTML (links, <br>) authored by the site owner. */
  titleHtml: string;
  dateRange?: string;
  subItemsHtml?: string[];
  /** Draws a divider above this item, separating it from the previous one. */
  separatorBefore?: boolean;
  /** Only used by the Contact section, rendered as an icon + label link. */
  icon?: "email" | "linkedin";
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
      { titleHtml: "Progressive Web App (PWA)" },
      { titleHtml: "Market Making, Arbitrage Trading, HFT" },
      { titleHtml: "DMA (OMS + FEP)" },
      {
        titleHtml:
          '<span class="text-xs tracking-widest text-indigo-600 uppercase dark:text-indigo-400">Skills</span>',
        separatorBefore: true,
      },
      { titleHtml: "C++, Boost, Python" },
      { titleHtml: "Linux, macOS, WSL, Docker, Onload (kernel-bypass)" },
      { titleHtml: "MySQL, Redis (Valkey), PostgreSQL, Altibase" },
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
    ],
  },
  {
    id: "work-experiences",
    heading: "Work Experiences",
    items: [
      {
        titleHtml: `Software Engineer<br>Passive Tech Team &middot; <a href="https://www.kbsec.com" target="_blank" rel="noopener noreferrer">KB Securities</a><br>Seoul, Republic of Korea`,
        dateRange: "Apr. 2026 - Present",
        subItemsHtml: [
          "Supporting market making (MM) for ETF and derivatives",
          "Managing the installation of the Horizon order management system (OMS) at the HKEX (Hong Kong Exchange) colocation",
          "Building an AI-based tick-level market simulator for strategy testing",
        ],
      },
      {
        titleHtml: `Quantitative Developer<br>Quant Dealing Part &middot; <a href="https://iprovest.com/" target="_blank" rel="noopener noreferrer">Kyobo Securities</a><br>Seoul, Republic of Korea`,
        dateRange: "Feb. 2023 - Apr. 2026",
        subItemsHtml: [
          "Developed and improved automated MM systems for the Korea Exchange (KRX) securities and derivatives markets",
          "Built a high-frequency trading (HFT) arbitrage platform on direct market access (DMA)",
          "Developed an OMS from scratch",
        ],
      },
      {
        titleHtml: `Software Engineer<br>IT Team &middot; <a href="https://futures.co.kr/" target="_blank" rel="noopener noreferrer">NH Futures</a> (derivatives brokerage)<br>Seoul, Republic of Korea`,
        dateRange: "Aug. 2022 - Jan. 2023",
        subItemsHtml: [
          "Linux system programming (IPC, threads, sockets)",
          "Developed and operated front-end processor (FEP) systems",
          "Rebuilt HTS/MTS server systems for the next-generation KRX",
          "Operated DMA order management systems",
        ],
      },
      {
        titleHtml: `Intern<br><a href="https://www.etri.re.kr/intro.html" target="_blank" rel="noopener noreferrer">Electronics and Telecommunications Research Institute</a> (ETRI)<br>SW-SoC R&amp;D Center, Gyeonggi-do, Republic of Korea`,
        dateRange: "Jul. 2019 - Aug. 2019",
        subItemsHtml: [
          "Internship program sponsored by the national government",
          "Developed a framework for lightweight DNNs (i.e., quantization) using PyTorch",
        ],
      },
      {
        titleHtml: `Intern<br><a href="https://ai3.kr/" target="_blank" rel="noopener noreferrer">Chain Partners</a> (Blockchain Start-up)<br>Seoul, Republic of Korea`,
        dateRange: "May. 2018 - Sep. 2018",
        subItemsHtml: ["Research on blockchain systems", "UI/UX design for blockchain applications"],
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
          "Wrote smart contracts in C++",
          `Lectured on the <a href="https://github.com/EOSIO" target="_blank" rel="noopener noreferrer">EOSIO</a> blockchain platform`,
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
        titleHtml: `C. Park, B. Kim, <b>S. Ryu</b>, and W. Song, &ldquo;NeuroSpector: Systematic Optimization of Dataflow Scheduling in DNN Accelerators,&rdquo; <i>IEEE Transactions on Parallel and Distributed Systems (TPDS)</i>, vol. 34, no. 8, Aug. 2023, pp. 2279-2294 <a href="https://doi.org/10.1109/TPDS.2023.3283491" target="_blank" rel="noopener noreferrer">[Paper]</a> <a href="https://github.com/yonsei-icsl/neurospector" target="_blank" rel="noopener noreferrer">[Github]</a>`,
      },
      {
        titleHtml: `<b>S. Ryu</b>, &ldquo;Optimization of Reconfigurable Deep Neural Network Accelerators Using Bottom-up Mapping and Energy Prediction,&rdquo; <i>Master&rsquo;s Thesis</i>, Yonsei University, Dec. 2021. <a href="https://library.yonsei.ac.kr/search/detail/CAT000002096932" target="_blank" rel="noopener noreferrer">[Paper]</a>`,
      },
    ],
  },
  {
    id: "patents",
    heading: "Patents",
    items: [
      {
        titleHtml: `W. Song, C. Park, B. Kim, and <b>S. Ryu</b>, &ldquo;Neural Network Computing Device and Control Method Thereof,&rdquo; <i>US 17/883,010</i>, Aug. 2022. <a href="https://patents.google.com/patent/US20230042773" target="_blank" rel="noopener noreferrer">[Link]</a>`,
      },
    ],
  },
  {
    id: "certifications",
    heading: "Certifications",
    items: [
      {
        titleHtml: "Certified Derivatives Investment Advisor, Korea Financial Investment Association",
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
  {
    id: "languages",
    heading: "Languages",
    items: [{ titleHtml: "Korean (Native) &middot; English (Proficient)" }],
  },
];
