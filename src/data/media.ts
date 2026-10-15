// Shared media for /hackathons and /tooling: self-hosted walkthrough videos and dashboard screenshots.
// Screenshots are 2x captures; width/height are their pixel sizes so next/image keeps the aspect ratio.

export interface VideoMedia {
  kind: "video";
  src: string;
  poster: string;
  title: string;
  caption: string;
  duration: string;
  postUrl: string;
  width: number;
  height: number;
}

export interface ScreenshotMedia {
  kind: "image";
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

// Event photos may be cropped to fit their frame; screenshots never are.
export interface PhotoMedia {
  kind: "photo";
  src: string;
  alt: string;
  position?: string;
}

export type Media = VideoMedia | ScreenshotMedia | PhotoMedia;

// Date of the dashboard and GitHub captures below.
export const SNAPSHOT_DATE = "Oct 15, 2026";

export const videos = {
  devfolioConnect: {
    kind: "video",
    src: "/videos/devfolio-connect-agent.mp4",
    poster: "/videos/devfolio-connect-agent.jpg",
    title: "Connect your agent to Arkiv",
    caption:
      "Install the plugin in Claude Code or Codex, or paste the MCP URL into ChatGPT or Claude, in about a minute.",
    duration: "1:56",
    postUrl: "https://x.com/SantiagoDevRel/status/2110705690901962809",
    width: 1280,
    height: 720,
  },
  ideathonMcp: {
    kind: "video",
    src: "/videos/ideathon-mcp-coach.mp4",
    poster: "/videos/ideathon-mcp-coach.jpg",
    title: "Use the Ideathon MCP",
    caption:
      "Connect the Ideathon MCP, then run review_my_idea for feedback in the judges' terms before you submit.",
    duration: "4:20",
    postUrl: "https://x.com/SantiagoDevRel/status/2085651560017568225",
    width: 1204,
    height: 720,
  },
} satisfies Record<string, VideoMedia>;

export const screenshots = {
  mcpEvents: {
    kind: "image",
    src: "/images/tooling/mcp-events.png",
    alt: "Telemetry dashboard: tool uses per event for General, Ideathon, ETHRome and Devfolio",
    caption: "Tool uses per event, Aug 1 to Oct 15.",
    width: 2784,
    height: 1020,
  },
  mcpOverview: {
    kind: "image",
    src: "/images/tooling/mcp-overview-ring.png",
    alt: "Telemetry dashboard: 4,241 tool uses out of 37,911 recorded MCP requests",
    caption: "Tool uses versus connections and catalog requests.",
    width: 760,
    height: 1162,
  },
  mcpAgents: {
    kind: "image",
    src: "/images/tooling/mcp-agents.png",
    alt: "Telemetry dashboard: calls by client, led by Claude Code, Codex, Claude and mcp-remote",
    caption: "Calls by client name.",
    width: 864,
    height: 1202,
  },
  ideathonActivity: {
    kind: "image",
    src: "/images/tooling/ideathon-activity.png",
    alt: "Telemetry dashboard: Ideathon MCP tool uses per day in August 2026, peaking at 145",
    caption: "Ideathon MCP tool uses per day. The shaded band is the event.",
    width: 2688,
    height: 962,
  },
  ideathonMcpUsage: {
    kind: "image",
    src: "/images/tooling/ideathon-mcp-usage.png",
    alt: "Telemetry dashboard: 346 Ideathon submissions; 172 of 345 submitters connected the MCP to their agent",
    caption: "Half of the submitters connected the MCP, as answered on the submission form.",
    width: 864,
    height: 640,
  },
  ideathonHowHeard: {
    kind: "image",
    src: "/images/tooling/ideathon-how-heard.png",
    alt: "Telemetry dashboard: 254 of 345 submitters heard about the Ideathon from an X post",
    caption: "How submitters heard about the Ideathon.",
    width: 864,
    height: 898,
  },
  pluginVersions: {
    kind: "image",
    src: "/images/tooling/plugin-versions.png",
    alt: "Telemetry dashboard: 277 plugin-attributed attempts on version 0.2.1, from Codex and Claude Code",
    caption: "Plugin-attributed attempts by release, live since v0.2.1 (Oct 14). Includes our own install tests.",
    width: 1788,
    height: 574,
  },
  pluginClients: {
    kind: "image",
    src: "/images/tooling/plugin-clients.png",
    alt: "Telemetry dashboard: client families per event; Devfolio traffic split across Claude Code, Codex and other clients",
    caption: "Client families per event. Attribution started with the Devfolio profile.",
    width: 1758,
    height: 814,
  },
  skillsClones: {
    kind: "image",
    src: "/images/tooling/skills-github-clones.png",
    alt: "GitHub traffic for Arkiv-Network/skills: 434 clones and 134 unique cloners from Oct 1 to Oct 14, 2026",
    caption: "Skills repository clones, Oct 1 to 14 (GitHub traffic, includes CI and install tests).",
    width: 1888,
    height: 862,
  },
} satisfies Record<string, ScreenshotMedia>;
