type LeadDetailsDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LeadDetailsDrawer({
  isOpen,
  onClose,
}: LeadDetailsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="min-h-screen flex items-start justify-center py-8 px-4">
        <div className="relative w-full max-w-[850px] bg-white rounded-[28px] shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]">
            <h2 className="text-[40px] font-bold text-[#071B3B]">
              Lead Details
            </h2>

            <button
              onClick={onClose}
              className="text-4xl text-gray-400 hover:text-black"
            >
              ×
            </button>
          </div>

          <div className="p-8">

            {/* Company Info */}
            <div className="flex items-start justify-between pb-8 border-b border-[#E5E7EB]">
              <div>
                <h3 className="text-[36px] font-bold text-[#071B3B]">
                  ACME Technologies
                </h3>

                <p className="text-gray-500 mt-2 text-lg">
                  Rohan Mehta
                </p>
              </div>

              <span className="px-4 py-2 rounded-full bg-[#E8F0FF] text-[#3B82F6] text-sm font-medium">
                High Priority
              </span>
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-2 gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Basic Details
                </h4>

                <div className="space-y-4 text-[15px]">
                  <p><strong>Business Type:</strong> IT Services</p>
                  <p><strong>Industry Category:</strong> Technology</p>
                  <p><strong>Address:</strong> Bangalore</p>
                  <p><strong>Location:</strong> Bangalore</p>
                  <p><strong>Phone Number:</strong> +91 9876543210</p>
                  <p><strong>Email ID:</strong> rohan@test.com</p>
                  <p><strong>Website:</strong> www.acme.com</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Lead Details
                </h4>

                <div className="space-y-4 text-[15px]">
                  <p><strong>Added Date:</strong> 20 May 2026</p>
                  <p><strong>Lead Source:</strong> LinkedIn</p>
                  <p><strong>Lead Owner:</strong> Varshini</p>
                  <p><strong>Status:</strong> New</p>
                  <p><strong>Next Action:</strong> Contact</p>
                  <p><strong>Best Time:</strong> 4 PM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-2 gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Other Details
                </h4>

                <div className="space-y-4 text-[15px]">
                  <p><strong>Service:</strong> Software Development</p>
                  <p><strong>Experience:</strong> 8 Years</p>
                  <p><strong>Employees:</strong> 120</p>
                  <p><strong>Target Market:</strong> SMB</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Social Media & Links
                </h4>

                <div className="space-y-4 text-[15px]">
                  <p>LinkedIn</p>
                  <p>Instagram</p>
                  <p>YouTube</p>
                  <p>Google Maps</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-2 gap-16 py-8 border-b border-[#E5E7EB]">
              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Insights
                </h4>

                <div className="space-y-4 text-[15px]">
                  <p><strong>Strength:</strong> Strong online presence</p>
                  <p><strong>Weakness:</strong> Limited automation</p>
                  <p><strong>Opportunity:</strong> AI Solutions</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-6">
                  Additional Notes
                </h4>

                <p className="text-[15px] text-gray-600 leading-7">
                  Collected from LinkedIn during company research.
                  Contact details verified from company website.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-4 pt-8">
              <button className="border border-[#D1D5DB] px-6 py-3 rounded-lg">
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