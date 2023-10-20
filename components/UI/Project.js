import React from "react";
import { Card } from "flowbite-react";
import ProjectItem from "./ProjectItem";
import imgai1 from "../../public/asset/ai1.jpg";
import imgai2 from "../../public/asset/ai2.jpg";
import imgai3 from "../../public/asset/ai3.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <h2 className="text-4xl mb-16 md:text-center md:text-5xl lg:text-6xl tracking-widest font-semibold text-black">
          AI MACHINE REFERENT
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <ProjectItem title="" backgroundImg={imgai1} />
          <ProjectItem title="" backgroundImg={imgai2} />
          <ProjectItem title="" backgroundImg={imgai3} />
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <Card>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About AI Machine
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              AI Machine ให้บริการผลิตเครื่องจักรอุตสาหกรรม เกี่ยวกับ Automatic
              และ Robotic
            </p>
          </Card>
        </div>
      </div>

      <div className="flex flex-col bg-slate-100 h-52 text-center justify-center items-center gap-4">
        <h2 className="text-gray-700 text-2xl font-semibold">
          SERVICE IS OUR MAIN PRO{" "}
        </h2>
        <p className="text-xl font-normal text-gray-500">
          AI Machine Company Limited is very pleased and proud to have the
          opportunity <br></br> to serve customers.
        </p>
      </div>
    </div>
  );
};

export default Projects;
