export default function ExtractedInfo() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 self-start">
      <h2 className="text-2xl font-semibold mb-2">
        Extracted Information
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        AI has extracted following information, please review and confirm.
      </p>

      <div className="space-y-4">

        <input
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Company Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Contact"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Website"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Location"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Lead Source"
          defaultValue="Card AI"
          className="w-full border rounded-lg px-4 py-3"
        />

        <select className="w-full border rounded-lg px-4 py-3">
          <option>Varshini</option>
        </select>

      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button className="border px-5 py-2 rounded-lg">
          Cancel
        </button>

        <button className="bg-[#071B3B] text-white px-5 py-2 rounded-lg">
          Save Lead
        </button>
      </div>
    </div>
  );
}