const ChatBarItem = (props) => {
  const { userID, profile, setChat } = props;

  return (
    <>
      {userID === profile.first_user_id ? (
        <div
          className="flex flex-row bg-red-400 hover:bg-red-600 w-full h-24 space-x-10 justify-start items-center rounded-md transition-all"
          onClick={() => {
            setChat(profile);
          }}
        >
          <div className="rounded-full w-30 h-30 overflow-hidden">
            <img
              src={profile.user2_coverpicture}
              alt=""
              className="w-20 h-20 object-cover"
            />
          </div>
          <div className="font-bold">{profile.user1_name}</div>
        </div>
      ) : (
        <div
          className="flex flex-row bg-red-400 hover:bg-red-600 w-full h-24 space-x-10 justify-start items-center rounded-md transition-all"
          onClick={() => {
            setChat(profile);
          }}
        >
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <img
              src={profile.user1_coverpicture}
              alt=""
              className="w-20 h-20 object-cover"
            />
          </div>
          <div className="font-bold">{profile.user1_name}</div>
        </div>
      )}
    </>
  );
};

export default ChatBarItem;
