import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-80 w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5e615f] to-white">
      <Image
        height={200}
        width={280}
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={"/referent"}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer px-6">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
