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

import { Doughnut, Radar } from "react-chartjs-2";

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

const donutData = {
  labels: ["Invitations sent", "Pending Invitations", "Profile views"],
  datasets: [
    {
      label: "value",
      data: [286, 12, 2891],
      backgroundColor: [
        "rgb(195, 236, 193)",
        "rgb(31,31,31)",
        "rgb(198,199,246)",
      ],
    },
  ],
};

const donutOptions = {
  responsive: true,
  width: "80%",
  height: "80%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxHeight: 10,
        boxWidth: 10,
        font: {
          size: 10, // set the font size for the legend labels
        },
      },
    },
  },
};

const radarOptions = {
  responsive: true,
  width: "80%",
  height: "80%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxHeight: 10,
        boxWidth: 10,
        font: {
          size: 10, // set the font size for the legend labels
        },
      },
    },
  },
};

const radarData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Campaign 1",
      data: [40, 80, 70, 40, 10, 80, 62],
      backgroundColor: "rgba(238,238,252,0.5)",
      borderColor: "rgb(221,221,249)",
      borderWidth: 1,
    },
    {
      label: "Campaign 2",
      data: [60, 20, 40, 10, 60, 50, 50],
      backgroundColor: "rgba(236,249,236,0.5)",
      borderColor: "rgb(208,240,206)",
      borderWidth: 1,
    },
  ],
};

const GraphAnalytics = () => {
  return (
    <>
      <div class="bg-white p-6 flex flex-wrap">
        <div class="w-full md:w-1/2 p-3">
          <Doughnut options={donutOptions} data={donutData} />
        </div>

        <div class="w-full md:w-1/2 p-3">
          <Radar options={radarOptions} data={radarData} />
        </div>
      </div>
    </>
  );
};

export default GraphAnalytics;
