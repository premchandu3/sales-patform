"use client";

import { useEffect, useState } from "react";

interface Activity {
  _id: string;
  action: string;
  description: string;
  createdAt: string;
}

export default function Activity() {
  const [activities, setActivities] =
    useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities =
      async () => {
        const response =
          await fetch(
            "/api/activities"
          );

        const data =
          await response.json();

        setActivities(data);
      };

    fetchActivities();
  }, []);

  return (
    <div className="bg-white border rounded-xl p-4 md:p-5">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        My Activity
      </h2>

      <div className="space-y-3">
        {activities.map(
          (activity) => (
            <div
              key={activity._id}
              className="flex items-start gap-3 text-sm text-gray-600 break-words"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />

              <div className="flex-1 min-w-0">
                <p className="break-words">
                  {activity.description}
                </p>

                <p className="text-[11px] md:text-xs text-gray-400 mt-1 break-all">
                  {new Date(
                    activity.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          )
        )}

        {activities.length === 0 && (
          <p className="text-gray-500 text-sm">
            No activity found
          </p>
        )}
      </div>
    </div>
  );
}