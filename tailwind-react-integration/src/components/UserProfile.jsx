import React from "react";

function UserProfile({ name, bio, image, onFollow, onMessage }) {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={`${name}'s Profile`}
        className="mx-auto rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      <h2 className="text-blue-800 my-4 text-lg sm:text-lg md:text-xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out">
        {name || "Anonymous User"}
      </h2>

      <p className="mt-2 text-gray-600 text-sm sm:text-sm md:text-base">
        {bio || "No bio available."}
      </p>

      <div className="mt-4 flex justify-center space-x-3">
        <button
          onClick={onFollow}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          Follow
        </button>
        <button
          onClick={onMessage}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-300 ease-in-out"
        >
          Message
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
