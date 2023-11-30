import { useEffect, useRef } from "react";
import logo from "../imges/64f936a74c0ef83f9685a26d_logo-primary.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    const logoimg = document.querySelector(".logo");
    const elements = document.querySelectorAll(".list");
    const icons = document.querySelectorAll(".header .icons");
    gsap.to(elements, {
      duration: 1,
      ease: "elastic.out(1.5,0.3)",
      y: "0px",
      stagger: 0.2,
    });
    gsap.to(logoimg, { duration: 2, ease: "elastic.out(1,0.4)", scale: 1 });
    gsap.to(icons, { duration: 2, ease: "power4.out", opacity: 1, delay: 1 });
  }, []);
  return (
    <div className="header mb-4">
      <Link to="/">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
      </Link>

      <ul className="nav gap-5">
        <Link to="/">
          {" "}
          <li className="list">Home</li>
        </Link>
        <li className="list">Blog</li>
        <li className="list">Shop</li>
        <li className="list">Contact</li>
      </ul>

      <div className="profil-cart d-flex justify-content-center gap-3 align-items-center">
        <div className="profil-icon icons">
          <i className="bi bi-person  "></i>
        </div>
        <span className="icons"></span>
        <div className="search-icon">
          <Link to={"/searchBook"}>
            {" "}
            <i className="bi bi-search icons"></i>
          </Link>
        </div>
        <span className="icons"></span>
        <div className="cart-icon icons">
          <span>0</span>

          <i className="bi bi-bag "></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
