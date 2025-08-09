function UserProfile() {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-md 
                    p-4 sm:p-4 md:p-8 
                    max-w-xs sm:max-w-xs md:max-w-sm 
                    text-center">
      
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="mx-auto rounded-full 
                   w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
                   object-cover"
      />

      {/* Name */}
      <h1 className="mt-4 font-bold 
                     text-lg sm:text-lg md:text-xl">
        John Doe
      </h1>

      {/* Bio */}
      <p className="mt-2 text-gray-600 
                    text-sm sm:text-sm md:text-base">
        A passionate web developer with expertise in building responsive and user-friendly web applications.
      </p>
    </div>
  );
}

export default UserProfile;
