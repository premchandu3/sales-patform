export interface Lead {
  id: number;

  name: string;

  company: string;

  email: string;

  phone: string;

  status:
    | "New"
    | "Contacted"
    | "Qualified"
    | "Proposal Sent"
    | "Won"
    | "Lost";

  source: string;

  assignedTo: string;

  createdAt: string;

  notes?: string;
}