import { getCurrentProfile } from "@/features/profile/services";

import ProfileView from "./ProfileView";

export default async function ProfileCard() {
  const profile = await getCurrentProfile();

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return <ProfileView profile={profile} />;
}
