// Portfolio project data — all projects displayed on /built and the home page.
// To add a new project, add a new object to the `projects` array following the Project interface.

export interface Project {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  role: string;
  period: { start: string; end: string };
  location: string;
  category: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  links: { label: string; url: string }[];
  highlights: string[];
  imageUrl?: string | null;
  featured?: boolean;
  icon?: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  status?: "live" | "open-source" | "hackathon";
}

export const projects: Project[] = [
  // ── Featured AI projects (top 5) ──
  {
    id: "prompt-lab-2026",
    title: "Prompt Lab",
    company: "Independent",
    companyUrl: "https://langfuse-app.vercel.app",
    role: "Builder",
    period: { start: "2026", end: "2026" },
    location: "Remote",
    category: "AI App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Claude API", "Supabase", "Vercel"],
    description:
      "A prompt testing and optimization tool for developers. Run prompts against Claude, get AI-powered evaluations with scores across 4 dimensions (instruction following, conciseness, clarity, prompt efficiency), and track improvements across iterations with actionable tips.",
    metrics: [
      { label: "Eval Dimensions", value: "4" },
      { label: "API Calls/Run", value: "2" },
    ],
    links: [
      { label: "Live App", url: "https://langfuse-app.vercel.app" },
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/langfuse-app" },
    ],
    highlights: [
      "Dual Claude API calls per run: main response + automated evaluation",
      "4-dimension scoring with animated score bars and progression tracking",
      "Session-based workflow to iterate and improve prompts over time",
      "Dark 'Obsidian Laboratory' UI with Syne, DM Mono, and JetBrains Mono fonts",
    ],
    featured: true,
    icon: "FlaskConical",
    liveUrl: "https://langfuse-app.vercel.app",
    githubUrl: "https://github.com/SantiagoDevRel/langfuse-app",
    status: "live",
  },
  {
    id: "santiagos-world-2026",
    title: "Santiago's World",
    company: "Independent",
    companyUrl: "https://santiagos-world.vercel.app",
    role: "Builder",
    period: { start: "2026", end: "2026" },
    location: "Remote",
    category: "AI App",
    tags: ["Next.js", "TypeScript", "Google Maps API", "Claude API", "PWA", "IndexedDB", "Vercel"],
    description:
      "A personal interactive life map and AI city guide built as a PWA. Pins every city visited on a Google Maps globe, stores them locally on the device via IndexedDB, and includes a Claude-powered AI assistant that gives personalized city guides based on travel history.",
    metrics: [],
    links: [
      { label: "Live App", url: "https://santiagos-world.vercel.app" },
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/santiagos-world" },
    ],
    highlights: [
      "PWA installable on mobile like a native app",
      "Offline-first with IndexedDB for local data storage",
      "Claude-powered AI city guide with personalized recommendations",
      "Interactive Google Maps globe with all visited cities",
    ],
    featured: true,
    icon: "Globe",
    liveUrl: "https://santiagos-world.vercel.app",
    githubUrl: "https://github.com/SantiagoDevRel/santiagos-world",
    status: "live",
  },
  {
    id: "stellar-token-studio-2026",
    title: "Stellar Token Studio",
    company: "Independent",
    companyUrl: "https://stellar-studio-pi.vercel.app",
    role: "Builder",
    period: { start: "2026", end: "2026" },
    location: "Remote",
    category: "AI App",
    tags: ["Vanilla JS", "Stellar SDK", "Claude API", "Vercel", "Serverless", "Blockchain", "AI"],
    description:
      "A no-code token creation wizard for the Stellar blockchain. Uses the Claude API as a conversational AI wizard that guides users step by step through creating, configuring, and deploying a Stellar token, no blockchain knowledge required.",
    metrics: [],
    links: [
      { label: "Live App", url: "https://stellar-studio-pi.vercel.app" },
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/stellar-studio" },
    ],
    highlights: [
      "Conversational AI wizard powered by Claude API for guided token creation",
      "No blockchain knowledge required to create and deploy Stellar tokens",
      "Vercel serverless functions to keep API keys secure server-side",
      "Built with Vanilla JS and Stellar SDK v11",
    ],
    featured: true,
    icon: "Star",
    liveUrl: "https://stellar-studio-pi.vercel.app",
    githubUrl: "https://github.com/SantiagoDevRel/stellar-studio",
    status: "live",
  },
  {
    id: "rag-citations-2026",
    title: "RAG with Citations",
    company: "Independent",
    companyUrl: "https://rag-citations.vercel.app",
    role: "Builder",
    period: { start: "2026", end: "2026" },
    location: "Remote",
    category: "AI App",
    tags: ["Next.js", "TypeScript", "Claude API", "TF-IDF", "BM25", "Voyage AI", "RAG", "Vercel"],
    description:
      "A Retrieval-Augmented Generation demo app that answers questions about any pasted document and shows cited sources. Supports three retrieval methods: TF-IDF, BM25, and vector search via Voyage AI embeddings, with a side-by-side score explorer to compare how each method ranks chunks.",
    metrics: [],
    links: [
      { label: "Live App", url: "https://rag-citations.vercel.app" },
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/rag-citations" },
    ],
    highlights: [
      "Three retrieval methods: TF-IDF, BM25 keyword scoring, and Voyage AI vector embeddings",
      "Claude-powered Q&A with strict grounding — answers only from provided document chunks",
      "Interactive chunk explorer with keyword highlighting and per-chunk match counts",
      "Score explorer visualizes how each retrieval method ranks every chunk",
      "Markdown stripping for clean display of technical documents",
    ],
    featured: true,
    icon: "FileSearch",
    liveUrl: "https://rag-citations.vercel.app",
    githubUrl: "https://github.com/SantiagoDevRel/rag-citations",
    status: "live",
  },
  {
    id: "lifi-dca-agent-2026",
    title: "LI.FI DCA Agent",
    company: "Independent",
    companyUrl: "https://github.com/SantiagoDevRel/lifi-dca-agent",
    role: "Builder",
    period: { start: "2026", end: "2026" },
    location: "Remote",
    category: "AI Agent",
    tags: ["AI Agent", "TypeScript", "Next.js", "LI.FI", "Cross-chain", "DeFi", "Claude API"],
    description:
      "An AI-powered DCA (Dollar-Cost Averaging) agent built on top of the LI.FI protocol for cross-chain token swaps and bridging. The agent accepts natural language commands to schedule recurring cross-chain swaps, removing the need to manually interact with DeFi interfaces.",
    metrics: [],
    links: [
      { label: "Live App", url: "https://lifi-dca-agent.up.railway.app" },
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/lifi-dca-agent" },
    ],
    highlights: [
      "Natural language commands to schedule recurring cross-chain DCA swaps",
      "Built on LI.FI protocol for cross-chain token swaps and bridging",
      "Powered by Claude API for conversational DeFi interactions",
    ],
    featured: true,
    icon: "Bot",
    liveUrl: "https://lifi-dca-agent.up.railway.app",
    githubUrl: "https://github.com/SantiagoDevRel/lifi-dca-agent",
    status: "live",
  },

  // ── Existing projects ──
  {
    id: "libertum-launchpad",
    title: "Libertum Token Launchpad",
    company: "Libertum Project",
    companyUrl: "https://libertum.io",
    role: "Solidity Developer",
    period: { start: "Oct 2022", end: "Jan 2023" },
    location: "Dubai, UAE (Remote)",
    category: "Smart Contract",
    tags: ["Solidity", "BNB Chain", "PancakeSwap", "Hardhat", "DeFi", "RWA"],
    description:
      "Token launchpad smart contract on BNB Chain for Libertum, a Real-World Asset tokenization platform. Handles fundraising rounds in USDT, automates revenue-sharing among partners, and integrates with PancakeSwap to add liquidity on round completion.",
    metrics: [
      { label: "Commits", value: "73" },
      { label: "Contracts built", value: "5" },
      { label: "Chain", value: "BNB Testnet" },
      { label: "Community (2026)", value: "30K+" },
    ],
    links: [
      { label: "GitHub (73 commits)", url: "https://github.com/SantiagoDevRel/Libertum/commits/main/" },
      { label: "Launchpad.sol Source", url: "https://github.com/SantiagoDevRel/Libertum/blob/main/contracts/Launchpad.sol" },
      { label: "BSCTestnet Contract", url: "https://testnet.bscscan.com/address/0x3A324e9D7D85Fa035aecc7c74c026d46db31F4AA" },
      { label: "Libertum.io", url: "https://libertum.io" },
    ],
    highlights: [
      "Built core Launchpad.sol handling end-to-end fundraising and token sale logic",
      "Integrated PancakeSwap router for automatic liquidity pool creation post-raise",
      "Automated revenue-sharing distribution to multiple partner addresses",
      "Deployed and verified on BSC Testnet — 73 commits showing full dev history",
      "Libertum grew into a full RWA platform with 30K+ community members by 2026",
    ],
    icon: "Building2",
    liveUrl: null,
    githubUrl: "https://github.com/SantiagoDevRel/Libertum/commits/main/",
    status: "open-source",
  },
  {
    id: "blextick-ethforall-2023",
    title: "Blextick",
    company: "Independent",
    companyUrl: "https://devfolio.co",
    role: "Solidity Developer",
    period: { start: "Jan 2023", end: "Feb 2023" },
    location: "Remote",
    category: "Smart Contract",
    tags: ["Solidity", "Polygon ID", "ZKP", "NFT", "Hardhat", "React"],
    description:
      "ZKP-powered NFT ticketing platform built at ETHForAll Hackathon. Solves event fraud using Polygon ID for sybil-resistant identity verification without exposing personal data.",
    metrics: [
      { label: "Team", value: "5 people" },
      { label: "Hackathon", value: "ETHForAll by Devfolio" },
      { label: "Chain", value: "Polygon Mumbai" },
    ],
    highlights: [
      "BlextickPass enforces 1 verified wallet per user via Polygon ID ZKP credentials",
      "BlextickPlus allows anonymous preference sharing in exchange for rewards",
      "Event Factory Contract lets organizers deploy verified NFT ticket sales on-chain",
      "Solves whale accumulation, scalping, and fake identity issues in event ticketing",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/SantiagoDevRel/DevFolio-ETH-For-All" },
      { label: "OpenSea Testnet Collection", url: "https://testnets.opensea.io/es/collection/blextick" },
    ],
    imageUrl: "/images/events/blextick.jpeg",
    icon: "Ticket",
    liveUrl: null,
    githubUrl: "https://github.com/SantiagoDevRel/DevFolio-ETH-For-All",
    status: "hackathon",
  },
  {
    id: "hyperdao-ethglobal-paris-2023",
    title: "HyperDAO",
    company: "Independent",
    companyUrl: "https://ethglobal.com",
    role: "Solidity Developer",
    period: { start: "Jul 2023", end: "Jul 2023" },
    location: "Paris, France",
    category: "Smart Contract",
    tags: ["Solidity", "Hyperlane", "DAO", "Cross-chain", "Hardhat", "JavaScript"],
    description:
      "Cross-chain governance protocol built at ETHGlobal Paris. Users holding tokens on any chain can vote in DAOs deployed on another chain with no manual bridging required.",
    metrics: [
      { label: "Hackathon", value: "ETHGlobal Paris 2023" },
      { label: "Chains", value: "Mumbai + Sepolia" },
      { label: "Protocol", value: "Hyperlane" },
    ],
    highlights: [
      "HypERC20 tokens on any chain serve as cross-chain DAO membership credentials",
      "Hyperlane interchain messaging enables voting across chains without bridging",
      "Live DAO contracts with proposal creation, voting, and execution on two chains",
      "Solves fragmented governance where DAO participation is locked to a single chain",
    ],
    links: [
      { label: "ETHGlobal Showcase", url: "https://ethglobal.com/showcase/hyperdao-kw6mv" },
    ],
    imageUrl: "/images/events/eth_global_hyperdao.png",
    icon: "GitBranch",
    liveUrl: null,
    githubUrl: null,
    status: "hackathon",
  },
  {
    id: "web3js-payments-ethtallinn",
    title: "Web3.js Payments",
    company: "ETHTallinn Hackathon",
    companyUrl: "https://ethtallinn2024.devfolio.co",
    role: "Hackathon Winner",
    period: { start: "Apr 2024", end: "Apr 2024" },
    location: "Tallinn, Estonia",
    category: "Hackathon",
    tags: ["Web3.js", "TypeScript", "CoinsPaid", "Ethereum", "Payments"],
    description:
      "Won the CoinsPaid hackathon track at ETHTallinn 2024. Built a Web3.js plugin for simplified crypto payment flows, showcasing the plugin architecture for real-world payment use cases.",
    metrics: [
      { label: "Result", value: "1st place" },
      { label: "Track", value: "CoinsPaid" },
      { label: "Event", value: "ETHTallinn 2024" },
    ],
    highlights: [
      "Won CoinsPaid hackathon track at first Ethereum hackathon in the Baltics",
      "Built Web3.js plugin for streamlined crypto payment integration",
      "Demonstrated real-world Web3.js plugin architecture",
    ],
    links: [
      { label: "Hackathon Project", url: "https://devfolio.co/projects/webjs-payments-7d6c" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=hNASAlw8Hn4" },
    ],
    icon: "Zap",
    liveUrl: null,
    githubUrl: null,
    status: "hackathon",
  },
];
