"use client";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  user,
}: EditProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
      <div className="bg-white w-[600px] rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label>Name</label>

            <input
              defaultValue={user?.name}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label>Contact</label>

            <input
              defaultValue={user?.contact}
              className="w-full border rounded-lg px-4 py-3 mt-1"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              defaultValue={user?.email}
              disabled
              className="w-full border rounded-lg px-4 py-3 mt-1 bg-gray-100"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            className="bg-[#071B3B] text-white px-5 py-3 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}