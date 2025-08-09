import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="bg-gray-100 mx-auto my-20 shadow-lg rounded-lg overflow-hidden sm:p-4 md:p-8 max-w-xs md:max-w-sm">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          src={user.avatar_url}
          alt={`${user.name}'s avatar`}
        />
        <div>
          {/* Added text-lg, md:text-xl, text-blue-800, and my-4 for styling */}
          <h2 className="text-lg md:text-xl text-blue-800 my-4 font-semibold">
            {user.name}
          </h2>
          {/* Added text-sm for smaller text */}
          <p className="text-sm text-gray-600">@{user.login}</p>
        </div>
      </div>
      <div className="mt-4">
        {/* Added text-base for paragraph styling */}
        <p className="text-base text-gray-800">{user.bio}</p>
      </div>
      <div className="mt-4 flex space-x-6">
        <div>
          <span className="font-bold">{user.followers}</span>{" "}
          <span className="text-sm">Followers</span>
        </div>
        <div>
          <span className="font-bold">{user.following}</span>{" "}
          <span className="text-sm">Following</span>
        </div>
        <div>
          <span className="font-bold">{user.public_repos}</span>{" "}
          <span className="text-sm">Repos</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
