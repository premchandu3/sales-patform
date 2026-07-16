"use client";

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onCreateFollowUp: () => void;
  lead: any;
}

export default function LeadDetailsModal({
  isOpen,
  onClose,
  onEdit,
  onCreateFollowUp,
  lead,
}: LeadDetailsModalProps) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white w-[1000px] max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl">

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-[#071B3B]">
            Lead Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8">

          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-bold">
                {lead.companyName}
              </h3>

              <p className="text-gray-500 mt-1">
                {lead.contactPersonName}
              </p>
            </div>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
              {lead.leadPriority || "Normal Priority"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-10 border-t pt-6">

            <div>
              <h4 className="font-bold text-lg mb-4">
                Basic Details
              </h4>

              <div className="space-y-2 text-sm">
                <p><b>Business Type:</b> {lead.businessType || "-"}</p>
                <p><b>Industry Category:</b> {lead.industryCategory || "-"}</p>
                <p><b>Address:</b> {lead.address || "-"}</p>
                <p><b>Location:</b> {lead.location || "-"}</p>
                <p><b>Phone Number:</b> {lead.phoneNumber || "-"}</p>
                <p><b>Email:</b> {lead.email || "-"}</p>
                <p><b>Website:</b> {lead.website || "-"}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">
                Lead Details
              </h4>

              <div className="space-y-2 text-sm">
                <p><b>Lead Source:</b> {lead.leadSource || "-"}</p>
                <p><b>Lead Owner:</b> {lead.leadOwner || "-"}</p>
                <p><b>Best Time To Contact:</b> {lead.bestTimeToContact || "-"}</p>
                <p><b>Reason For Priority:</b> {lead.reasonForPriority || "-"}</p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-10 border-t mt-8 pt-6">

            <div>
              <h4 className="font-bold text-lg mb-4">
                Other Details
              </h4>

              <div className="space-y-2 text-sm">
                <p><b>Service Offered:</b> {lead.serviceOffered || "-"}</p>
                <p><b>Years Of Experience:</b> {lead.yearsOfExperience || "-"}</p>
                <p><b>No. Of Employees:</b> {lead.employeeCount || "-"}</p>
                <p><b>Target Market:</b> {lead.targetMarket || "-"}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">
                Social Links
              </h4>

              <div className="space-y-2 text-sm break-all">
                <p><b>LinkedIn:</b> {lead.linkedinPage || "-"}</p>
                <p><b>Instagram:</b> {lead.instagramPage || "-"}</p>
                <p><b>YouTube:</b> {lead.youtubePage || "-"}</p>
                <p><b>Google Maps:</b> {lead.googleMapsLink || "-"}</p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-10 border-t mt-8 pt-6">

            <div>
              <h4 className="font-bold text-lg mb-4">
                Insights
              </h4>

              <div className="space-y-2 text-sm">
                <p><b>Strength:</b> {lead.strength || "-"}</p>
                <p><b>Weakness:</b> {lead.weakness || "-"}</p>
                <p><b>Opportunity:</b> {lead.opportunity || "-"}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">
                Additional Notes
              </h4>

              <p className="text-sm">
                {lead.additionalNotes || "-"}
              </p>
            </div>

          </div>

          <div className="flex justify-end gap-4 mt-10 border-t pt-6">

            <button
              onClick={onCreateFollowUp}
              className="border border-gray-300 px-6 py-3 rounded-lg"
            >
              Create Follow Up
            </button>

            <button
              onClick={onEdit}
              className="bg-[#071B3B] text-white px-6 py-3 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={onClose}
              className="bg-gray-200 px-6 py-3 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}