export default function Activity() {
  const activities = [
    {
      date: "Today",
      items: [
        "Added 5 Leads",
        "Created 2 Follow Ups",
        "Scheduled 1 Discovery Call",
      ],
    },
    {
      date: "Yesterday",
      items: [
        "Added 3 Leads",
        "Completed 2 Follow Ups",
      ],
    },
  ];

  return (
    <div className="bg-white border rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">My Activity</h2>

      <div className="space-y-6">
        {activities.map((group) => (
          <div key={group.date}>
            <h3 className="font-medium text-gray-900 mb-3">
              {group.date}
            </h3>

            <div className="space-y-3">
              {group.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}