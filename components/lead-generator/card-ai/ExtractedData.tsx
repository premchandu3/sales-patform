export default function ExtractedData() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Extracted Data
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="Name"
          className="border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Company"
          className="border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Email"
          className="border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Phone"
          className="border rounded-lg px-4 py-3"
        />

      </div>

      <button className="mt-6 bg-[#071B3B] text-white px-6 py-3 rounded-lg">
        Save Lead
      </button>
    </div>
  );
}