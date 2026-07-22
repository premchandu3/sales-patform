export default function UploadCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Upload Business Card
      </h2>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
        <p className="text-gray-500 mb-4">
          Drag & Drop Card Image
        </p>

        <button className="bg-[#071B3B] text-white px-6 py-3 rounded-lg">
          Choose File
        </button>
      </div>
    </div>
  );
}