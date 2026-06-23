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
    | "Lost";
}

export const initialLeads: Lead[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    company: "Infosys",
    email: "ramesh@gmail.com",
    phone: "9876543210",
    status: "New",
  },
  {
    id: 2,
    name: "Suresh Rao",
    company: "TCS",
    email: "suresh@gmail.com",
    phone: "9876543211",
    status: "Qualified",
  },
  {
    id: 3,
    name: "Priya Sharma",
    company: "Wipro",
    email: "priya@gmail.com",
    phone: "9876543212",
    status: "Contacted",
  },
];