import React, { useState } from "react";
import axios from "axios";
import FieldBlankError from "./FieldsBlankError";
import ExistingUser from "./ExistingUser";

function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    profile_picture: "",
    cover_picture: "",
    gender_identity: "",
    gender_preference: "",
    summary: "",
  });

  const [error, setError] = useState(0);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/register", user).then((result) => {
      if (result.data === 1) {
        setError(1)
      }
      else if (result.data === 2) {
        setError(2)
      }
      else {
        props.setRegID(result.data.id);
        props.setDisplay(3);
      }
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    props.setDisplay(1);
  };

  return (
    <section className="gradient-form h-full bg-zinc-300">
      <div className="container h-full p-10 mx-auto">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 rounded lg:flex lg:flex-wrap bg-stone-500">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-4"
                        src="https://media.discordapp.net/attachments/1083878227883331647/1089174129451737098/twiglet_one_color_stylish_symbol_of_man_and_woman_happy_with_ga_361b4ae6-6dff-4f94-b043-f7d222b8558e.png?width=660&height=660"
                        alt="logo"
                      />
                      <h1 className='mt-1 mb-12 pb-1 text-xl font-semibold'>Gamers Only</h1>
                    </div>
                    <form autoComplete="off" onSubmit={handleSubmit}>

                      <p className="mb-4">Please register an account:</p>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.name}
                          name="name"
                          onChange={handleChange}
                          placeholder="Name"
                        />
                      </div>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="email"
                          className="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.email}
                          name="email"
                          onChange={handleChange}
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.password}
                          name="password"
                          onChange={handleChange}
                          placeholder="Password"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.phone_number}
                          name="phone_number"
                          onChange={handleChange}
                          placeholder="Phone-Number"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.profile_picture}
                          name="profile_picture"
                          onChange={handleChange}
                          placeholder="Profile Picture"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.cover_picture}
                          name="cover_picture"
                          onChange={handleChange}
                          placeholder="Cover Picture"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <fieldset className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear">
                          <h4>Please select your gender identity:</h4>
                          <div>
                            <input
                              type="radio"
                              id="female"
                              name="gender_identity"
                              value="F"
                              onClick={handleChange}
                            />
                            <label htmlFor="female">Female</label>
                            <br />
                            <input
                              type="radio"
                              id="male"
                              name="gender_identity"
                              value="M"
                              onClick={handleChange}
                            />
                            <label htmlFor="male">Male</label>
                            <br />
                            <input
                              type="radio"
                              id="both"
                              name="gender_identity"
                              value="O"
                              onClick={handleChange}
                            />
                            <label htmlFor="both">Other</label>
                          </div>
                        </fieldset>
                      </div>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <fieldset className="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear">
                          <h4>Please select your gender preference:</h4>
                          <div>
                            <input
                              type="radio"
                              id="female"
                              name="gender_preference"
                              value="F"
                              onClick={handleChange}
                            />
                            <label htmlFor="female">Female</label>
                            <br />
                            <input
                              type="radio"
                              id="male"
                              name="gender_preference"
                              value="M"
                              onClick={handleChange}
                            />
                            <label htmlFor="male">Male</label>
                            <br />
                            <input
                              type="radio"
                              id="both"
                              name="gender_preference"
                              value="B"
                              onClick={handleChange}
                            />
                            <label htmlFor="both">Both</label>
                          </div>
                        </fieldset>
                      </div>

                      {/* <div className="relative mb-4" data-te-input-wrapper-init>
                        <fieldset className="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear">
                          <h4>Distance Limit for Matches:</h4>
                          <p>{user.distance_limit} km</p>
                          <input
                            type="range"
                            min="1"
                            max="1000"
                            className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                            value={user.distance_limit}
                            name="distance_limit"
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div> */}

                      {/* <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="number"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.distance_limit}
                          name="distance_limit"
                          onChange={handleChange}
                          placeholder="Distance limit for matches"
                        />
                      </div> */}

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.summary}
                          name="summary"
                          onChange={handleChange}
                          placeholder="Summary"
                        />
                      </div>

                      <div className="mb-3 pt-1 pb-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          onClick={handleSubmit}
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Sign up
                        </button>
                        {error === 1 && (<FieldBlankError />)}
                        {error === 2 && (<ExistingUser />)}
                      </div>

                      <div className="items-center">
                        <p className="mb-4 mr-2">Have an account?</p>
                        <button
                          type="button"
                          className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={handleLogin}
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Login
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      A place for gamers to find true love or just play some games together
                    </h4>
                    <p className="text-sm">
                      Gamers only is a place for people who have a
                      shared interest of games and nerd culture.
                      It is a site designed to connect people who have similar
                      interests so that you can chat about these topics and play games
                      together. Whether you're looking for a romantic or platonic relationship
                      is up to you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
