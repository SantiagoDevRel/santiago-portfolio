// Career timeline data — single source of truth for both the homepage CareerTimeline
// and the /projects ProjectTimeline components.
// Years with multiple entries should each have their own object with the same year value.
// Adding a new entry here automatically updates both timeline views.

export type CareerCategory = "Education" | "Solidity Developer" | "DevRel" | "Founder" | "Current";

export interface CareerEntry {
  id: string;
  year: number;
  company: string;
  companyUrl: string;
  role: string;
  period: { start: string; end: string };
  description: string;
  metrics: { label: string; value: string }[];
  category: CareerCategory;
  highlights?: string[];
  isPartTime?: boolean;
  links: { label: string; url: string }[];
}

export const career: CareerEntry[] = [
  {
    id: "crimson-education-2021",
    year: 2021,
    company: "Crimson Education",
    companyUrl: "https://www.crimsoneducation.org",
    role: "Senior Client-Mentor Specialist",
    period: { start: "Mar 2021", end: "Mar 2023" },
    description:
      "Mentored 90+ students worldwide to build extracurricular leadership profiles for top US university admissions. Ranked top 10 mentor out of 200+. Conducted 800+ sessions and co-produced a Guinness World Record with student Joseph Yoffee (now at Brown University).",
    metrics: [
      { label: "Students mentored", value: "90+" },
      { label: "Sessions conducted", value: "800+" },
      { label: "ECL projects", value: "80+" },
      { label: "Mentor ranking", value: "Top 10 / 200+" },
    ],
    category: "Education",
    isPartTime: true,
    highlights: [
      "Co-produced Guinness World Record with Joseph Yoffee: 65,959 sandwiches in one hour with 1,000+ volunteers, donated to low-income communities in South Africa",
      "Ranked top 10 mentor out of 200+ globally, promoted to first full-time mentorship position",
      "Led webinars across EMEA offices on extracurricular leadership for US admissions",
      "Students accepted into Ivy League universities",
    ],
    links: [
      { label: "Guinness World Record", url: "https://www.guinnessworldrecords.com/world-records/most-sandwiches-made-in-one-hour" },
      { label: "Crimson Education", url: "https://www.crimsoneducation.org" },
    ],
  },
  {
    id: "libertum",
    year: 2022,
    company: "Libertum Project",
    companyUrl: "https://libertum.io",
    role: "Solidity Developer",
    period: { start: "Oct 2022", end: "Jan 2023" },
    description:
      "First professional Solidity role. Built a token launchpad smart contract on BNB Chain with PancakeSwap integration for automated liquidity pool creation.",
    metrics: [
      { label: "Commits", value: "73" },
      { label: "Contracts", value: "5" },
      { label: "Chain", value: "BNB Testnet" },
    ],
    category: "Solidity Developer",
    links: [
      {
        label: "GitHub (73 commits)",
        url: "https://github.com/SantiagoDevRel/Libertum/commits/main/",
      },
      {
        label: "Launchpad.sol Source",
        url: "https://github.com/SantiagoDevRel/Libertum/blob/main/contracts/Launchpad.sol",
      },
      {
        label: "BSCTestnet Contract",
        url: "https://testnet.bscscan.com/address/0x3A324e9D7D85Fa035aecc7c74c026d46db31F4AA",
      },
      { label: "Libertum.io", url: "https://libertum.io" },
    ],
  },
  {
    id: "swisstronik",
    year: 2023,
    company: "Swisstronik",
    companyUrl: "https://swisstronik.com",
    role: "Developer Relations Engineer",
    period: { start: "Jan 2023", end: "Nov 2023" },
    description:
      "DevRel for a privacy-focused L1 blockchain. Created developer documentation, tutorials, and onboarded builders to the Swisstronik ecosystem.",
    metrics: [
      { label: "Tutorials", value: "12+" },
      { label: "Devs onboarded", value: "200+" },
      { label: "Chain", value: "Swisstronik L1" },
    ],
    category: "DevRel",
    links: [
      { label: "Swisstronik.com", url: "https://swisstronik.com" },
    ],
  },
  {
    id: "chainsafe-web3js",
    year: 2023,
    company: "ChainSafe – Web3.js",
    companyUrl: "https://chainsafe.io",
    role: "Developer Relations Engineer",
    period: { start: "Nov 2023", end: "Nov 2024" },
    description:
      "DevRel for Web3.js, the most widely used Ethereum JavaScript library. Drove adoption of v4, created migration guides, and supported the open-source community.",
    metrics: [
      { label: "npm downloads/wk", value: "500K+" },
      { label: "GitHub stars", value: "19K+" },
      { label: "Migration guides", value: "5" },
    ],
    category: "DevRel",
    highlights: [
      "Led the Web3.js Africa Tour: 4 countries, 16 workshops, 500+ IRL devs, 46 projects in 1.5 months",
      "Founded Web3.js Ambassador Program: 260+ applications, 25+ ambassadors, 20+ hours of community-produced tutorials",
      "Spoke and delivered workshops at ETHDenver, ETHOxford, ETHBucharest, ETHTallinn, ETHZurich, ETHCC, MergeMadrid",
      "Won CoinsPaid hackathon track at ETHTallinn with Web3.js Payments project",
      "Created ChainSafe $10K bounty track for Decentralized Intelligence Season 2 hackathon",
    ],
    links: [
      { label: "ChainSafe.io", url: "https://chainsafe.io" },
    ],
  },
  {
    id: "lisk",
    year: 2024,
    company: "Lisk / Onchain Foundation",
    companyUrl: "https://lisk.com",
    role: "Developer Advocate",
    period: { start: "Nov 2024", end: "Present" },
    description:
      "Developer Advocate for Lisk, an Ethereum L2 focused on emerging markets. Building developer tooling, running workshops across LATAM and Africa, and growing the builder community.",
    metrics: [
      { label: "Workshops", value: "10+" },
      { label: "Countries", value: "8" },
      { label: "Chain", value: "Lisk L2" },
    ],
    category: "Current",
    links: [
      { label: "Lisk.com", url: "https://lisk.com" },
    ],
  },
];
