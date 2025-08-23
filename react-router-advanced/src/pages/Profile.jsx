import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h2>Profile Page</h2>
      <nav className="flex gap-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
