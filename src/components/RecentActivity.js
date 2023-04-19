import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    imageSrc: "https://randomuser.me/api/portraits/men/52.jpg",
    textContent: "Message from Jackson",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/48.jpg",
    textContent: "Meeting with Lily at 10:00 am",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/52.jpg",
    textContent: "Jackson sent the draft",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/48.jpg",
    textContent: "Lily cancled the meeting.",
  },
];

function ListItem({ imageSrc, textContent }) {
  return (
    <div className="flex items-center mb-4 border-b border-gray-400">
      <img src={imageSrc} className="h-10 w-10 rounded-full mr-4 p-1 mb-2" alt="img"/>
      <p className="text-gray-600 text-base">{textContent}</p>
    </div>
  );
}

const RecentActivity = () => {
  return (
    <>
      <div class="bg-white px-6 mt-[-20] ml-4">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-black">Recent Activity</h2>
          <div class="relative inline-flex">
            <select class="border border-gray-300 rounded-xl text-gray-600 h-8 pl-5 pr-10 bg-grey hover:border-gray-400 focus:outline-none appearance-none relative">
              <option>Last 1 hr</option>
              <option>Last 2 hr</option>
              <option>Last 3 hr</option>
              <option>Last 4 hr</option>
              <option>Last 5 hr</option>
            </select>
            <FontAwesomeIcon
              icon={faSquareCaretDown}
              class="absolute h-8 w-8 top-0 right-0 bottom-0  px-2 pointer-events-none"
            />
          </div>
        </div>

        <div className="max-h-[94px] overflow-x-auto overflow-y-scroll">
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentActivity;
