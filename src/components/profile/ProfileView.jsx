"use client";

import { useState } from "react";

import ProfileDisplay from "./ProfileDisplay";
import ProfileForm from "./ProfileForm";

export default function ProfileView({ profile }) {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ProfileForm
      profile={profile}
      onCancel={() => setIsEditing(false)}
    />
  ) : (
    <ProfileDisplay
      profile={profile}
      onEdit={() => setIsEditing(true)}
    />
  );
}