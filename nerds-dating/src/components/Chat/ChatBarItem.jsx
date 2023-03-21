const ChatBarItem = (props) => {
  const { userID, profile, setChat } = props;

  return (
    <div
      className="flex w-16 bg-red-300"
      onClick={() => {
        setChat(profile);
      }}
    >
      {userID === profile.first_user_id ? (
        <div>
          <img
            src={profile.user2_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p>{profile.user2_name}</p>
        </div>
      ) : (
        <div>
          <img
            src={profile.user1_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p>{profile.user1_name}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBarItem;
