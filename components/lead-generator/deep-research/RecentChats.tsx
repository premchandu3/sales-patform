"use client";

interface Research {
  _id: string;
  title: string;
  prompt: string;
  response: string;
}

interface Props {
  chats: Research[];
  onSelect: (chat: Research) => void;
  onDelete: (id: string) => void;
}

export default function RecentChats({
  chats,
  onSelect,
  onDelete,
}: Props) {
  return (
    <div className="space-y-4">
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => onSelect(chat)}
            className="text-sm text-left text-gray-600 hover:text-black"
          >
            {chat.title}
          </button>

          <button
            onClick={() => onDelete(chat._id)}
            className="text-red-500"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}