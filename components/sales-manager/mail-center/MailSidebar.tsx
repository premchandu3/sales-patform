type MailSidebarProps = {
  selectedFolder: string;
  setSelectedFolder: (folder: string) => void;
};

const folders = [
  { name: "Inbox", count: 120 },
  { name: "Sent", count: 88 },
  { name: "Draft", count: 15 },
  { name: "Scheduled", count: 5 },
  { name: "Trash", count: 9 },
];

export default function MailSidebar({
  selectedFolder,
  setSelectedFolder,
}: MailSidebarProps) {
  return (
    <div className="border-r border-[#D9D9D9] p-3 h-full">

      <button className="w-full h-[42px] bg-[#071B3B] text-white rounded-lg text-[14px] font-medium">
        Compose Email
      </button>

      <h3 className="mt-6 mb-4 text-[18px] font-semibold text-[#222222]">
        Folders
      </h3>

      <div className="space-y-1">
        {folders.map((folder) => (
          <button
            key={folder.name}
            onClick={() => setSelectedFolder(folder.name)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px]
              ${
                selectedFolder === folder.name
                  ? "bg-[#DCE7F6] text-[#071B3B] font-medium"
                  : "text-[#666666] hover:bg-[#F8FAFC]"
              }`}
          >
            <span>{folder.name}</span>
            <span>{folder.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}