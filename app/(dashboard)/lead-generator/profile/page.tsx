import ProfileCard from "@/components/lead-generator/profile/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="text-gray-500 mt-1">
          View & manage your profile information
        </p>
      </div>

      <ProfileCard />
    </div>
  );
}