import Image from "next/image";
import styles from "../../styles/homepage.module.css";
import img1 from "../../public/images/manager-1.png";
import img2 from "../../public/images/application-1.png";
import img3 from "../../public/images/settings.png";
import Link from "next/link";

// import icon1 from "../../public/images/icon1.png";
// import icon2 from "../../public/images/icon2.png";
// import icon3 from "../../public/images/icon3.png";
// import icon4 from "../../public/images/icon4.png";

const Section_image = ({
  listUser = [
    {
      title: "PROFESSIONAL",
      text: "Engineer Consultation Team",
      Image: "https://phopautomation.vercel.app/images/icon1.png",
    },
    {
      title: "AUTHORIZED DISTRIBUTOR",
      text: "Genuine Product Guarantee",
      Image: "https://phopautomation.vercel.app/images/icon2.png",
    },
    {
      title: "SKILLFULL",
      text: "Installation Team",
      Image: "https://phopautomation.vercel.app/images/icon3.png",
    },
  ],
}) => {
  return (
    <>
      {/* <div className="flex mb-4">
  <div className="w-1/3 bg-gray-400 h-12"></div>
  <div className="w-1/3 bg-gray-500 h-12"></div>
  <div className="w-1/3 bg-gray-400 h-12"></div>
</div> */}
      <div>
        <div className=" justify-center  flex flex-row  ">
          {/* <div className="basis-1/4  ">
            <div>
              <div className=" bg-white rounded-lg p-3 shadow-xl">
                <Link href="#">
                  <a>
                    <Image
                      alt="img"
                      src={img1}
                      width="250"
                      height="200"
                      objectFit="scale-down"
                      className="image d-inline-block align-top"
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>PROFESSIONAL</b>
                  </h5>
                  <p className="card-text">Engineer Consultation Team</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="basis-1/4  col-lg-4 col-md-12">
            <div>
              <div className="p-3 mx-5  mb-3">
                <Link href="#">
                  <a>
                    <Image
                      alt="img"
                      src={img2}
                      width="250"
                      height="200"
                      objectFit="scale-down"
                      className="d-inline-block align-top"
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>PROFESSIONAL</b>
                  </h5>
                  <p className="card-text">Engineer Consultation Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/4 col-lg-4 col-md-12">
            <div>
              <div className="p-3 mx-5  mb-5">
                <Link href="#">
                  <a>
                    <Image
                      alt="img"
                      src={img3}
                      width="250"
                      height="200"
                      objectFit="scale-down"
                      className="d-inline-block align-top"
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>PROFESSIONAL</b>
                  </h5>
                  <p className="card-text">Engineer Consultation Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_image;
