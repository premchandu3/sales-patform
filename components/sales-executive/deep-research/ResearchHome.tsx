type ResearchHomeProps = {
  onSearch: () => void;
};

export default function ResearchHome({
  onSearch,
}: ResearchHomeProps) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-[850px] text-center">
        <h1 className="text-[48px] leading-[58px] font-bold text-[#071B3B]">
          What do you want to search today?
        </h1>

        <p className="text-[#6B7280] mt-4 text-[16px]">
          Ask anything about a company, industry,
          competitor or market
        </p>

        <div className="mt-10 border border-[#D1D5DB] rounded-[24px] p-5 shadow-sm bg-white">
          <textarea
            placeholder="Describe what you want to research..."
            className="w-full h-[140px] resize-none outline-none text-[15px]"
          />

          <div className="flex justify-end mt-5">
            <button
              onClick={onSearch}
              className="bg-[#071B3B] text-white px-6 py-3 rounded-xl font-medium hover:opacity-95 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}