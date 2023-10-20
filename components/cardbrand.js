import Slider from "react-slick";
import Image from "next/image";
import styles from "/styles/homepage.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const callouts = [
  {
    name: "SMC",
    images: "https://th.misumi-ec.com/en/operation/top/img/brand/smc.png",
    imageAlt: "",
    href: "/brnd_smc",
  },
  {
    name: "MITSUBISHI ELECTRIC",
    images:
      "https://th.misumi-ec.com/en/operation/top/img/brand/mitsubishi.png",
    imageAlt: "",
    href: "/brnd_misu",
  },
  {
    name: "OMRON",
    images: "https://th.misumi-ec.com/en/operation/top/img/brand/omron.png",
    imageAlt: "",
    href: "/brnd_omron",
  },
  {
    name: "INDEX",
    images: "/asset/index_logo.jpg",
    imageAlt: "",
    href: "/brnd_INDEX",
  },
  {
    name: "keyence",
    images:
      "https://vectorlogoseek.com/wp-content/uploads/2019/02/keyence-vector-logo.png",
    imageAlt: "",
    href: "/brnd_keyence",
  },
  {
    name: "siemens_logo",
    images:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/siemens_logo_icon_168830.png",
    imageAlt: "",
    href: "/brnd_siemens",
  },
];

export default function CardBrand() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-full lg:max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-14 px-10 lg:max-w-none">
          <Slider {...settings}>
            {callouts.map((callout) => (
              <motion.div
                key={callout.name}
                className="px-2 group relative"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: 1.2,
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                <div className="mt-6 relative bg-white rounded-lg overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 lg:h-24 lg:w-30 lg:aspect-w-1 lg:aspect-h-1">
                  <a>
                    <img
                      src={callout.images}
                      alt={callout.imageAlt}
                      className="w-full md:h-full lg:h-20 object-center object-scale-down"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-amber-300 h-14 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8"></div>
    </>
  );
}
