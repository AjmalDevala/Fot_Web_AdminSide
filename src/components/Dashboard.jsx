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
           
            {/* <div class="col-span-12 mt-5">
              <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div class="bg-white p-4 shadow-lg rounded-lg">
                  <h1 class="font-bold text-base">Table</h1>
                  <div class="mt-4">
                    <div class="flex flex-col">
                      <div class="-my-2 overflow-x-auto">
                        <div class="py-2 align-middle inline-block min-w-full">
                          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                            <table class="min-w-full divide-y divide-gray-200">
                              <thead>
                                <tr>
                                  <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex cursor-pointer">
                                      <span class="mr-2">PRODUCT NAME</span>
                                    </div>
                                  </th>
                                  <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex cursor-pointer">
                                      <span class="mr-2">Stock</span>
                                    </div>
                                  </th>
                                  <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex cursor-pointer">
                                      <span class="mr-2">STATUS</span>
                                    </div>
                                  </th>
                                  <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex cursor-pointer">
                                      <span class="mr-2">ACTION</span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>Apple MacBook Pro 13</p>
                                    <p class="text-xs text-gray-400">
                                      PC & Laptop
                                    </p>
                                  </td>
                                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>77</p>
                                  </td>
                                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div class="flex text-green-500">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                      <p>Active</p>
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div class="flex space-x-4">
                                      <a
                                        href="#"
                                        class="text-blue-500 hover:text-blue-600"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="w-5 h-5 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          />
                                        </svg>
                                        <p>Edit</p>
                                      </a>
                                      <a
                                        href="#"
                                        class="text-red-500 hover:text-red-600"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="w-5 h-5 mr-1 ml-3"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          />
                                        </svg>
                                        <p>Delete</p>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
