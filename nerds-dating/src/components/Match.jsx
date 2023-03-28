import { AiTwotoneHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import checkForMatch from "../helpers/checkForMatch";
import addNewLike from "../helpers/addNewLikes";
import notify from "../helpers/notifyMatch";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import updateLocation from "../helpers/updateLocation";
import { toast } from "react-toastify";
import removeFirst from "../helpers/removeFirst";

export default function Profile(props) {
  const [filteredMatches, setFilteredMatches] = useState(
    props.potentialMatches
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setDistanceFilter(event.target[0].value);
    setFilteredMatches(
      props.potentialMatches.filter((match) => {
        if (
          getDistanceFromLatLonInKm(
            match.latitude,
            match.longitude,
            props.userLatitude,
            props.userLongitude
          ) < event.target[0].value
        ) {
          return match;
        }
      })
    );
    toast(
      `Your distance preference have been changed to ${event.target[0].value}km`
    );
  };

  const handleLiking = (userID) => {
    setFilteredMatches(removeFirst(filteredMatches));
    props.removeUserByID(userID);
  };

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  props.useCurrentUserMatches(props.currentUser);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        props.setUserLatitude(position.coords.latitude);
        props.setUserLongitude(position.coords.longitude);
        updateLocation(
          position.coords.latitude,
          position.coords.longitude,
          props.currentUser
        ).then(() => {
          setFilteredMatches(
            props.potentialMatches.filter((match) => {
              if (
                getDistanceFromLatLonInKm(
                  match.latitude,
                  match.longitude,
                  props.userLatitude,
                  props.userLongitude
                ) < props.distanceFilter
              ) {
                return match;
              }
            })
          );
        });
      });
    }
  }, []);

  const wrapperVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.1 },
    },
    start: {
      y: "50%",
      opacity: 0,
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    right: {
      x: ["0vh", "300vh", "-300vh", "0vh"],
      transition: {
        times: 1.6,
        ease: "easeInOut",
      },
    },
    left: {
      x: ["0vh", "-300vh", "300vh", "0vh"],
      transition: {
        times: 1.6,
        ease: "easeInOut",
      },
    },
    transit: {
      rotate: 360,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };
  
  const controls = useAnimationControls();
  const MatchMapper = (matches) => {
    for (let match of matches) {
      if (matches.indexOf(match) === 0) {
        return (
          <motion.div
            className="flex w-screen"
            transition={{ stiffness: 100 }}
            variants={wrapperVariants}
            animate={controls}
            initial="visible"
            exit="exit"
          >
            <div className="left-0 flex flex-col h-screen w-1/2 justify-center items-center pl-16">
              <img
                className="object-scale-down max-w-lg max-h-96 p-6"
                src={match.cover_picture}
                alt="Cover Pic"
              />
            </div>
            <div className="flex flex-col  w-1/2 gap-2 py-12 pr-12 space-y-4">
              <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
                {match.name}
              </div>

              {props.userLatitude !== "" && (
                <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-3xl">
                  {" "}
                  {Math.round(
                    getDistanceFromLatLonInKm(
                      match.latitude,
                      match.longitude,
                      props.userLatitude,
                      props.userLongitude
                    )
                  )}{" "}
                  km away!
                </div>
              )}
              

              <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
                {match.summary}
              </div>
              {"geolocation" in navigator && props.userLatitude !== "" && (
                <form
                  className="flex flex-col top-0 justify-center items-center bg-fuchsia-200 rounded-3xl text-l"
                  onSubmit={(event) => handleSubmit(event)}
                >
                  <label>
                    Match me with people within:
                    <input className="w-10" type="text" name="distance" />
                    km
                  </label>
                  <input className="bg-zinc-200" type="submit" value="Update" />
                </form>
              )}
              <div className="flex  justify-between">
                <motion.button
                  className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
                  onClick={() => {
                    addNewLike(props.currentUser, match.id, false)
                      .then(handleLiking(match.id))
                      .catch(() =>
                        toast(
                          "Error processing your request.  Please try again later!"
                        )
                      );
                    controls.start("left");
                  }}
                >
                  <ImCross />
                </motion.button>

                <motion.button
                  className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
                  onClick={() => {
                    addNewLike(props.currentUser, match.id, true).then(
                      handleLiking(match.id)
                    );
                    checkForMatch(props.currentUser, match, notify).catch(() =>
                      toast(
                        "Error processing your request.  Please try again later!"
                      )
                    );
                    controls.start("right");
                  }}
                >
                  <AiTwotoneHeart />
                </motion.button>
              </div>
              <div></div>
            </div>
          </motion.div>
        );
      }
      return (
        <motion.div
          className="flex w-screen"
          transition={{ stiffness: 100 }}
          variants={wrapperVariants}
          // animate={controls}
          animate={{ y: -200 }}
          initial="start"
          exit="exit"
        >
          <div className="left-0 flex h-screen w-1/2 justify-center items-center pl-16 ">
            
            <img
              className="object-scale-down max-w-lg max-h-96 p-6"
              src={match.cover_picture}
              alt="Cover Pic"
            />
          </div>
          <div className="flex flex-col  w-1/2 gap-2 py-12 pr-16 space-y-4">
            <div className="flex bg-fuchsia-200 rounded-3xl justify-center text-6xl">
              {match.name}
            </div>
            <div className="flex bg-fuchsia-200 grow rounded-3xl justify-center text-3xl">
              {match.summary}
            </div>
            {"geolocation" in navigator && props.userLatitude !== "" && (
              <form
                className="flex flex-col top-0 justify-center items-center bg-fuchsia-200 rounded-3xl text-l"
                onSubmit={(event) => handleSubmit(event)}
              >
                <label>
                  Match me with people within:
                  <input className="w-10" type="text" name="distance" />
                  km
                </label>
                <input className="bg-zinc-200" type="submit" value="Update" />
              </form>
            )}
            <div className="flex  justify-between">
              <motion.button
                className="bg-orange-400 hover:text-red-500 text-white font-bold py-2 px-4 rounded-full text-4xl"
                onClick={() => {
                  addNewLike(props.currentUser, match.id, false)
                    .then(handleLiking(match.id))
                    .catch(() =>
                      toast(
                        "Error processing your request.  Please try again later!"
                      )
                    );
                  controls.start("left");
                }}
              >
                <ImCross />
              </motion.button>
              <motion.button
                className="bg-orange-400 text-white hover:text-red-500 font-bold py-2 px-4 rounded-full text-4xl"
                onClick={() => {
                  addNewLike(props.currentUser, match.id, true).then(
                    handleLiking(match.id)
                  );
                  checkForMatch(props.currentUser, match, notify).catch(() =>
                    toast(
                      "Error processing your request.  Please try again later!"
                    )
                  );
                  controls.start("right");
                }}
              >
                <AiTwotoneHeart />
              </motion.button>
            </div>
            <div></div>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-stone-100 justify-center items-center">
      <div className="flex grow">
        <AnimatePresence>
          {filteredMatches?.length > 0 && (
            <div>{MatchMapper(filteredMatches)}</div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {filteredMatches.length === 0 && (
            <motion.div className="flex flex-col justify-center items-center  w-full space-y-10 pl-36">

              <div className="flex flex-col justify-center items-center  w-full space-y-10">
                <img
                  src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
                  alt="Sad Jigglypuff"
                ></img>
                We do not have anymore potential matches for you at the moment,
                please check back periodically for new potential matches.
              </div>

              <div className="flex w-1/2">
                {"geolocation" in navigator && props.userLatitude !== "" && (
                  <form
                    className="flex flex-col top-0 justify-center items-center bg-fuchsia-200 rounded-3xl text-l h-16 w-full"
                    onSubmit={(event) => handleSubmit(event)}
                  >
                    <label>
                      Match me with people within:
                      <input className="w-10" type="text" name="distance" />
                      km
                    </label>
                    <div>
                      <input
                        className="bg-zinc-200"
                        type="submit"
                        value="Update"
                      />
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
