import { PaperClipIcon } from "@heroicons/react/solid";
import Head from "next/head";
import React from "react";
import Navtop from "../components/navbar";
import Footer from "../components/footer";
import Topfooter from "../components/UI/Topfooter";

export default function Contact() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="description" content="AI MACHINE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navtop />

      <div>
        <div className="container mx-auto xl:px-40 px-8 py-20">
          <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            About Us
          </h5>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg  p-10">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                AI Machine ให้บริการผลิตเครื่องจักรอุตสาหกรรม เกี่ยวกับ
                Automatic และ Robotic
              </dd>
            </div>
          </div>
        </div>
      </div>
      <Topfooter />
      <Footer />
    </>
  );
}
