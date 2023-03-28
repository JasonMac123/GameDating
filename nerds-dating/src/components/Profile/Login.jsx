import React, { useState } from "react";
import axios from "axios";
import FieldBlankError from "./FieldsBlankError";
import NotAValidUser from "./NotAValidUser";
import IncorrectPassword from "./IncorrectPassword";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [error, setError] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/login", user).then((result) => {
      if (result.data === 1) {
        setError(1);
      } else if (result.data === 2) {
        setError(2);
      } else if (result.data === 3) {
        setError(3);
      } else {
        props.setUserID(result.data.id);
        props.setRegID(result.data.id)
        props.setDisplay(3);
      }
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    props.setDisplay(2);
  };

  return (
    <section className="gradient-form h-screen bg-zinc-300">
      <div className="container h-full p-10 mx-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-stone-500 shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="">
                    <div className="text-center mt-3">
                      <img
                        className="mx-auto w-48 mb-4"
                        src="https://media.discordapp.net/attachments/1083878227883331647/1089174129451737098/twiglet_one_color_stylish_symbol_of_man_and_woman_happy_with_ga_361b4ae6-6dff-4f94-b043-f7d222b8558e.png?width=660&height=660"
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                        Gamers Only
                      </h4>
                    </div>
                    <div className="bg-stone-500 rounded">
                      <form
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        className="md:mx-6 md:p-12"
                      >
                        <p className="mb-4">Please login to your account:</p>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            className="peer block min-h-[auto] bg-white w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-black transition-all duration-200 ease-linear"
                            id="email"
                            value={user.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Email"
                          />
                        </div>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] bg-white w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-black transition-all duration-200 ease-linear"
                            id="password"
                            value={user.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-4 pt-1 pb-1 text-center">
                          {/* <input type="submit" onClick={handleSubmit} /> */}
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
                            Login
                          </button>
                          {error === 1 && <FieldBlankError />}
                          {error === 2 && <NotAValidUser />}
                          {error === 3 && <IncorrectPassword />}
                        </div>
                        <div className="items-center">
                          <p className="mb-4">Don't have an account?</p>
                          <button
                            type="button"
                            className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={handleRegister}
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      A place for gamers to find true love or just play some
                      games together
                    </h4>
                    <p className="text-sm">
                      Gamers only is a place for people who have a shared
                      interest of games and nerd culture. It is a site designed
                      to connect people who have similar interests so that you
                      can chat about these topics and play games together.
                      Whether you're looking for a romantic or platonic
                      relationship is up to you!
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

export default Login;
