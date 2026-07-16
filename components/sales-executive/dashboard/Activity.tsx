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
    <div className="bg-white border rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">
        My Activity
      </h2>

      <div className="space-y-3">
        {activities.map(
          (activity) => (
            <div
              key={activity._id}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />

              <div>
                <p>
                  {
                    activity.description
                  }
                </p>

                <p className="text-xs text-gray-400 mt-1">
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