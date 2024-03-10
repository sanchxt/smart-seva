const OAuth = () => {
  const handleGoogleClick = async () => {
    try {
    } catch (error) {
      console.log("Couldn't login with Google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase opacity-[90%] hover:opacity-100"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
