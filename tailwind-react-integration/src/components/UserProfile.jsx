import React from "react";

function UserProfile() {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="w-32 h-32 rounded-full object-cover mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h2>
      <p className="text-gray-600">
        Frontend Developer
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          Follow
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-300 ease-in-out"
        >
          Message
        </a>
      </div>
    </div>
  );
}

export default UserProfile;
