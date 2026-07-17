export default function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">
        {profile.full_name?.charAt(0)?.toUpperCase() || "U"}
      </div>

      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        {profile.full_name || "Unknown User"}
      </h1>

      <p className="mt-1 capitalize text-slate-600">{profile.role}</p>
    </div>
  );
}
