"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";

const TotalIncome = () => {
  const ChartData: any = {
    series: [
      {
        name: "monthly earnings",
        color: "var(--color-error)",
        data: [30, 25, 35, 20, 30, 40],
      },
    ],
    chart: {
      id: "total-income",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-darkgray rounded-xl shadow-xs p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-lighterror text-error p-3 rounded-md">
          <Icon icon="solar:box-linear" height={24} />
        </div>
        <p className="text-lg card-title">Total Income</p>
      </div>

      {/* Body */}
      <div className="flex">
        <div className="flex-1">
          <p className="text-xl text-dark dark:text-white mb-2">$680</p>

          {/* Shadcn Badge replacement */}
          <Badge
            className="bg-lightsuccess text-success hover:bg-lightsuccess/80 text-xs px-2 py-1"
          >
            +18%
          </Badge>

          <p className="text-success text-xs"></p>
        </div>

        {/* Chart */}
        <div className="rounded-bars flex-1 md:ps-7">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="area"
            height="60px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalIncome;
