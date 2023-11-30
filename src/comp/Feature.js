import "./Feature.css";
import img from "../imges/machine-ecrire-retro-aux-couleurs-vives-clavier-boutons.jpg";
import AOS from "aos";
const Feature = () => {
  AOS.init();
  return (
    <div className="feature d-flex justify-content-between align-items-center ">
      <div className="row justify-content-between ">
        <div className="col-5">
          <img
            data-aos="zoom-in"
            className="feature-img"
            src="https://images.pexels.com/photos/1394646/pexels-photo-1394646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="col-6 py-5 MTA-container align-items-start d-flex flex-column justify-content-center">
          <h4 data-aos="fade-up" className="Meet-the-author fs-3">
            {" "}
            Meet the author
          </h4>
          <h5 data-aos="fade-up" data-aos-delay="200" className="fs-2 py-2">
            {" "}
            Suzanne den Broek
          </h5>
          <p className="fs-5" data-aos="fade-up" data-aos-delay="300">
            An eloquent storyteller celebrated for her eloquence and grace.
            Rivers' historical fiction novels effortlessly transport readers to
            bygone eras, while her poetic prose weaves a tapestry of emotions.
            Her ability to breathe life into history has earned her the
            well-deserved title of the number one book author, adored by
            literature enthusiasts.
          </p>
          <div
            data-aos="zoom-out"
            className="d-flex align-items-center gap-5 mt-4 "
            data-aos-delay="400"
          >
            <div>
              <h3 className="fs-2 fw-bold">58+</h3>
              <h5 className="public-book">Books Published</h5>
            </div>
            <span className="line"></span>
            <div>
              <h3 className="fs-2 fw-bold">09+</h3>
              <h5 className="public-book">Books Published</h5>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="btns d-flex gap-3 mt-5"
          >
            <button className="fw-bold">Contact us</button>
            <button className="fw-bold">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
