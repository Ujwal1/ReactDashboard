import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxHeight: 10,
        boxWidth: 10,
      },
    },
  },
  layout: {
    padding: {
      bottom: 20,
    },
  },
};

//const labels = ['January', 'February', 'march'];

export const data = {
  labels: [""],
  datasets: [
    {
      label: "Connections",
      data: [430],
      backgroundColor: "rgb(195, 236, 193)",
    },
    {
      label: "Follows",
      data: [290],
      backgroundColor: "rgb(31,31,31)",
    },
    {
      label: "Connect Invites",
      data: [780],
      backgroundColor: "rgb(198,199,246)",
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <div class="w-2/5 bg-grey pl-14 pr-14">
        <h1 class="text-3xl font-black mt-8 mb-8">Dashboard</h1>
        <div class="flex flex-col mb-4">
          <div class="p-4 border-b-2 border-b-greyLight relative">
            <h2 class="text-sm font-bold mb-2 text-greyLight">Connections</h2>
            <p class="text-gray-600 text-2xl relative">
              2532
              <span class="absolute top-0 right-0 bg-green text-greenText rounded-lg h-6 w-10 flex items-center justify-center text-sm font-extrabold">
                +56%
              </span>
            </p>
          </div>
          <div class="p-4 border-b-2 border-b-greyLight relative">
            <h2 class="text-sm font-bold mb-2 text-greyLight">Followers</h2>
            <p class="text-gray-600 text-2xl relative">
              2667
              <span class="absolute top-0 right-0 bg-green text-greenText rounded-lg h-6 w-10 flex items-center justify-center text-sm font-extrabold">
                +12%
              </span>
            </p>
          </div>
          <div class="p-4 relative">
            <h2 class="text-sm font-bold mb-2 text-greyLight">
              Connect Invites
            </h2>
            <p class="text-gray-600 text-2xl relative">
              100
              <span class="absolute top-0 right-0 bg-green text-greenText rounded-lg h-6 w-10 flex items-center justify-center text-sm font-extrabold">
                +34%
              </span>
            </p>
          </div>
        </div>
        <div class="flex-grow mt-10">
          <Bar options={barOptions} data={data} height={300} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
