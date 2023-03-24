import { AiTwotoneHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import checkForMatch from "../helpers/checkForMatch";
import addNewLike from "../helpers/addNewLikes";
import notify from "../helpers/notifyMatch";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion"

export default function Profile(props) {
  console.log(props);
  let side = 100;
  const MatchMapper = (matches) => {
    for (let match of matches) {
      return (<motion.div
            className="flex w-screen"
            animate={{ y: -100 }}
            transition={{stiffness: 100 }}
          >

            <div className="left-0 flex h-screen w-1/2 justify-center items-center ">
              <img
                className="object-scale-down max-w-lg max-h-96 p-2"
                src={match.cover_picture}
                alt="Cover Pic"

              />
            </div>
            <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16" >
              <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
                {match.name}
              </div>
              <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
                {match.summary}
              </div>
              <div className="flex  justify-between">
                <motion.button
                  className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
                  onClick={() => {
                    addNewLike(props.currentUser, match.id, false);
                    props.discard();
                    side = -100;
                  }}
                >
                  <ImCross />
                </motion.button>
                <motion.button
                  className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
                  onClick={() => {
                    addNewLike(props.currentUser, match.id, true);
                    checkForMatch(props.currentUser, match, notify)
                    props.discard();
                    side = 100;
                  }}
                >
                  <AiTwotoneHeart />
                </motion.button>
              </div>
              <div>
              </div>
            </div>
          </motion.div>)
      
    }
  }

  //<motion.div animate={{ x: 100 }} />

  //   return (
  //     <div className="flex h-screen bg-stone-100  pl-16">
  //       {props.potentialMatches?.length > 0 && (
  //         <>
  //           <div className="left-0 flex h-screen w-1/2 justify-center items-center ">
  //             <img
  //               className="object-scale-down max-w-lg max-h-96 p-2"
  //               src={props.potentialMatches[0]?.cover_picture}
  //               alt="Cover Pic"

  //             />
  //           </div>
  //           <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16" >
  //             <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
  //               {props.potentialMatches[0]?.name}
  //             </div>
  //             <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
  //               {props.potentialMatches[0]?.summary}
  //             </div>
  //             <div className="flex  justify-between">
  //               <button
  //                 className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
  //                 onClick={() => {
  //                   addNewLike(props.currentUser, props.potentialMatches[0]?.id, false);
  //                   props.discard();
  //                 }}
  //               >
  //                 <ImCross />
  //               </button>
  //               <button
  //                 className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
  //                 onClick={() => {
  //                   addNewLike(props.currentUser, props.potentialMatches[0]?.id, true);
  //                   checkForMatch(props.currentUser, props.potentialMatches[0], notify)
  //                   props.discard();
  //                 }}
  //               >
  //                 <AiTwotoneHeart />
  //               </button>
  //             </div>
  //             <div>
  //             </div>
  //           </div>
  //         </>
  //       )}
  //       {props.potentialMatches.length === 0 && (
  //         <div
  //           className="flex flex-col justify-center items-center w-full"
  //         >
  //           <img
  //             src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
  //             alt="Sad Jigglypuff"
  //           ></img>
  //           We do not have anymore potential matches for you at the moment, please
  //           check back periodically for new potential matches.
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div className="flex h-screen bg-stone-100  pl-16">
      <AnimatePresence>
        {props.potentialMatches?.length > 0 && (
          // <motion.div
          //   className="flex w-screen"
          //   animate={{ x: -side }}
          //   transition={{stiffness: 100 }}
          // >

          //   <div className="left-0 flex h-screen w-1/2 justify-center items-center ">
          //     <img
          //       className="object-scale-down max-w-lg max-h-96 p-2"
          //       src={props.potentialMatches[0]?.cover_picture}
          //       alt="Cover Pic"

          //     />
          //   </div>
          //   <div className="flex flex-col  w-1/2 gap-2 py-16 pr-16" >
          //     <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
          //       {props.potentialMatches[0]?.name}
          //     </div>
          //     <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
          //       {props.potentialMatches[0]?.summary}
          //     </div>
          //     <div className="flex  justify-between">
          //       <motion.button
          //         className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
          //         onClick={() => {
          //           addNewLike(props.currentUser, props.potentialMatches[0]?.id, false);
          //           props.discard();
          //           side = -200;
          //         }}
          //       >
          //         <ImCross />
          //       </motion.button>
          //       <motion.button
          //         className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
          //         onClick={() => {
          //           addNewLike(props.currentUser, props.potentialMatches[0]?.id, true);
          //           checkForMatch(props.currentUser, props.potentialMatches[0], notify)
          //           props.discard();
          //           side = 200;
          //         }}
          //       >
          //         <AiTwotoneHeart />
          //       </motion.button>
          //     </div>
          //     <div>
          //     </div>
          //   </div>
          // </motion.div>
          <div>
            {MatchMapper(props.potentialMatches)}
          </div>

        )}
      </ AnimatePresence>
      <AnimatePresence>
        {props.potentialMatches.length === 0 && (
          <motion.div
            className="flex flex-col justify-center items-center w-full"
            animate={{ y: -side }}
            transition={{stiffness: 50 }}
          >
            <img
              src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
              alt="Sad Jigglypuff"
            ></img>
            We do not have anymore potential matches for you at the moment, please
            check back periodically for new potential matches.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}