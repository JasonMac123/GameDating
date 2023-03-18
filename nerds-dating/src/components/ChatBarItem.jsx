const ChatBarItem = (props) => {
  const { user, profile, setChat } = props;

  return (
    <div
      className="flex w-16"
      onClick={() => {
        setChat(profile);
      }}
    >
      {user === profile.first_user_id ? (
        <>
          <img
            src={profile.user2_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p>{profile.user2_name}</p>
        </>
      ) : (
        <>
          <img
            src={profile.user1_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p>{profile.user1_name}</p>
        </>
      )}
    </div>
  );
};

export default ChatBarItem;
