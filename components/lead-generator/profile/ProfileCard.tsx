export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

      <h3 className="text-lg font-semibold mb-8">
        Profile details
      </h3>

      <div className="grid grid-cols-2 gap-y-6">

        <div>
          <p className="text-sm">
            <span className="font-semibold">Name :</span> Varshini
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Role :</span> Lead Generator
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Email :</span> varshini@gmail.com
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Department :</span> Sales
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Contact :</span> +91 7867564893
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Joined On :</span> Feb 20, 2026
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Location :</span> Chennai
          </p>
        </div>

        <div>
          <p className="text-sm">
            <span className="font-semibold">Status :</span> Active
          </p>
        </div>

      </div>

      <div className="flex justify-end mt-10">
        <button className="bg-[#071B3B] text-white px-6 py-3 rounded-lg">
          Edit Profile
        </button>
      </div>

    </div>
  );
}