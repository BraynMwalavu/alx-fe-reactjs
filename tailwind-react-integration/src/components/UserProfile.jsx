import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="mx-auto rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      <h2 className="mt-4 text-lg sm:text-lg md:text-xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h2>

      <p className="mt-2 text-gray-600 text-sm sm:text-sm md:text-base">
        A passionate web developer with expertise in building responsive and user-friendly web applications.
      </p>

      <div className="mt-4 flex justify-center space-x-3">
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
