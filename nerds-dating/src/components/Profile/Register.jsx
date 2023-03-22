import React, { useState } from "react";
import axios from "axios";

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

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/register", user).then((result) => {
      props.setUserID(result.data.id);
      props.setDisplay(3);
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    props.setDisplay(1);
  }

  return (
    <section class="gradient-form h-full bg-black dark:bg-neutral-700">
      <div class="container h-full p-10">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div class="w-full">
            <div
              class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div class="g-0 lg:flex lg:flex-wrap bg-gradient-to-r from-pink-400 to-pink-600">
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://res.cloudinary.com/teepublic/image/private/s--Mlyx9Zg1--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_auto,h_630,q_90,w_630/v1611931472/production/designs/18991833_0.jpg"
                        alt="logo" />
                      <h1>Gamers Only</h1>
                    </div>

                    <form autoComplete="off" onSubmit={handleSubmit}>
                      <p class="mb-4">Please register an account:</p>
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                          value={user.name}
                          name="name"
                          onChange={handleChange}
                          placeholder="Name"

                        />
                      </div>
                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <input
                          type="email"
                          class="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.email}
                          name="email"
                          onChange={handleChange}
                          placeholder="Email"
                        />
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>


                        <input
                          type="password"
                          class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.password}
                          name="password"
                          onChange={handleChange}
                          placeholder="Password"
                        />
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.phone_number}
                          name="phone_number"
                          onChange={handleChange}
                          placeholder="Phone-Number"
                        />
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.profile_picture}
                          name="profile_picture"
                          onChange={handleChange}
                          placeholder="Profile Picture"
                        />
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.cover_picture}
                          name="cover_picture"
                          onChange={handleChange}
                          placeholder="Cover Picture"
                        />
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <fieldset class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
                        >
                          <h4>Please select your gender preference:</h4>
                          <div>
                            <input
                              type="radio"
                              id="female"
                              name="gender_identity"
                              value="female"
                              onClick={handleChange}
                            />
                            <label for="female">Female</label>
                            <br />
                            <input
                              type="radio"
                              id="male"
                              name="gender_identity"
                              value="male"
                              onClick={handleChange}
                            />
                            <label for="male">Male</label>
                            <br />
                            <input
                              type="radio"
                              id="both"
                              name="gender_identity"
                              value="both"
                              onClick={handleChange}
                            />
                            <label for="both">Both</label>
                          </div>
                        </fieldset>
                      </div>
                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <fieldset class="peer block min-h-[auto] bg-white w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear"
                        >
                          <h4>Please select your gender preference:</h4>
                          <div>
                            <input
                              type="radio"
                              id="female"
                              name="gender_preference"
                              value="female"
                              onClick={handleChange}
                            />
                            <label for="female">Female</label>
                            <br />
                            <input
                              type="radio"
                              id="male"
                              name="gender_preference"
                              value="male"
                              onClick={handleChange}
                            />
                            <label for="male">Male</label>
                            <br />
                            <input
                              type="radio"
                              id="both"
                              name="gender_preference"
                              value="both"
                              onClick={handleChange}
                            />
                            <label for="both">Both</label>
                          </div>
                        </fieldset>
                      </div>

                      <div class="relative mb-4" data-te-input-wrapper-init>

                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"

                          value={user.summary}
                          name="summary"
                          onChange={handleChange}
                          placeholder="Summary"
                        />
                      </div>

                      <div class="mb-12 pt-1 pb-1 text-center">
                        <button
                          class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          onClick={handleSubmit}
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                          Sign up
                        </button>
                      </div>
                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">Have an account?</p>
                        <button
                          type="button"
                          class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={handleLogin}
                          style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                  <img
                    class="object-cover h-full w-full"
                    src="https://c4.wallpaperflare.com/wallpaper/923/727/796/anime-digital-art-artwork-2d-portrait-display-hd-wallpaper-preview.jpg"
                    alt="logo" />
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
