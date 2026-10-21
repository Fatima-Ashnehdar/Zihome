"use client";

/**@format */

import { useState } from "react";

import { AccountInformation } from "./components/accountInformation";
import { ProfileInputGroup } from "./components/inputGroup";

export default function DashboardProfile() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex flex-col gap-y-3">
      {!isEditing && <AccountInformation onEdit={() => setIsEditing(true)} />}
      {isEditing && <ProfileInputGroup />}
    </div>
  );
}
