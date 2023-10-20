import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navtop from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../public/asset/refai1.png";
import img2 from "../public/asset/refai2.png";
import img3 from "../public/asset/refai3.png";
import img4 from "../public/asset/refai4.png";
import img5 from "../public/asset/refai5.png";
import img6 from "../public/asset/refai6.png";
import img7 from "../public/asset/refai7.png";
import imgai1 from "../public/asset/ai1.jpg";
import imgai2 from "../public/asset/ai2.jpg";
import imgai3 from "../public/asset/ai3.jpg";
import { Card } from "flowbite-react";

const Referent = () => {
  return (
    <>
      <Head>
        <title>REFERENT</title>
        <meta
          name="description"
          content="Fraud and Risk Management,Campaign Management,E-Notification,Digital Signature,Self Register,Electronic Donation,API Gateway,Vaccine Report,Contact Center,Maintenance and Support"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navtop />

      <div className="bg-gray-50">
        <div className="container mx-auto xl:px-40 px-8 py-20" id="referent">
          {/* <span className="grid justify-items-end">
            <Link target="_blank" href="Konklom Company Profile.pdf">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Download PDF
              </a>
            </Link>
          </span> */}

          <h5 className="uppercase mb-16 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            AI MACHINE PRODUCT
          </h5>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                เครื่องตัดผ้า (Fabric Cutting Machine)
              </h5>
              <Image src={img1} alt="img1" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                Spec เครื่องตัดผ้า (Fabric Cutting Machine)
              </h5>
              <Image src={img2} alt="img2" />
            </Card>

            <Card>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                เครื่องปั๊มโลโก (Pad Printer Machine)
              </h5>
              <Image src={img3} alt="img3" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                Spec เครื่องปั๊มโลโก (Pad Printer Machine)
              </h5>
              <Image src={img4} alt="img4" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                เครื่องล้างอุลตร้าโซนิค (Ultrasonic Cleaning Machine)
              </h5>

              <Image src={img5} alt="img5" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                Spec เครื่องล้างอุลตร้าโซนิค (Ultrasonic Cleaning Machine)
              </h5>

              <Image src={img6} alt="img6" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                ตู้ Control Panel
              </h5>

              <Image src={img7} alt="img7" />
            </Card>

            <Card>
              <Image src={imgai1} alt="imgai1" />
            </Card>

            <Card>
              <Image src={imgai2} alt="imgai2" />
            </Card>

            <Card>
              <Image src={imgai3} alt="imgai3" />
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Referent;
