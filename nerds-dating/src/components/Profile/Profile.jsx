import lookUpUser from "../../helpers/lookUpUser"

export default function Profile(props) {

  const user = lookUpUser(props.currentUserID);

  const userMapper = (userObj) => {
    return `
    <div className="flex h-screen bg-emerald-200 pl-16">
      <>
      <div className="left-0 flex h-screen w-1/2 justify-center items-center">
        <img
          className="object-scale-down w-2/3 h-2/3 p-2"
          src={lookUpUser(props.currentUserID)?.cover_picture}
          alt="Cover Pic"
        />
      </div>
        <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16">
          <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">{lookUpUser(props.currentUserID)?.name}</div>
          <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">{lookUpUser(props.currentUserID)?.summary}</div>
        </div>
      </>
    </div>
    `
  }

  return (
    userMapper(lookUpUser(props.currentUserID))
    // <div className="flex h-screen bg-emerald-200 pl-16">
    //   <>
    //   <div className="left-0 flex h-screen w-1/2 justify-center items-center">
    //     <img
    //       className="object-scale-down w-2/3 h-2/3 p-2"
    //       src={lookUpUser(props.currentUserID)?.cover_picture}
    //       alt="Cover Pic"
    //     />
    //   </div>
    //     <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16">
    //       <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">{lookUpUser(props.currentUserID)?.name}</div>
    //       <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">{lookUpUser(props.currentUserID)?.summary}</div>
    //     </div>
    //   </>
    // </div>
  );
}
