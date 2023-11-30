import "./HomeSec.css";
import AOS from "aos";
import image from "../imges/[fpdl.in]_book-cover-mockup_190445-688_large-PhotoRoom.png-PhotoRoom.png";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
const HomeSec = () => {
  AOS.init();

  const Hometitle = useRef();
  const Homelogo = useRef();
  const Homebtn = useRef();
  const Homeimg = useRef();

  useLayoutEffect(() => {
    gsap.to(Hometitle.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.out",
      y: 0,
      delay: 1.2
    });

    gsap.to(Homelogo.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.out",
      y: 0,
      delay: 1.7,
    });

    gsap.to(Homebtn.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.out",
      y: 0,
      delay: 2.7,
    });
    gsap.to(Homeimg.current, {
      duration: 1,
      opacity: 1,
      ease: "back.inOut(1)",
      scale: 1,
      delay: 2.7,
    });
  });

  return (
    <div className="row justify-content-between ">
      <div className="col-5 home-desc ">
        <h2 ref={Hometitle} className="fw-normal fs-3 home-desc-title">
          By bestseller author
        </h2>
        <h1 ref={Homelogo} className="display-1 fw-normal home-desc-title-logo">
          Meet your Next favorite Book
        </h1>
        <button ref={Homebtn} className=" mt-4 py-2 px-4 home-btn">
          Buy our book
        </button>
      </div>
      <div className="col-7 home-desc-img">
        <div className="img">
          <img ref={Homeimg} className="img-fluid Home-img" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec;
