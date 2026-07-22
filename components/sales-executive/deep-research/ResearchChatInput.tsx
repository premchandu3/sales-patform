import { Plus, Send } from "lucide-react";

export default function ResearchChatInput() {
  return (
    <div className="flex items-center gap-4 border border-[#D1D5DB] rounded-2xl px-5 py-4 bg-white shadow-sm">
      <button className="w-10 h-10 rounded-full bg-[#F4F7FC] flex items-center justify-center">
        <Plus
          size={18}
          className="text-[#071B3B]"
        />
      </button>

      <input
        placeholder="Ask anything about this research..."
        className="flex-1 outline-none text-[15px] text-[#374151]"
      />

      <button className="w-10 h-10 rounded-full bg-[#071B3B] flex items-center justify-center">
        <Send
          size={16}
          className="text-white"
        />
      </button>
    </div>
  );
}