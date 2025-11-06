"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {
  const dropdownItems = [
    {
      id: 1,
      img: "/images/svgs/next-cat-icon.svg",
      title: "Nextjs Version",
      href: "https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56#product-demo-section",
    },
    {
      id: 2,
      img: "/images/svgs/angular-cat-icon.svg",
      title: "Angular Version",
      href: "https://adminmart.com/product/matdash-material-angular-dashboard-template/?ref=56#product-demo-section",
    },
    {
      id: 3,
      img: "/images/svgs/vue-cat-icon.svg",
      title: "Vuejs Version",
      href: "https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-demo-section",
    },
    {
      id: 4,
      img: "/images/svgs/nuxt-cat-icon.svg",
      title: "Nuxtjs Version",
      href: "https://adminmart.com/product/matdash-vuetify-nuxt-js-admin-template/?ref=56#product-demo-section",
    },
    {
      id: 5,
      img: "/images/svgs/react-cat-icon.svg",
      title: "React Version",
      href: "https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56#product-demo-section",
    },
    {
      id: 6,
      img: "/images/svgs/bt-cat-icon.svg",
      title: "Bootstrap Version",
      href: "https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/?ref=56#product-demo-section",
    },
  ];

  return (
    <div className="py-3.5 px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,#0f0533_0%,#1b0a5c_100%)]">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left Section */}
        <div className="md:flex hidden items-center gap-5">
          <Link href="https://adminmart.com/">
            <Image
              src="/images/logos/logo-adminmart.svg"
              alt="Adminmart Logo"
              width={150}
              height={30}
            />
          </Link>
          <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
            <Link
              target="_blank"
              href="https://adminmart.com/templates/nextjs/"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:window-frame-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Templates</h4>
            </Link>
            <Link
              target="_blank"
              href="https://adminmart.com/support/"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:question-circle-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Help</h4>
            </Link>
            <Link
              target="_blank"
              href="https://adminmart.com/hire-us/"
              className="flex items-center gap-2 text-white hover:text-[#5d87ff]"
            >
              <Icon icon="solar:case-round-linear" width={20} />
              <h4 className="text-base text-white hover:text-[#5d87ff] font-normal">Hire Us</h4>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <h4 className="text-sm text-white uppercase font-semibold bg-[linear-gradient(90deg,#FFFFFF_0%,#8D70F8_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]">
            Checkout Pro Version
          </h4>

          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="live-preview-drop rounded-lg border border-[#ffffff66] hover:bg-[#5d87ff]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="py-2 px-4 text-white text-base font-normal">
                      Live Preview
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56 bg-white shadow-md rounded-lg">
                    {dropdownItems.map((item) => (
                      <DropdownMenuItem key={item.id} asChild>
                        <Link
                          href={item.href}
                          target="_blank"
                          className="flex items-center gap-3 text-base text-[#000c29] py-2 px-3 hover:bg-[#000c290d] rounded-lg"
                        >
                          <img src={item.img} width={18} alt={item.title} />
                          <span>{item.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                target="_blank"
                href="https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56"
                className="flex items-center px-4 py-[11px] rounded-lg gap-2 text-white bg-[#3772ff] hover:bg-[#5d87ff]"
              >
                <Icon icon="solar:crown-linear" width={18} />
                <h4 className="text-base font-normal leading-none text-white">
                  Get Pro
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
