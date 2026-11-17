// Auto-generated configuration for BLS Spain Algeria AutoBot

export const config = {
  botName: "BLS Spain Algeria",
  country: "Algeria",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://algeria.blsspainvisa.com/account/login",
  centers: [
  "Algiers",
  "Oran"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family Visit",
  "Medical",
  "Study",
  "Work"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
