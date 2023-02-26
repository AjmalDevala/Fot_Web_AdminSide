import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [users, setAllUsers] = useState("");
  const [scouts, setAllScouts] = useState("");
  const [players, setAllPlayers] = useState("");
  useEffect(() => {
    axios.get("http://localhost:7007/api/admin/dashbord").then((response) => {
      console.log(response.data);
      setAllUsers(response.data.allUser);
      setAllScouts(response.data.allScout);
      setAllPlayers(response.data.allplayer);
    });
  }, []);


  return (
    <main class="">
      <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
        <div class="grid grid-cols-12 gap-6">
          <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div class="col-span-12 mt-8">
              <div class="flex items-center h-10 intro-y">
                <h2 class="mr-5 text-lg font-medium truncate text-teal-400 ">Dashboard</h2>
              </div>
              <div class="grid grid-cols-12 gap-6 mt-5">
                <a
                  class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div class="p-5">
                    <div class="flex justify-between">
                      <svg
                        // xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span class="flex items-center">30%</span>
                      </div>
                    </div>
                    <div class="ml-2 w-full flex-1">
                      <div>
                        <div class="mt-3 text-3xl text-black font-bold leading-8">
                          {users}
                        </div>

                        <div class="mt-1 text-base text-gray-600">
                           Total Player
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div class="p-5">
                    <div class="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span class="flex items-center">50%</span>
                      </div>
                    </div>
                    <div class="ml-2 w-full flex-1">
                      <div>
                        <div class="mt-3 text-3xl  text-slate-900 font-bold leading-8">
                          {scouts}
                        </div>

                        <div class="mt-1 text-base text-gray-600">
                          Total Scout 
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div class="p-5">
                    <div class="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                      <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span class="flex items-center">30%</span>
                      </div>
                    </div>
                    <div class="ml-2 w-full flex-1">
                      <div>
                        <div class="mt-3 text-3xl text-slate-900 font-bold leading-8">
                         {players}
                        </div>

                        <div class="mt-1 text-base text-gray-600">
                          Selected Player
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div class="p-5">
                    <div class="flex justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                      <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span class="flex items-center">30%</span>
                      </div>
                    </div>
                    <div class="ml-2 w-full flex-1">
                      <div>
                        <div class="mt-3 text-3xl font-bold leading-8">
                          4.510
                        </div>

                        <div class="mt-1 text-base text-gray-600">
                          base
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
