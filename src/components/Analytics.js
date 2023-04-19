import React from "react";
import flatpickr from "flatpickr";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareCaretDown,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

const Analytics = () => {
  useEffect(() => {
    flatpickr(".flatpickr", {
      mode: "range",
      dateFormat: "d M ",
      onClose: function (selectedDates, dateStr, instance) {
        // Do something with the selected dates
        console.log(selectedDates);
      },
    });
  }, []);
  return (
    <>
      <div class="bg-white p-6 mr-2 mb-[-30px]">
        <div class="flex flex-wrap items-center justify-between mb-2 w-full">
          <h2 class="text-2xl font-bold text-black mr-6 mb-2 ml-4">
            Campaign Analytics
          </h2>
          <div class="flex items-center rounded-lg bg-grey border border-gray-300 px-4">
            <FontAwesomeIcon icon={faCalendar} />
            <input
              type="text"
              class="px-2 py-1 w-24 h-8 text-sm bg-grey border-0 focus:outline-none flatpickr"
              data-range="true"
              placeholder="Select range"
            />
            <FontAwesomeIcon icon={faSquareCaretDown} />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 ">
          <div class="py-4 pl-4">
            <h2 class="text-sm mb-2 text-greyLight">Invitations Sent</h2>
            <p class="text-gray-600 text-2xl">286</p>
          </div>
          <div class="py-4 pl-4 ">
            <h2 class="text-sm mb-2 text-greyLight">Pending Invitations</h2>
            <p class="text-gray-600 text-2xl">12</p>
          </div>
          <div class="py-4 pl-4 ">
            <h2 class="text-sm mb-2 text-greyLight">Profile Views</h2>
            <p class="text-gray-600 text-2xl">2891</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
