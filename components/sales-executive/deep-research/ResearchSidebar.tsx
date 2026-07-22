import { Trash2 } from "lucide-react";

type ResearchSidebarProps = {
  onNewResearch: () => void;
};

const chats = [
  "acme technologies research",
  "tesla competitor analysis",
  "zoho market insights",
  "tcs company overview",
];

export default function ResearchSidebar({
  onNewResearch,
}: ResearchSidebarProps) {
  return (
    <div className="w-[300px] border-r border-[#E5E7EB] bg-white p-5">
      <button
        onClick={onNewResearch}
        className="w-full h-12 bg-[#071B3B] text-white rounded-xl font-medium hover:opacity-95 transition"
      >
        New Research
      </button>

      <h3 className="mt-8 text-[16px] font-semibold text-[#111827]">
        Recent Chats
      </h3>

      <div className="mt-5 space-y-3">
        {chats.map((chat) => (
          <div
            key={chat}
            className="flex items-center justify-between rounded-lg px-3 py-3 hover:bg-[#F8FAFC] cursor-pointer"
          >
            <span className="text-sm text-[#6B7280] truncate max-w-[210px]">
              {chat}
            </span>

            <Trash2
              size={14}
              className="text-[#9CA3AF] hover:text-red-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}