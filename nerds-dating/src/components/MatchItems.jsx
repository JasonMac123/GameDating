import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion"

export default function MatchItems(props) {

  return (
    <motion.div
    className="flex w-screen"
    animate={{ x: -side }}
    transition={{stiffness: 100 }}
  >

    <div className="left-0 flex h-screen w-1/2 justify-center items-center ">
      <img
        className="object-scale-down max-w-lg max-h-96 p-2"
        src={props.cover_picture}
        alt="Cover Pic"

      />
    </div>
    <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16" >
      <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
        {props.name}
      </div>
      <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
        {props.summary}
      </div>
      <div className="flex  justify-between">
        <motion.button
          className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
          onClick={() => {
            // addNewLike(props.currentUser, ${match.id}, false);
            // props.discard();
            // side = -200;
          }}
        >
          <ImCross />
        </motion.button>
        <motion.button
          className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
          onClick={() => {
            // addNewLike(props.currentUser, ${match.id}, true);
            // checkForMatch(props.currentUser, ${match}, notify)
            // props.discard();
            // side = 200;
          }}
        >
          <AiTwotoneHeart />
        </motion.button>
      </div>
      <div>
      </div>
    </div>
  </motion.div>
  )
}