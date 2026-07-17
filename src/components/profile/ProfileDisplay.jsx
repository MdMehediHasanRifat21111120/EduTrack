import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";
import EditProfileButton from "./EditProfileButton";

export default function ProfileDisplay({ profile, onEdit }) {
  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />

      <ProfileInformation profile={profile} />

      <EditProfileButton onClick={onEdit} />
    </div>
  );
}
