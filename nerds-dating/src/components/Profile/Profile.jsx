export default function Profile(props) {
  console.log(props);

  const user = props.currentUser;

  return (
    <div className="flex h-screen bg-pink-200">
      <>
      <div className="left-0 flex h-screen w-1/2 justify-center items-center">
        <img
          className="object-scale-down max-w-5xl max-h-96 p-8"
          src={user?.cover_picture}
          alt="Cover Pic"
        />
      </div>
        <div className="flex flex-col right-0 w-1/2 gap-2">
          <div className=" bg-rose-400">{user?.name}</div>
          <div className="flex bg-rose-400 grow">{user?.summary}</div>
        </div>
      </>
    </div>
  );
}
