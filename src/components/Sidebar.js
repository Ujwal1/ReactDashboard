import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-64 bg-sidenavbar">
        <div className="flex items-center justify-center h-16 p-bottom-10 pt-8">
          <span className="text-white text-2xl font-bold">
            <code>&lt;/&gt;</code> Realply
          </span>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto pt-3 ">
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Dashboard
          </button>
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Messages
          </button>
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Calendar
          </button>
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Campaigns
          </button>
          <div className="mt-6"></div>
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Help
          </button>
          <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
            Settings
          </button>
          <div className="mt-8 px-4">
            <div className="rounded-lg mt-4 p-6 border-solid border-2 border-texthover space-y-2 ">
              <h2 className="text-xl font-bold mb-2 text-white">
                Your Free Trial is about to end in 10 days
              </h2>
              <p className="text-texthover">
                Please upgrade your plan to access our service.
              </p>
              <button className="px-6 py-3 text-white hover:bg-gray-700 rounded-lg border-solid border-2 border-texthover">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <button className="px-6 py-3 text-white text-left hover:bg-gray-700 hover:text-texthover hover:border-l-4">
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
