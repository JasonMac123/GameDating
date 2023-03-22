import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/login", user).then((result) => {
      if (!result.data) {
        console.log("no data");
      } else {
        console.log(result);
        props.setUserID(result.data.id);
        props.setDisplay(3);
      }
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    props.setDisplay(2);
  };

  return (
    <section className="gradient-form h-screen bg-gradient-to-br from-amber-200 via-violet-600 to-sky-900 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://cdn-icons-png.flaticon.com/512/188/188932.png"
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                        Gamers Only
                      </h4>
                    </div>
                    <div className="bg-gradient-to-l from-purple-200 via-purple-400 to-purple-800 rounded">
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
                            className="peer block min-h-[auto] bg-white w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-red-600 transition-all duration-200 ease-linear"
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
                            className="peer block min-h-[auto] bg-white w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-red-600 transition-all duration-200 ease-linear"
                            id="password"
                            value={user.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-12 pt-1 pb-1 text-center">
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
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
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
                      A place for gamers to find true love
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
