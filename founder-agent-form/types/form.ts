export interface FormData {
  // Step 1 - About
  name: string;
  whatsapp: string;
  company: string;
  stage: string;

  // Step 2 - Capabilities
  capabilities: string[];
  customCapabilities: string;

  // Step 3 - Tools
  tools: string[];
  otherTools: string;

  // Step 4 - Working style
  briefTime: string;
  responseStyle: string;
  autonomy: string;

  // Step 5 - Priorities
  moreTimeFor: string;
  timeCost: string;
  neverTouch: string;
}

export const STAGES = ["Pre-product", "Early traction", "Series A+", "Scaling", "Enterprise"];

export const CAPABILITIES = [
  { id: "daily-brief", label: "Daily brief", desc: "News, tasks, and priorities each morning" },
  { id: "research", label: "Deep research", desc: "Market, competitor, and topic deep dives" },
  { id: "task-logger", label: "Task & note logger", desc: "Capture tasks, ideas, and decisions" },
  { id: "meeting-agent", label: "Meeting agent", desc: "Prep briefs, summaries, follow-up actions" },
  { id: "invoice", label: "Invoice creator", desc: "Draft and send invoices from a message" },
  { id: "email", label: "Email drafting", desc: "Write, reply, and summarise emails" },
  { id: "calendar", label: "Calendar manager", desc: "View, schedule, and reschedule meetings" },
  { id: "team-updates", label: "Team updates", desc: "Pulse check from Slack, Notion, or Linear" },
  { id: "financial", label: "Financial snapshot", desc: "Revenue, burn rate, and key metrics" },
  { id: "documents", label: "Document drafting", desc: "Proposals, decks, SOPs, memos" },
  { id: "crm", label: "CRM assistant", desc: "Log calls, update pipeline, deal status" },
  { id: "hiring", label: "Hiring support", desc: "JDs, candidate briefs, screening questions" },
];

export const TOOLS = [
  "Gmail", "Google Calendar", "Google Drive", "Notion", "Slack",
  "WhatsApp Business", "Razorpay / Stripe", "QuickBooks / Zoho",
  "Linear / Jira", "HubSpot / Salesforce", "Zoom / Google Meet",
  "Figma", "GitHub", "Airtable",
];

export const BRIEF_TIMES = ["6–7 AM", "7–8 AM", "8–9 AM", "On demand only"];

export const RESPONSE_STYLES = [
  "Bullet points", "Short prose", "Voice-note style",
  "Data-first", "Just the action", "Whatever fits",
];

export const AUTONOMY_OPTIONS = [
  { label: "Fully autonomous", desc: "Act first, report back — I'll review if something looks off" },
  { label: "Suggest, then act", desc: "Show me the plan, I approve, you execute" },
  { label: "Advisory only", desc: "Give me options and information, I'll take action myself" },
];

export const STEPS = [
  { id: 1, label: "About you" },
  { id: 2, label: "Capabilities" },
  { id: 3, label: "Tools" },
  { id: 4, label: "Working style" },
  { id: 5, label: "Priorities" },
];
