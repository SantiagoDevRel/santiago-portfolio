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
}

export const projects: Project[] = [
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
  },
];
