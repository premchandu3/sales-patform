export const leadService = {
  async getLeads() {
    const response = await fetch("/api/leads");

    if (!response.ok) {
      throw new Error("Failed to fetch leads");
    }

    return response.json();
  },
};