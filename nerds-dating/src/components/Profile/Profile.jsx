export default function Profile(props) {

  const user = props.currentUser;

  return (
    <div className="flex h-screen bg-emerald-200 pl-16">
      <>
      <div className="left-0 flex h-screen w-1/2 justify-center items-center">
        <img
          className="object-scale-down w-2/3 h-2/3 p-2"
          src={user?.cover_picture}
          alt="Cover Pic"
        />
      </div>
        <div className="flex flex-col right-0 w-1/2 gap-2">
          <div className=" bg-pink-200">{user?.name}</div>
          <div className="flex bg-pink-200 grow">{user?.summary}</div>
        </div>
      </>
    </div>
  );
}
