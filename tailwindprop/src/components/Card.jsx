import React from 'react'

function Card({username}){
  console.log(username)

  return(
    <div class="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
    <h2 class="text-3xl font-bold">Your cart</h2>
    <p class="mt-3 text-sm font-medium text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius
      repellat ipsam, sit praesentium incidunt.
    </p>
    <ul class="flex flex-col divide-y divide-gray-200">
      <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div class="flex w-full space-x-2 sm:space-x-4">
          <img
            class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
            alt="Nike Air Force 1 07 LV8"
          />
          <div class="flex w-full flex-col justify-between pb-4">
            <div class="flex w-full justify-between space-x-2 pb-2">
              <div class="space-y-1">
                <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                 {username}
                </h3>
                <p class="text-sm">Orange</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold">₹47,199</p>
              </div>
            </div>
            <div class="flex divide-x text-sm">
              <button
                type="button"
                class="flex items-center space-x-2 px-2 py-1 pl-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Remove</span>
              </button>
              <button type="button" class="flex items-center space-x-2 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <span>Add to favorites</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div class="flex w-full space-x-2 sm:space-x-4">
          <img
            class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png"
            alt="Nike Blazer Low 77 SE"
          />
          <div class="flex w-full flex-col justify-between pb-4">
            <div class="flex w-full justify-between space-x-2 pb-2">
              <div class="space-y-1">
                <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                  Nike Blazer Low 77 SE
                </h3>
                <p class="text-sm">White</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold">₹1,549</p>
              </div>
            </div>
            <div class="flex divide-x text-sm">
              <button
                type="button"
                class="flex items-center space-x-2 px-2 py-1 pl-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Remove</span>
              </button>
              <button type="button" class="flex items-center space-x-2 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <span>Add to favorites</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div class="flex w-full space-x-2 sm:space-x-4">
          <img
            class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png"
            alt="Nike Air Max 90"
          />
          <div class="flex w-full flex-col justify-between pb-4">
            <div class="flex w-full justify-between space-x-2 pb-2">
              <div class="space-y-1">
                <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                  Nike Air Max 90
                </h3>
                <p class="text-sm">Black</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold">₹2219 </p>
              </div>
            </div>
            <div class="flex divide-x text-sm">
              <button
                type="button"
                class="flex items-center space-x-2 px-2 py-1 pl-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Remove</span>
              </button>
              <button type="button" class="flex items-center space-x-2 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <span>Add to favorites</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="space-y-1 text-right">
      <p>
        Total amount:<span class="font-semibold"> ₹48,967</span>
      </p>
    </div>
    <div class="flex justify-end space-x-4">
      <button
        type="button"
        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Back to shop
      </button>
      <button
        type="button"
        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Checkout
      </button>
    </div>
  </div>
  
   )
  }
 export default Card