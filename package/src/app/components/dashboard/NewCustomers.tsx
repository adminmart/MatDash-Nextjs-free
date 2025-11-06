"use client";
import { Icon } from "@iconify/react";
import { Progress } from "@/components/ui/progress";

const NewCustomers = () => {
  return (
    <div className="bg-white dark:bg-darkgray rounded-xl shadow-xs p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-lightsecondary text-secondary p-3 rounded-md">
          <Icon icon="solar:football-outline" height={24} />
        </div>
        <p className="text-lg card-title">New Customers</p>
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-ld">New goals</p>
        <p className="text-sm text-ld">83%</p>
      </div>

      <Progress
        value={83}
        className="h-2 bg-lightsecondary [&>div]:bg-secondary"
      />
    </div>
  );
};

export default NewCustomers;
