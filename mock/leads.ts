import { Lead } from "@/types/lead";

export const initialLeads: Lead[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Google",
    email: "john@google.com",
    phone: "9876543210",
    status: "New",
    source: "LinkedIn",
    assignedTo: "Prem",
    createdAt: "2026-06-20",
  },

  {
    id: 2,
    name: "David Miller",
    company: "Microsoft",
    email: "david@microsoft.com",
    phone: "9876543211",
    status: "Qualified",
    source: "Website",
    assignedTo: "Prem",
    createdAt: "2026-06-18",
  },
];