import {
  BsFillPeopleFill,
  BsFillChatFill,
  BsFillBellFill,
  BsFillGearFill,
} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RiDoorOpenFill } from "react-icons/ri";
import SideBarIcon from "./SideBarIcon";

const NavBar = ({ setDisplay }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 m-0 flex flex-col justify-between bg-red-500 text-red-500">
      <IconContext.Provider value={{ className: "shared-class", size: 55 }}>
        <div className="space-y-8 pt-4">
          <SideBarIcon
            icon={<BsFillPeopleFill />}
            text="Match with others!"
            setDisplay={() => {
              setDisplay(6);
            }}
          />
          <SideBarIcon
            icon={<BsFillChatFill />}
            text="Chat with your matches!"
            setDisplay={() => {
              setDisplay(5);
            }}
          />
        </div>
        <div className="space-y-8 pb-4">
          <SideBarIcon
            icon={<RiDoorOpenFill />}
            text="Log out"
            setDisplay={() => {
              setDisplay(1);
            }}
          />
          <SideBarIcon icon={<BsFillBellFill />} text="Notifications" />
          <SideBarIcon
            icon={<BsFillGearFill />}
            text="Settings"
            setDisplay={() => {
              setDisplay(3);
            }}
          />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
