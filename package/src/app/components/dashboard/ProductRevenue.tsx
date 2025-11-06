"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductRevenue = () => {
  const ProductTableData = [
    {
      img: "/images/products/dash-prd-1.jpg",
      name: "Minecraf App",
      seller: "Jason Roy",
      process: "73.2%",
      statuscolor: "text-green-600",
      statusbg: "bg-green-100",
      statustext: "Low",
    },
    {
      img: "/images/products/dash-prd-2.jpg",
      name: "Web App Project",
      seller: "Mathew Flintoff",
      process: "73.2%",
      statuscolor: "text-yellow-600",
      statusbg: "bg-yellow-100",
      statustext: "Medium",
    },
    {
      img: "/images/products/dash-prd-3.jpg",
      name: "Modernize Dashboard",
      seller: "Anil Kumar",
      process: "73.2%",
      statuscolor: "text-purple-600",
      statusbg: "bg-purple-100",
      statustext: "Very High",
    },
    {
      img: "/images/products/dash-prd-4.jpg",
      name: "Dashboard Co",
      seller: "George Cruize",
      process: "73.2%",
      statuscolor: "text-red-600",
      statusbg: "bg-red-100",
      statustext: "High",
    },
  ];

  return (
    <div className="rounded-xl shadow-xs bg-white dark:bg-darkgray pt-6 px-0 w-full">
      <div className="px-6">
        <h5 className="card-title mb-6 text-lg font-semibold">
          Revenue by Product
        </h5>
      </div>

      <ScrollArea className="max-h-[450px]">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-6">Assigned</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Budget</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {ProductTableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap ps-6">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="h-[60px] w-[60px] rounded-md object-cover"
                      />
                      <div className="truncate max-w-56">
                        <h6 className="text-sm font-medium">{item.name}</h6>
                        <p className="text-xs text-gray-500">{item.seller}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <p className="text-base">{item.process}</p>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${item.statusbg} ${item.statuscolor} border-none`}
                    >
                      {item.statustext}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <h4 className="font-semibold">$3.5k</h4>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProductRevenue;
