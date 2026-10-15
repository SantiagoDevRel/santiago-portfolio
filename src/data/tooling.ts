// Tooling data — developer tools on /tooling with their metrics, screenshots and walkthrough videos.
// Numbers come from the private MCP telemetry dashboard, GitHub traffic and the npm registry (see SNAPSHOT_DATE).

import { Media, screenshots, videos } from "@/data/media";

export interface Tool {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  stats: { value: string; label: string }[];
  points: string[];
  media: Media[];
  links: { label: string; url: string }[];
}

export const tools: Tool[] = [
  {
    id: "arkiv-mcp",
    title: "Arkiv MCP",
    eyebrow: "MCP server · production",
    summary:
      "One MCP server for Arkiv with a profile per event. Coding agents connect once and get the docs, the SDK guidance and that event's rules, plus read-only checks for a schema or a submission before a builder sends it.",
    stats: [
      { value: "4,241", label: "Tool uses recorded, Aug 1 to Oct 15" },
      { value: "4", label: "Events served: General, Ideathon, ETHRome, Devfolio" },
      { value: "204", label: "Builder calls at ETHRome, our tests excluded" },
      { value: "2", label: "Technical errors in about 50 hours at ETHRome" },
    ],
    points: [
      "Keyless and read-only: the server never receives a private key and never signs",
      "Hosted over HTTP for ChatGPT, Claude and any MCP client; Claude Code and Codex get it through the plugin",
      "Event rules come from one canonical repo, so the MCP, the event page and the submission checklist stay in sync",
      "Telemetry counts calls and questions, never people: no IPs, user agents or session IDs",
    ],
    media: [screenshots.mcpEvents, screenshots.mcpOverview, screenshots.mcpAgents],
    links: [
      { label: "Connect to the MCP", url: "https://arkivmcp.vercel.app" },
      { label: "Arkiv AI Tools", url: "https://hub.arkiv.network/ai-tools" },
    ],
  },
  {
    id: "arkiv-plugin",
    title: "Arkiv Agent Skills & Plugin",
    eyebrow: "Claude Code & Codex plugin",
    summary:
      "17 task-focused Agent Skills that teach coding agents to use Arkiv correctly, packaged as one plugin for Claude Code and Codex with the Devfolio MCP connection built in.",
    stats: [
      { value: "17", label: "Official Agent Skills" },
      { value: "17 of 18", label: "Eval runs passed with the plugin, 3 of 18 without" },
      { value: "134", label: "Unique cloners of the skills repo, Oct 1 to 14" },
      { value: "3", label: "Plugin releases in two days, 0.1.6 to 0.2.1" },
    ],
    points: [
      "One install gives the agent the skills, the MCP connection and the event guidance",
      "Behavioral evals ran six Devfolio tasks three times each, with and without the plugin",
      "From v0.2.1 the plugin reports its version and client to telemetry, with no tokens or installation IDs",
    ],
    media: [videos.devfolioConnect, screenshots.pluginVersions, screenshots.pluginClients, screenshots.skillsClones],
    links: [
      { label: "Plugin repository", url: "https://github.com/Arkiv-Network/claude-plugin" },
      { label: "Skills repository", url: "https://github.com/Arkiv-Network/skills" },
      { label: "Watch on X", url: videos.devfolioConnect.postUrl },
    ],
  },
  {
    id: "ideathon-mcp",
    title: "Ideathon MCP",
    eyebrow: "Idea coach · Aug 2026",
    summary:
      "A read-only MCP server for the Arkiv Ideathon. It knows every track, deadline and the judging rubric, and its review_my_idea prompt asks the questions judges ask before a builder submits.",
    stats: [
      { value: "50%", label: "Of 345 submitters connected it to their agent" },
      { value: "1,811", label: "Tool uses recorded, Aug 3 to Oct 2" },
      { value: "145", label: "Peak tool uses in one day, Aug 10" },
      { value: "0", label: "Ideas, IPs or session IDs stored by its telemetry" },
    ],
    points: [
      "review_my_idea returns a readiness band and open questions, never a score",
      "The knowledge base is built from the public challenge repo and fails the build on draft or internal text",
      "Frozen after the event; its telemetry was archived into the same dashboard as the main MCP",
    ],
    media: [videos.ideathonMcp, screenshots.ideathonActivity, screenshots.ideathonMcpUsage, screenshots.ideathonHowHeard],
    links: [
      { label: "Results repository", url: "https://github.com/Arkiv-Network/arkiv-ideathon" },
      { label: "Watch on X", url: videos.ideathonMcp.postUrl },
    ],
  },
  {
    id: "arkiv-npm-tools",
    title: "Arkiv npm packages",
    eyebrow: "Open-source libraries",
    summary:
      "Six published packages for moving EVM events into Arkiv, exploring data as graphs, and working with larger files, images and encryption.",
    stats: [
      { value: "785", label: "arkiv-sync downloads" },
      { value: "665", label: "arkiv-graph downloads" },
      { value: "445", label: "create-arkiv-sync downloads" },
      { value: "200", label: "arkiv-encryption downloads" },
      { value: "189", label: "arkiv-images downloads" },
      { value: "155", label: "arkiv-chunking downloads" },
    ],
    points: [
      "2,439 downloads in 2026 across the six packages, Jan 1 to Oct 14 (npm registry, includes CI and mirrors)",
      "arkiv-sync survives reorgs, writes idempotently and resumes from a cursor",
      "Each package ships with a live demo developers can inspect before integrating",
    ],
    media: [],
    links: [
      { label: "arkiv-sync on npm", url: "https://www.npmjs.com/package/arkiv-sync" },
      { label: "arkiv-graph on npm", url: "https://www.npmjs.com/package/arkiv-graph" },
      { label: "Tools catalog", url: "https://hub.arkiv.network/ai-tools" },
    ],
  },
];
