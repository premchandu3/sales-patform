interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const getColor = () => {
    switch (status) {
      case "Active":
      case "Qualified":
        return "bg-[#DDF7E5] text-[#16A34A]";

      case "Inactive":
      case "Lost":
        return "bg-[#FEE2E2] text-[#DC2626]";

      case "Invited":
      case "Contacted":
        return "bg-[#FEF3C7] text-[#D97706]";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        min-w-[82px]
        h-[30px]
        rounded-full
        text-[14px]
        font-medium
        ${getColor()}
      `}
    >
      {status}
    </span>
  );
}