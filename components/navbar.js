import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../public/images/logothai.jpg";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import classes from "/styles/navber.module.css";
import { motion, AnimatePresence } from "framer-motion";

const navigation = {
  categories: [
    {
      id: "Brand",
      name: "Brand",
      featured: [
        {
          name: "MISUMI",
          href: "/brand/brnd_misumi",
          imageSrc:
            "https://play-lh.googleusercontent.com/q-gbqfR5Ux6wB340vOCCU5hcgkCvrhRiljrNRkade3znim55Y83I3Xp3oSAfe1lNRg",
          imageAlt: "",
        },
        {
          name: "POPULAR BRAND",
          href: "/brand/brnd_misumi",
          imageSrc:
            "https://misumitechnical.com/wp-content/uploads/2021/02/146492472_3729816247109761_1646118015681769018_o.jpg",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "Misumi Brand",
          name: "Misumi Brand",
          items: [{ name: "MISUMI", href: "/brand/brnd_misumi" }],
        },
        {
          id: "Popular Brand",
          name: "Popular Brand",
          items: [
            { name: "SMC", href: "/brand/brnd_smc" },
            { name: "MITSUBISHI ELECTRIC", href: "/brand/brnd_misu" },
            { name: "THK", href: "/brand/brnd_thk" },
            { name: "OMRON", href: "/brand/brnd_omron" },
            { name: "OSG", href: "/brand/brnd_osg" },
            { name: "MITUTOYO", href: "/brand/brnd_mitutoyo" },
            { name: "PATLITE", href: "/brand/brnd_patlite" },
          ],
        },
        {
          id: "Popular Brand",
          name: "Popular Brand",
          items: [
            { name: "IDEC", href: "/brand/brnd_idec" },
            { name: "SCHNEIDER ELECTRIC", href: "/brand/brnd_schneider" },
            { name: "NTN", href: "/brand/brnd_ntn" },
            { name: "3M", href: "/brand/brnd_3m" },
            { name: "TRUSCO", href: "/brand/brnd_trusco" },
            { name: "TAKIGEN", href: "/brand/brnd_takigen" },
            { name: "TONE", href: "/brand/brnd_tone" },
          ],
        },
      ],
    },
    {
      id: "Category",
      name: "Category",
      featured: [
        {
          name: "",
          href: "/",
          imageSrc:
            "https://th.misumi-ec.com/en/operation/top/img/banner/technical_blog.png",
          imageAlt: "",
        },
        {
          name: "",
          href: "/",
          imageSrc:
            "https://th.misumi-ec.com/en/operation/top/img/allcategory/heading/20220711/mro_product.png",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "Categorys",
          name: "Categorys",
          items: [
            {
              name: "Automation Components",
              href: "/categorys/ctgr_automation",
            },
            { name: "Fasteners", href: "/categorys/ctgr_fasteners" },
            { name: "Materials", href: "/categorys/ctgr_materials" },
            { name: "Wiring Components", href: "/categorys/ctgr_wiring" },
          ],
        },
        {
          id: "Categorys",
          name: "Categorys",
          items: [
            {
              name: "Electrical & Controls",
              href: "/categorys/ctgr_electrical",
            },
            { name: "Cutting Tools", href: "/categorys/ctgr_cutting" },
            { name: "Processing Tools", href: "/categorys/ctgr_processing" },
            {
              name: "Material Handling & Storage",
              href: "/categorys/ctgr_materialhandling",
            },
          ],
        },
        {
          id: "Categorys",
          name: "Categorys",
          items: [
            {
              name: "Safety & General Supplies",
              href: "/categorys/ctgr_safety",
            },
            {
              name: "Lab & Clean Room Supplies",
              href: "/categorys/ctgr_labclean",
            },
            { name: "Press Die Components", href: "/categorys/ctgr_pressdie" },
            {
              name: "Plastic Mold Components",
              href: "/categorys/ctgr_plastic",
            },
            {
              name: "Injection Molding Components",
              href: "/categorys/ctgr_injection",
            },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Product & Service", href: "/referent" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navtop() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <div ref={headerRef}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex mt-40">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href}>
                        <a className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white z-50">
        <div className="bg-gradient-to-r bg-amber-300 h-14 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          {/* aimachine.co.th */}
        </div>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-24 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}

              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <Image
                    alt="logo"
                    src={logo}
                    width="70"
                    height="70"
                    objectFit="fill"
                    className="d-inline-block align-top w-10 h-15"
                  />
                </a>
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.pages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
