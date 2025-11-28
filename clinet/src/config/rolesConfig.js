import ExecutiveDashboard from "@/app/components/dashboards/ExecutiveDashboard";

const rolesConfig = {
  Convenor: {   // ✅ fixed spelling
    homePage: "ConvenorDashboard",
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "Executives", path: "/executives", permission: "manage_executive" },
      { name: "Judges", path: "/judges", permission: "manage_judges" },
      { name: "Results", path: "/results", permission: "manage_results" },
      { name: "Scheduler", path: "/scheduler", permission: "manage_schedule" },
      { name: "Settings", path: "/settings", permission: "settings" },
      { name: "Profile", path: "/me", permission: null },
      { name: "Items", path: "/items", permission: "manage_items" },
    ],
  },

  AssistantConvenor: {   // ✅ fixed spelling
    homePage: "ConvenorDashboard",
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "Executives", path: "/executives", permission: "manage_executive" },
      { name: "Judges", path: "/judges", permission: "manage_judges" },
      { name: "Results", path: "/results", permission: "manage_results" },
      { name: "Scheduler", path: "/scheduler", permission: "manage_schedule" },
      { name: "Settings", path: "/settings", permission: "settings" },
      { name: "Profile", path: "/me", permission: null },
      { name: "Items", path: "/items", permission: "manage_items" },
    ],
  },

  StageExecutive: {
    homePage: "StageDashboard",
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "History", path: "/stagehistory", permission: "stage_history" },
      { name: "Schedule", path: "/schedule", permission: "view_schedule" },
      { name: "Profile", path: "/me", permission: null }
    ],
  },

  Announcer: {   // ✅ fixed spelling
    homePage: "AnnouncerDashboard",
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "History", path: "/announcehistory", permission: "announce_history" },
      { name: "Schedule", path: "/schedule", permission: "view_schedule" },
      { name: "Profile", path: "/me", permission: null }
    ],
  },

  Judge: {
    homePage: "JudgeDashboard",
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "History", path: "/judgementhistory", permission: "judgement_history" },
      { name: "Schedule", path: "/schedule", permission: "view_schedule" },
      { name: "Profile", path: "/me", permission: null }
    ],
  },

  Executive: {   // ✅ added because backend assigns "Executive"
    homePage: ExecutiveDashboard,
    sidebar: [
      { name: "Dashboard", path: "/", permission: null },
      { name: "Schedule", path: "/schedule", permission: "view_schedule" },
      { name: "Profile", path: "/me", permission: null }
    ],
  },
};

export default rolesConfig;
