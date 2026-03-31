// Education content data — videos, tutorials, challenges, mini-courses, docs, talks.
// To add new content, add an object to the `education` array following the EducationEntry type.
// Entries with featured: true appear on the homepage preview.

export type EducationCategory = "Video" | "Challenge" | "Documentation" | "Research";

export interface EducationEntry {
  id: string;
  title: string;
  company: string;
  platform: string;
  category: EducationCategory;
  date: string;
  description: string;
  links: { label: string; url: string }[];
  imageUrl: string | null;
  featured: boolean;
}

export const education: EducationEntry[] = [
  {
    id: "swisstronik-challenges-learnweb3",
    title: "Swisstronik Developer Challenges and Mini-course",
    company: "Swisstronik",
    platform: "LearnWeb3",
    category: "Challenge",
    date: "Aug 2023",
    description: "Coding challenge with bounty rewards and a full intro mini-course to onboard developers into Swisstronik.",
    links: [
      { label: "Challenge #1", url: "https://learnweb3.io/bounties/swisstronik-challenge-1/" },
      { label: "Mini-course", url: "https://learnweb3.io/minis/introduction-to-swisstronik/" },
      { label: "Swisstronik on LearnWeb3", url: "https://learnweb3.io/u/Swisstronik/" },
      { label: "LinkedIn post", url: "https://www.linkedin.com/posts/santiagodevrel_do-you-like-to-challenge-your-and-coding-activity-7097918631396696064-AMfi/" },
    ],
    imageUrl: "/images/events/swisstronik_2023.jpg",
    featured: true,
  },
  {
    id: "swisstronik-dev-survey-2023",
    title: "Developer Preferences Survey",
    company: "Swisstronik",
    platform: "LinkedIn",
    category: "Research",
    date: "Jun 2023",
    description:
      "Ran a developer survey across LinkedIn before spending a $10K community budget. Key finding: devs value learning resources 31% more than monetary rewards — directly shaped Swisstronik's community strategy.",
    links: [],
    imageUrl: null,
    featured: true,
  },
  {
    id: "swisstronik-secure-transactions-video",
    title: "Secure Your dApp Transactions with SwisstronikJS",
    company: "Swisstronik",
    platform: "YouTube",
    category: "Video",
    date: "Oct 2023",
    description:
      "Deep dive into secure transactions on Swisstronik. Covers Ethereum transaction objects and encryption in the data field using the SwisstronikJS SDK.",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=EaLZC_LnNng" },
      { label: "LinkedIn post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7126193136736886784/" },
    ],
    imageUrl: "/images/events/swisstronik_video_1.jpg",
    featured: false,
  },
  {
    id: "swisstronik-deploy-erc20-video",
    title: "Deploy ERC20 in Swisstronik Step by Step",
    company: "Swisstronik",
    platform: "YouTube",
    category: "Video",
    date: "Nov 2023",
    description:
      "Step by step tutorial for deploying an ERC20 token contract on Swisstronik using Hardhat and SwisstronikJS.",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=Assxdj-bUzQ" },
      { label: "LinkedIn post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7132433750809849856/" },
    ],
    imageUrl: "/images/events/swisstronik_video_2.jpg",
    featured: false,
  },
  {
    id: "web3js-video-series-2024",
    title: "Web3.js v4 Getting Started Series",
    company: "ChainSafe",
    platform: "YouTube",
    category: "Video",
    date: "2024",
    description: "4-part video series covering Web3.js v4 from basics to Ethereum transactions, wallet accounts, and Chainlink data feed integrations.",
    links: [
      { label: "Ep 1: Getting started with Web3.js v4", url: "https://www.youtube.com/watch?v=BQ_bDH91S4k" },
      { label: "Ep 2: Mastering Web3.js utilities", url: "https://www.youtube.com/watch?v=fmwwzVCETh0" },
      { label: "Ep 3: Sending Ethereum transactions", url: "https://www.youtube.com/watch?v=szYBBuyUEWk" },
      { label: "Ep 4: Interacting with Chainlink Data Feed", url: "https://www.youtube.com/watch?v=iF_O7ggQaQw" },
    ],
    imageUrl: "/images/events/web3js_series.png",
    featured: true,
  },
  {
    id: "web3js-docs-2024",
    title: "Web3.js v4 Documentation and Guides",
    company: "ChainSafe",
    platform: "docs.web3js.org",
    category: "Documentation",
    date: "2024",
    description: "Revamped Web3.js API documentation. Added 10+ tutorials and code samples to improve developer experience and ease onboarding.",
    links: [
      { label: "Web3.js Docs", url: "https://docs.web3js.org" },
    ],
    imageUrl: "/images/events/docs.png",
    featured: true,
  },
  {
    id: "web3js-ambassador-program-2024",
    title: "Web3.js Ambassador Program",
    company: "ChainSafe",
    platform: "YouTube",
    category: "Video",
    date: "Apr – Oct 2024",
    description: "Founded and led the Web3.js Ambassador Program. 260+ applications, 25+ active ambassadors delivering workshops in Togo, Berlin, Nigeria, Colombia, Mexico, India, Norway. Produced 20+ hours of tutorials in English, French, Spanish, and more.",
    links: [
      { label: "Apply form", url: "https://docs.google.com/forms/d/e/1FAIpQLSc_dPjfoy_YnHXi12V-plFXRxZowtOtPOLBafMz7DKXsvo5Sw/viewform" },
      { label: "Program update", url: "https://www.linkedin.com/feed/update/urn:li:activity:7239165877957349376/" },
      { label: "Ambassador video 1", url: "https://youtu.be/2GdfxUL4siA" },
      { label: "Ambassador video 2", url: "https://www.youtube.com/watch?v=nWRC-xsMW9A" },
      { label: "Ambassador video 3", url: "https://youtu.be/VkeaBRyUkes" },
      { label: "Ambassador video 4", url: "https://youtu.be/MYjdFSyl_7E" },
      { label: "Ambassador video 5", url: "https://youtu.be/1H1hk3mTwQI" },
      { label: "Ambassador video 6", url: "https://www.youtube.com/watch?v=1RBoioBlYws" },
      { label: "Ambassador video 7", url: "https://www.youtube.com/watch?v=6WifRWbImP4" },
      { label: "Ambassador video 8", url: "https://www.youtube.com/watch?v=A6PUNPI8c4U" },
      { label: "Ambassador video 9", url: "https://www.youtube.com/watch?v=XwgMWQzINEI" },
      { label: "Ambassador video 10", url: "https://www.youtube.com/watch?v=3VjqR8yujV8" },
      { label: "Ambassador video 11", url: "https://www.youtube.com/watch?v=pmcgrU_p3o4" },
      { label: "Ambassador video 12", url: "https://www.youtube.com/watch?v=8PYChMsRE2E" },
      { label: "Ambassador video 13", url: "https://youtu.be/d1JiubKV5_U" },
      { label: "Ambassador video 14", url: "https://youtu.be/Vk08iHVCUw8" },
      { label: "Ambassador video 15", url: "https://youtu.be/b_BBI0totBM" },
    ],
    imageUrl: "/images/events/web3js_ambassadors.jpg",
    featured: true,
  },
  {
    id: "web3js-coffee-chats-2024",
    title: "Web3.js Ambassador Coffee Chats",
    company: "ChainSafe",
    platform: "YouTube",
    category: "Video",
    date: "2024",
    description: "Bi-weekly coffee chats with industry experts including OpenZeppelin and Superfluid. Gave ambassadors direct access to senior ecosystem builders.",
    links: [
      { label: "Coffee chat 1", url: "https://www.youtube.com/watch?v=dut2bWy5DcY" },
      { label: "Coffee chat 2", url: "https://www.youtube.com/watch?v=IWiWUmqwLgE" },
      { label: "Coffee chat 3", url: "https://youtu.be/aO3z6NLJ1ZU" },
      { label: "Coffee chat 4", url: "https://youtu.be/8A7j5xvui9A" },
      { label: "Coffee chat 5", url: "https://youtu.be/ogYua8OQlCI" },
    ],
    imageUrl: "/images/events/coffeee.png",
    featured: false,
  },
  {
    id: "chainsafe-hackathon-track-2024",
    title: "ChainSafe Web3.js Hackathon Track",
    company: "ChainSafe",
    platform: "LearnWeb3",
    category: "Challenge",
    date: "2024",
    description: "Created and ran the ChainSafe bounty track for the Decentralized Intelligence Season 2 hackathon. Two prize categories: Ideathon (plugin ideas, $3K) and Buidlathon (built plugins, $7K).",
    links: [
      { label: "Hackathon bounty page", url: "https://learnweb3.io/hackathons/decentralized-intelligence-season-2/prizes/" },
    ],
    imageUrl: "/images/events/hackathon.jpg",
    featured: false,
  },
  {
    id: "swisstronik-docs-gitbook",
    title: "Swisstronik Developer Documentation",
    company: "Swisstronik",
    platform: "GitBook",
    category: "Documentation",
    date: "Jan 2023",
    description:
      "Wrote the full Swisstronik docs covering SwisstronikJS, Intel SGX, and an Ethereum vs. Swisstronik comparison. Code samples for beginner to advanced developers, used by 500+ devs.",
    links: [
      { label: "Read the docs", url: "https://docs.swisstronik.com/swisstronik-docs" },
    ],
    imageUrl: "/images/events/swtr_logo.jpg",
    featured: true,
  },
  {
    id: "dezentralized-voices-interview-2024",
    title: "Dezentralized Voices: What Does DevRel Do in Web3?",
    company: "ChainSafe",
    platform: "YouTube",
    category: "Video",
    date: "Aug 2024",
    description: "Interview covering the Web3 DevRel career path, building a developer network from scratch, and the state of Ethereum communities in Europe, Colombia, and Africa.",
    links: [
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=AhztCHKj4SM" },
      { label: "LinkedIn post", url: "https://www.linkedin.com/posts/dariastrategy_what-does-devrel-do-in-web3-santiago-ugcPost-7227058777194209282-euZF/" },
    ],
    imageUrl: "/images/events/dezentralized_voices.png",
    featured: true,
  },
  {
    id: "ech-ecosystem-demo-2024",
    title: "Ethereum Cat Herders: Web3.js Ecosystem Project Demo",
    company: "ChainSafe",
    platform: "YouTube",
    category: "Video",
    date: "2024",
    description: "Live demo of the Web3.js Ambassador Program for the Ethereum Cat Herders Ecosystem Project Demo series with Pooja Ranjan. Covered Web3.js from zero to hero, community outreach, and the future of Web3.js with Layer 2 solutions.",
    links: [
      { label: "Watch: EPD #13", url: "https://www.youtube.com/watch?v=GFfosJ1r01Y" },
    ],
    imageUrl: "/images/events/eth_cat.jpg",
    featured: false,
  },
  {
    id: "web3js-gitpoaps-2024",
    title: "Web3.js GitPOAPs",
    company: "ChainSafe",
    platform: "GitPOAP",
    category: "Research",
    date: "2024",
    description: "Created GitPOAPs to reward and encourage hackathon participation, video creation, and open source contributions to Web3.js. 48 total holders.",
    links: [
      { label: "View GitPOAPs", url: "https://www.gitpoap.io/gh/web3" },
    ],
    imageUrl: "/images/events/web3_poaps.png",
    featured: false,
  },
];
