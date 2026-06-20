interface StatusBadgeProps {
  status: "Active" | "Inactive" | "Invited";
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const colors = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
    Invited: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}