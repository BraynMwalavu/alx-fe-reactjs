import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden sm:p-4 md:p-8 max-w-xs md:max-w-sm">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={user.avatar_url}
          alt={`${user.name}'s avatar`}
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">@{user.login}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">{user.bio}</p>
      </div>
      <div className="mt-4 flex space-x-6">
        <div>
          <span className="font-bold">{user.followers}</span> Followers
        </div>
        <div>
          <span className="font-bold">{user.following}</span> Following
        </div>
        <div>
          <span className="font-bold">{user.public_repos}</span> Repos
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
