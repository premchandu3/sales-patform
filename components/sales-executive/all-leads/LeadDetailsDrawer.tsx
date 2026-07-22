type LeadDetailsDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  lead: any;
};

export default function LeadDetailsDrawer({
  isOpen,
  onClose,
  lead,
}: LeadDetailsDrawerProps) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="min-h-screen flex items-start justify-center py-8 px-4">
        <div className="relative w-full max-w-[850px] bg-white rounded-2xl md:rounded-[28px] shadow-2xl max-h-[90vh] overflow-y-auto">

          <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6 border-b border-[#E5E7EB]">
            <h2 className="text-xl md:text-2xl md:text-[40px] font-bold text-[#071B3B]">
              Lead Details
            </h2>

            <button
              onClick={onClose}
              className="text-4xl text-gray-400 hover:text-black"
            >
              ×
            </button>
          </div>

          <div className="p-5 md:p-8">

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-8 border-b border-[#E5E7EB]">
              <div>
                <h3 className="text-xl md:text-2xl md:text-[36px] break-words font-bold text-[#071B3B]">
                  {lead.companyName || "-"}
                </h3>

                <p className="text-gray-500 mt-2 text-base md:text-lg break-words">
                  {lead.contactPersonName || "-"}
                </p>
              </div>

              <span className="self-start px-4 py-2 rounded-full bg-[#E8F0FF] text-[#3B82F6] text-sm font-medium">
                {lead.leadPriority || "Normal"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Basic Details
                </h4>

                <div className="space-y-4 text-sm md:text-[15px] break-words">
                  <p><strong>Business Type:</strong> {lead.businessType || "-"}</p>
                  <p><strong>Industry Category:</strong> {lead.industryCategory || "-"}</p>
                  <p><strong>Address:</strong> {lead.address || "-"}</p>
                  <p><strong>Location:</strong> {lead.location || "-"}</p>
                  <p><strong>Phone Number:</strong> {lead.phoneNumber || "-"}</p>
                  <p><strong>Email ID:</strong> {lead.email || "-"}</p>
                  <p><strong>Website:</strong> {lead.website || "-"}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Lead Details
                </h4>

                <div className="space-y-4 text-sm md:text-[15px] break-words">
                  <p>
                    <strong>Added Date:</strong>{" "}
                    {lead.createdAt
                      ? new Date(
                          lead.createdAt
                        ).toLocaleDateString("en-GB")
                      : "-"}
                  </p>

                  <p><strong>Lead Source:</strong> {lead.leadSource || "-"}</p>
                  <p><strong>Lead Owner:</strong> {lead.leadOwner || "-"}</p>
                  <p><strong>Status:</strong> {lead.status || "-"}</p>
                  <p><strong>Next Action:</strong> {lead.nextAction || "-"}</p>
                  <p><strong>Best Time:</strong> {lead.bestTimeToContact || "-"}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Other Details
                </h4>

                <div className="space-y-4 text-sm md:text-[15px] break-words">
                  <p><strong>Service:</strong> {lead.serviceOffered || "-"}</p>
                  <p><strong>Experience:</strong> {lead.yearsOfExperience || "-"}</p>
                  <p><strong>Employees:</strong> {lead.employeeCount || "-"}</p>
                  <p><strong>Target Market:</strong> {lead.targetMarket || "-"}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Social Media & Links
                </h4>

                <div className="space-y-4 text-sm md:text-[15px] break-words">
                  <p>{lead.linkedinPage || "-"}</p>
                  <p>{lead.instagramPage || "-"}</p>
                  <p>{lead.youtubePage || "-"}</p>
                  <p>{lead.googleMapsLink || "-"}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Insights
                </h4>

                <div className="space-y-4 text-sm md:text-[15px] break-words">
                  <p><strong>Strength:</strong> {lead.strength || "-"}</p>
                  <p><strong>Weakness:</strong> {lead.weakness || "-"}</p>
                  <p><strong>Opportunity:</strong> {lead.opportunity || "-"}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  Additional Notes
                </h4>

                <p className="text-sm md:text-[15px] text-gray-600 leading-6 md:leading-7 break-words">
                  {lead.additionalNotes || "-"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 pt-8">
              <button className="w-full sm:w-auto border border-[#D1D5DB] px-6 py-3 rounded-lg">
                Create Follow Up
              </button>

              <button className="bg-[#071B3B] text-white px-6 py-3 rounded-lg">
                Edit
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}