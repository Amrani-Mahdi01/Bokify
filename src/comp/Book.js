import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import { gsap } from "gsap";

const BookD = (props) => {
  // const star = useRef()



  // Number to multiply
  const multiplier = props.ele.rating;

  const multipliedLiElements = Array.from(
    { length: multiplier },
    (_, index) => <i key={index} className="bi bi-star-fill starts"></i>
  );

  useEffect(() => {
    gsap.to(".books-img", {
      duration: 1.5,
      ease: "elastic.out(1,0.3)",
      opacity: 1,
      delay: 1,
      scale: 1,
    });
  }, []);
  gsap.to(".book-title", {
    duration: 1,
    ease: "power4.out",
    delay: 1,
    opacity: 1,
  });
  gsap.to(".book-price", {
    duration: 1,
    ease: "power4.out",
    delay: 1.5,
    opacity: 1,
  });
  gsap.to(".starts", {
    duration: 1,
    ease: "elastic.out(1,0.3)",
    delay: 2,
    scale : 1,
    opacity: 1,
    stagger: 0.3,
  });
  gsap.to(".book-desc-1", {
    duration: 1,
    ease: "power4.out",
    delay: 2.5,
    opacity: 1,
  });
  gsap.to(".every", {
    duration: 1,
    ease: "power4.out",
    delay: 3,
    opacity: 1,
    x: 0,
    stagger: 0.5,
  });
  gsap.to(".read", {
    duration: 1,
    ease: "elastic.out(1,0.3)",
    delay: 3.5,
    scale: 1,
  });

  return (
    <>
      <div className="row book py-5 justify-content-between">
        <div className="col-6 d-flex justify-content-center img">
          <img className="books-img" src={props.ele.image} alt="" />
        </div>
        <div className="col-5 pt-5">
          <h1 className="book-title fs-4">{props.ele.title} </h1>
          <p className="fs-1 fw-semibold book-price">{props.ele.price} </p>
          <p className="d-flex gap-1 ">{multipliedLiElements}</p>
          <p className="d-flex gap-1 lh-2 desc fs-6 fw-normal book-desc-1">
            {props.ele.desc}
          </p>
          <div className="profil-book d-flex align-items-center gap-3 my-2 every">
            <i className="bi bi-check-circle-fill fs-4"></i>
            <h5 className="fw-semibold fs-4 "> by {props.ele.authors} </h5>
          </div>

          <p className="details  fs-5 py-1 fw-semibold every">
            Publisher: &nbsp; <span>{props.ele.publisher} </span>{" "}
          </p>

          <p className="details fs-5 py-1  fw-semibold every">
            Paperback: &nbsp; <span>{props.ele.pages} </span>{" "}
          </p>
          <p className="details fs-5 py-1  fw-semibold every">
            Year: &nbsp; <span>{props.ele.year} </span>{" "}
          </p>
          <Link className="read" to={props.ele.url}>
            <button className="btn btn-primary mt-4 read ">Check it </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookD;
