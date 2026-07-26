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
  bullets?: string[];
  partners?: string[];
  photos?: { filename: string; alt: string; date?: string }[];
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
      { label: "Top 15 US university rate", value: "70%" },
      { label: "Mentor rank", value: "Top 10 / 200+" },
    ],
    category: "Education",
    isPartTime: true,
    highlights: [
      "Co-produced Guinness World Record with Joseph Yoffee: 65,959 sandwiches in one hour with 1,000+ volunteers, donated to low-income communities in South Africa",
      "Ranked top 10 mentor out of 200+ globally, promoted to first full-time mentorship position",
      "Led webinars across EMEA offices on extracurricular leadership for US admissions",
      "Students accepted into Ivy League universities",
    ],
    bullets: [
      "Mentored 90+ students worldwide on extracurricular leadership for top US university admissions",
      "Conducted 800+ 1-on-1 sessions and produced 80+ custom capstone projects (non-profits, podcasts, Guinness Records)",
      "Ranked top 10 mentor out of 200+ globally — promoted to first full-time mentorship position",
      "Achieved 70% student placement rate into top 15 US universities",
      "Led EMEA office webinars on extracurricular strategy, reaching 150+ families",
      "Co-produced Guinness World Record with student Joseph Yoffee (now Brown University): 65,959 sandwiches in one hour with 1,000+ volunteers, donated to South Africa",
    ],
    partners: ["Brown University", "Guinness World Records", "Crimson Education"],
    photos: [],
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
      { label: "Contracts deployed", value: "5" },
      { label: "Open-source libraries used", value: "6+" },
      { label: "Network", value: "BNB Testnet" },
    ],
    category: "Solidity Developer",
    bullets: [
      "Built a token launchpad smart contract on BNB Chain — handles ERC20 token creation, static analysis, and deployment end-to-end",
      "Integrated launchpad with PancakeSwap Router and Factory to enable automated liquidity pair (LP) creation",
      "Designed and deployed 5 smart contracts on BSC Testnet using Solady and OpenZeppelin libraries",
      "Integrated MetaMask wallet with the front end using Ethers.js for EVM-compatible user interactions",
      "Participated in early-stage product architecture as the sole smart contract developer",
    ],
    partners: ["PancakeSwap", "OpenZeppelin", "Solady", "BNB Chain"],
    photos: [],
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
      { label: "Bug bounty pool", value: "$70K" },
      { label: "Audit prize pool", value: "$40K" },
      { label: "Devs attracted (month 1)", value: "500+" },
      { label: "Community built", value: "0 to 2K+" },
      { label: "Twitter growth (3 months)", value: "200 to 6K" },
      { label: "Conference leads", value: "200+" },
    ],
    category: "DevRel",
    bullets: [
      "Authored Swisstronik Docs 1.0 — contract deployment and interaction guides using Hardhat and Swisstronik.js",
      "Launched a $70K bug bounty program on Immunefi and HackenProof, attracting 500+ developers in the first month",
      "Ran public smart contract audits with a $40K prize pool to surface vulnerabilities and grow community trust",
      "Grew developer community from 0 to 2K+ by running weekly reward-based coding challenges",
      "Grew Twitter from 200 to 6K followers in 3 months by coordinating 30+ resources across Medium, Twitter, and Discord",
      "Established partnerships with LearnWeb3DAO, Cyfrin, Patrick Collins, ZKsync, ORA, Fleek, and the Interchain Foundation",
      "Hosted AMAs with 2.5K+ combined views to showcase Swisstronik features and ecosystem partners",
      "Created a developer survey proving learning resources beat monetary rewards by 31% — used to reallocate marketing budget",
      "Translated complex topics (SGX enclaves, encryption, EVM calls) into clear FAQs for devs and non-technical users",
      "Generated 200+ qualified leads across 10 global conferences",
    ],
    partners: ["Immunefi", "HackenProof", "LearnWeb3DAO", "Cyfrin", "ZKsync", "ORA", "Fleek", "Interchain Foundation"],
    photos: [
      { filename: "swisstronik1.jpg", alt: "ETHParis 2023", date: "Jul 2023" },
      { filename: "swisstronik2.jpg", alt: "EBC Barcelona 2023", date: "Oct 2023" },
      { filename: "swisstronik3.jpg", alt: "Swisstronik team", date: "2023" },
      { filename: "swisstronik4.jpg", alt: "Swisstronik community", date: "2023" },
    ],
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
      { label: "Video content", value: "10+ hrs" },
      { label: "Devs reached", value: "300+" },
      { label: "Ambassador applications", value: "250+" },
      { label: "Active ambassadors", value: "30" },
      { label: "Africa tour countries", value: "4" },
      { label: "ETH conferences", value: "8" },
    ],
    category: "DevRel",
    highlights: [
      "Led the Web3.js Africa Tour: 4 countries, 16 workshops, 500+ IRL devs, 46 projects in 1.5 months",
      "Founded Web3.js Ambassador Program: 260+ applications, 25+ ambassadors, 20+ hours of community-produced tutorials",
      "Spoke and delivered workshops at ETHDenver, ETHOxford, ETHBucharest, ETHTallinn, ETHZurich, ETHCC, MergeMadrid",
      "Won CoinsPaid hackathon track at ETHTallinn with Web3.js Payments project",
      "Created ChainSafe $10K bounty track for Decentralized Intelligence Season 2 hackathon",
    ],
    bullets: [
      "Developed 10+ hours of educational video content and live workshops, reaching 300+ developers",
      "Revamped web3.js API documentation, adding 10+ tutorials and code samples to improve developer experience",
      "Founded and led the Web3.js Ambassador Program: 250+ applications, 30 active ambassadors across Togo, Berlin, Nigeria, Colombia, India, and Norway",
      "Led the Web3.js Africa Tour: 4 countries, 16 workshops, 500+ developers, 46 projects submitted in 6 weeks",
      "Raised tour hackathon bounties from $3K to $12K by securing sponsorships from ZKsync, ORA, Fleek, and Swisstronik",
      "Spoke and facilitated workshops at 8 major ETH conferences: ETHDenver, ETHCC, ETHOxford, ETHZurich, ETHTallinn, ETHBucharest, ETHSafari, MergeMadrid",
      "Won ETHTallinn hackathon with web3.js payments plugin",
      "Maintained less than 24-hour response time on GitHub issues and Discord developer support",
      "Built 5 web3.js plugins: MetaMask, Chronicle, gas fees, RPC, and payments",
      "Gathered structured user feedback to meet Ethereum Foundation grant renewal requirements",
    ],
    partners: ["ZKsync", "ORA", "Fleek", "Swisstronik", "OpenZeppelin", "Superfluid", "Ethereum Foundation", "AyaHQ"],
    photos: [
      { filename: "chainsafe1.jpg", alt: "ETHDenver 2024", date: "Feb 2024" },
      { filename: "chainsafe2.jpg", alt: "Web3.js Africa Tour", date: "Aug-Oct 2024" },
      { filename: "chainsafe3.jpg", alt: "ETHTallinn hackathon win", date: "Sep 2024" },
      { filename: "chainsafe4.jpg", alt: "ETHCC Paris workshop", date: "Jul 2024" },
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
    role: "Global Developer Advocate",
    period: { start: "Nov 2024", end: "May 2026" },
    description:
      "Global Developer Advocate for Lisk, an Ethereum L2 focused on emerging markets. Building developer tooling, running workshops across LATAM and Africa, and growing the builder community.",
    metrics: [
      { label: "Budget managed", value: "$100K+" },
      { label: "Countries covered", value: "7" },
      { label: "ETHiopia Residency builders", value: "57" },
      { label: "Patagonia Residency founders", value: "17" },
      { label: "EFDevcon Buenos Aires", value: "508 attendees" },
    ],
    category: "DevRel",
    bullets: [
      "Built and led a global DevRel team: 6 advocates in Africa, 1 in LATAM, overseeing $100K+ regional budget",
      "Directed the ETHiopia Builders Residency (Addis Ababa, Jan-Feb 2025): 57 builders, 8 African countries, 28 projects in 21 days",
      "Led the Lisk Emerging Markets Founders Residency at Edge City Patagonia (Nov 2025): 17 founders, 8 mentors, 4 weeks",
      "Led 2 Africa tours across 7 countries with developer workshops, founder talks, and ecosystem activations for 1K+ attendees",
      "Managed AyaHQ Roadshow across Uganda, Rwanda, and Kenya to activate Lisk's East Africa developer community",
      "Led Lisk's entry into LATAM via partnerships with Crecimiento Argentina, Rayuela startup program, and Edge City",
      "Produced EFDevcon Buenos Aires side event: 508 attendees, startup pitch day — 5 of 10 startups advanced to CV Labs incubation",
      "Created storytelling content showcasing real founder journeys to position Lisk as the leading L2 in emerging markets",
      "Hosted hackathons and buildathons with 100+ project submissions and organized demo days with 50+ attendees",
      "Oversaw EMpower Fund ($15M) ecosystem narrative and communications in emerging markets",
    ],
    partners: ["AyaHQ", "Web3Bridge", "Web3Clubs", "CV Labs", "Crecimiento", "Edge City", "Rayuela", "Decentracode"],
    photos: [
      { filename: "lisk1.jpg", alt: "ETHiopia Residency Addis Ababa", date: "Jan-Feb 2025" },
      { filename: "lisk2.jpg", alt: "Africa Tour 2025", date: "Jul-Sep 2025" },
      { filename: "lisk3.jpg", alt: "Patagonia Founders Residency", date: "Nov 2025" },
      { filename: "lisk4.jpg", alt: "EFDevcon Buenos Aires", date: "Nov 2024" },
    ],
    links: [
      { label: "Lisk.com", url: "https://lisk.com" },
    ],
  },
  {
    id: "golem-arkiv",
    year: 2026,
    company: "Arkiv (Golem Factory)",
    companyUrl: "https://arkiv.network",
    role: "Sr. Developer Relations",
    period: { start: "Jun 2026", end: "Present" },
    description:
      "Senior Developer Relations for Arkiv, the Web3 database: an Ethereum-aligned DB-Chain where data lives as queryable, time-scoped entities. Building the AI-native onboarding path (MCP server, docs, telemetry), publishing the open-source tooling around the SDK, stress-testing the chain itself, and contributing the developer-facing surfaces of the official builder hub.",
    metrics: [
      { label: "Open-source npm libraries", value: "2" },
      { label: "Live MCP servers", value: "2" },
      { label: "Ecosystem projects curated", value: "124 → 104" },
      { label: "Consensus-halting bug caught", value: "1" },
      { label: "ETHGlobal Lisbon 2026 build", value: "SureX" },
    ],
    category: "Current",
    bullets: [
      "Caught a consensus-halting flaw in Arkiv's L3 before any external builder hit it: adversarial load testing produced a block that exceeded the consensus replication limit and froze the chain for ~12h. Reported it with a clean reproduction and verified the team's fix on a locally built devnet",
      "Made the Web3 database adoptable from any AI client: shipped a production-hardened, security-audited MCP server (local + hosted over HTTP), a docs site, and a privacy-preserving telemetry layer designed to measure first successful query rather than sign-ups",
      "Published arkiv-sync on npm: an open-source EVM to Arkiv event indexer (library + scaffolder + agent skill + live demo) that survives reorgs, is idempotent, resumes from a cursor, and batches its writes",
      "Published arkiv-graph on npm: a library + live showcase that renders a running Arkiv database as an interactive graph with writes signed by the visitor's own wallet, no server key involved",
      "Turned 124 hackathon submissions into the 104-project ecosystem showcase developers browse today, via a multi-agent audit pipeline that verified real product usage repo by repo; contributed the developer-facing surfaces of the official builder hub",
      "Built SureX at ETHGlobal Lisbon 2026: a trust registry for MCP servers plus a Claude Code gate that halts a flagged tool call and hands the decision to a human, with reviews running on a self-hosted NVIDIA DGX",
      "Ran the product's live event surfaces: an interactive booth app for ETHPragma Lisbon where every tap exercises a real Arkiv capability against a live testnet, and the developer landing for the company Ideathon",
      "Shipped a remote MCP hackathon copilot for the team ahead of ETHGlobal Lisbon: a multi-model-researched knowledge base of all 8 sponsors, queryable from any LLM client",
      "Fed engineering what only a DevRel sitting in the SDK can see: reproducible friction logs with repro commands and version numbers, delivered as an actionable document per team",
    ],
    partners: ["ETHGlobal", "Sourcify", "ENS", "World", "Sui", "Walrus"],
    photos: [
      { filename: "arkiv1.jpg", alt: "SureX team at ETHGlobal Lisbon 2026", date: "Jul 2026" },
      { filename: "arkiv2.jpg", alt: "Arkiv booth at ETHPragma Lisbon", date: "Jul 2026" },
      { filename: "arkiv3.jpg", alt: "Arkiv team", date: "2026" },
    ],
    links: [
      { label: "Arkiv.network", url: "https://arkiv.network" },
      { label: "Arkiv Builder Hub", url: "https://arkiv-hub.vercel.app" },
      { label: "arkiv-sync on npm", url: "https://www.npmjs.com/package/arkiv-sync" },
      { label: "arkiv-graph on npm", url: "https://www.npmjs.com/package/arkiv-graph" },
    ],
  },
];
