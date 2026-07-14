export default function LeadsOverview() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[28px] font-bold text-[#111827]">
          Leads Overview
        </h3>

        <button className="text-sm font-medium">
          View All →
        </button>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span>Total Leads</span>
          <span>248</span>
        </div>

        <div className="flex justify-between">
          <span>New Leads</span>
          <span>56</span>
        </div>

        <div className="flex justify-between">
          <span>In Progress</span>
          <span>102</span>
        </div>

        <div className="flex justify-between">
          <span>Converted</span>
          <span>84</span>
        </div>

        <div className="flex justify-between">
          <span>Closed Lost</span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
}