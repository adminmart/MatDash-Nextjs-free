import RevenueForecast from "../components/dashboard/RevenueForecast";
import NewCustomers from "../components/dashboard/NewCustomers";
import TotalIncome from "../components/dashboard/TotalIncome";
import ProductRevenue from "../components/dashboard/ProductRevenue";
import DailyActivity from "../components/dashboard/DailyActivity";
import BlogCards from "../components/dashboard/BlogCards";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        <div className="lg:col-span-8 col-span-12">
          <RevenueForecast />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 h-full items-stretch">
            <div className="col-span-12 mb-30">
              <NewCustomers />
            </div>
            <div className="col-span-12">
              <TotalIncome />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <ProductRevenue />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <DailyActivity />
        </div>
        <div className="col-span-12">
          <BlogCards />
        </div>
        <div className="col-span-12 text-center">
          <p className="text-base">
            Design and Developed by{" "}
            <Link
              href="https://adminmart.com/"
              target="_blank"
              className="pl-1 text-primary underline decoration-primary"
            >
              adminmart.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
