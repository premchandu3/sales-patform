"use client";

import { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default function ProfileCard() {
  const [user, setUser] =
    useState<any>(null);
  const [isEditOpen, setIsEditOpen] =
    useState(false);

  useEffect(() => {
    const fetchProfile =
      async () => {
        const response =
          await fetch("/api/profile");

        const data =
          await response.json();

        setUser(data);
      };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="bg-white rounded-2xl border p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

      <h3 className="text-lg font-semibold mb-8">
        Profile Details
      </h3>

      <div className="grid grid-cols-2 gap-y-6">

        <p>
          <b>Name :</b> {user.name}
        </p>

        <p>
          <b>Role :</b> {user.role}
        </p>

        <p>
          <b>Email :</b> {user.email}
        </p>

        <p>
          <b>Status :</b> {user.status}
        </p>

        <p>
          <b>Contact :</b>{" "}
          {user.contact || "-"}
        </p>

        <p>
          <b>Joined On :</b>{" "}
          {new Date(
            user.createdAt
          ).toLocaleDateString()}
        </p>

      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={() => setIsEditOpen(true)}
          className="bg-[#071B3B] text-white px-6 py-3 rounded-lg"
        >
          Edit Profile
        </button>
      </div>
      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        user={user}
      />

    </div>
  );
}