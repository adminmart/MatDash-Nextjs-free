"use client";
import Image from "next/image";
import { TbPoint } from "react-icons/tb";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BlogCardsData = [
  {
    avatar: "/images/profile/user-2.jpg",
    coveravatar: "/images/blog/blog-img1.jpg",
    read: "2 min Read",
    title: "As yen tumbles, gadget-loving Japan goes for secondhand iPhones",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url: "",
  },
  {
    avatar: "/images/profile/user-3.jpg",
    coveravatar: "/images/blog/blog-img2.jpg",
    read: "2 min Read",
    title: "Intel loses bid to revive antitrust case against patent foe Fortress",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url: "",
  },
  {
    avatar: "/images/profile/user-4.jpg",
    coveravatar: "/images/blog/blog-img3.jpg",
    read: "2 min Read",
    title: "COVID outbreak deepens as more lockdowns loom in China",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url: "",
  },
];

const BlogCards = () => {
  return (
    <div className="grid grid-cols-12 gap-30">
      {BlogCardsData.map((item, i) => (
        <div className="lg:col-span-4 col-span-12" key={i}>
          <Link href={item.url} className="group">
            <div className="rounded-xl dark:shadow-dark-md shadow-xs bg-white dark:bg-darkgray relative w-full overflow-hidden">
              {/* Blog Image */}
              <div className="relative">
                <Image
                  src={item.coveravatar}
                  alt="blog cover"
                  width={500}
                  height={240}
                  className="w-full object-cover"
                />
                {/* Read Time Badge */}
                <Badge variant={"gray"} className="absolute bottom-5 right-5">
                  {item.read}
                </Badge>
              </div>

              {/* Blog Content */}
              <div className="px-6 pb-6">
                {/* Author Avatar */}
                <Image
                  src={item.avatar}
                  className="h-10 w-10 rounded-full -mt-7 relative z-10"
                  alt="author"
                  width={40}
                  height={40}
                />

                {/* Category Badge */}
                <Badge variant={"gray"} className="mt-6">
                  {item.category}
                </Badge>

                {/* Title */}
                <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">
                  {item.title}
                </h5>

                {/* Stats Row */}
                <div className="flex">
                  <div className="flex gap-2 me-6 items-center">
                    <Icon
                      icon="solar:eye-outline"
                      height="18"
                      className="text-darklink"
                    />
                    <span className="text-sm text-darklink">{item.view}</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Icon
                      icon="solar:chat-line-outline"
                      height="18"
                      className="text-darklink"
                    />
                    <span className="text-sm text-darklink">{item.comments}</span>
                  </div>

                  <div className="flex gap-1 items-center ms-auto">
                    <TbPoint size={15} className="text-darklink" />
                    <span className="text-sm text-darklink">{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
