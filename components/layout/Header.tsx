export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="
            border
            rounded-lg
            px-4
            py-2
            w-64
          "
        />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
            A
          </div>

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              admin@crm.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}