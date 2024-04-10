"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({
  parameter,
}: {
  parameter: { makanan: number; minuman: number; kue: number; penajoh: number };
}) {
  const data = {
    labels: ["Makanan", "Minuman", "Kue", "Penajoh"],
    datasets: [
      {
        label: "# kategori",
        data: [
          parameter.makanan,
          parameter.minuman,
          parameter.kue,
          parameter.penajoh,
        ],
        backgroundColor: [
          "rgba(234,88,12)",
          "rgb(37,99,235)",
          "rgb(22,163,74)",
          "rgb(192,38,211)",
        ],
        borderColor: [
          "rgb(124,45,18)",
          "rgb(30,58,138)",
          "rgb(20,83,45)",
          "rgb(112,26,117)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
