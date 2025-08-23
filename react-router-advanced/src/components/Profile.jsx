import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Sub-components
function ProfileDetails() {
  return <h2 className="text-lg">Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2 className="text-lg">Profile Settings Section</h2>;
}

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Local navigation */}
      <nav className="space-x-4 mb-6">
        <Link to="details" className="text-blue-500 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
