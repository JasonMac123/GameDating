const SideBarIcon = (props) => {
  return (
    <div
      className="relative flex items-center justify-center h-20 w-20 mt-2 mb-2 
        mx-auto shadow-lg bg-white hover:bg-red-400 hover:text-white rounded-2xl
        transition-all duration-300 ease-linear group"
      onClick={props.setDisplay}
    >
      {props.icon}
      <span
        className="absolute w-auto p-2 m-2 min-w-max left-20 rounded-md shadow-md
       text-white bg-red-700 scale-0 text-xs font-bold group-hover:scale-100 transition-all ease-in z-10 origin-left"
      >
        {props.text}
      </span>
    </div>
  );
};

export default SideBarIcon;
