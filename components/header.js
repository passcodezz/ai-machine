import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Infinite from "../logoai.json";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-orange-400 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AI</span>{" "}
                  <span className="block text-gray-900 xl:inline">MACHINE</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Focus on the development of modern production with standard
                  quality and services that meet the needs of customers.
                </p>

                <div className="mt-8 flex gap-x-4 lg:justify-start md:justify-center ">
                  <Link href="/contact">
                    <a
                      href="#"
                      className="rounded-full inline-block  bg-orange-400 hover:bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 "
                    >
                      CONTACT
                    </a>
                  </Link>
                  <Link href="/referent">
                    <a
                      href="#"
                      className="rounded-full inline-block px-4 py-1.5 text-base font-semibold leading-7  text-gray-900 ring-1 ring-gray-900/10 hover:text-emerald-900"
                    >
                      Product & Service
                    </a>
                  </Link>
                </div>
              </motion.div>{" "}
            </div>
          </main>
        </div>
      </div>
      <div className="flex items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <Lottie className="lg:w-96 w-70" loop={true} animationData={Infinite} />
      </div>
    </div>
  );
}
