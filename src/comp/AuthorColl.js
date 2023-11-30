import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AuthorColl.css";

const Authorcoll = () => {
  const Btns = [ "MongoDb", "Html", "Css" , "JavaScript" , "Bootstrap"];
  const [ind, setInd] = useState();
  const [books, setBooks] = useState([]);




  const Hendlefilter = (ind) => {
    fetch( Btns[ind] ===  "All" ?  "https://api.itbook.store/1.0/new" :  `https://api.itbook.store/1.0/search/` + Btns[ind])
      .then((res) => res.json())
      .then((res) => setBooks(res.books));
  };

  const HendleActive = (indx) => {
    setInd(indx);
  };

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((req) => req.json())
      .then((respons) => setBooks(respons.books));
    Hendlefilter();
  }, []);

  return (
    <div className="Author-coll">
      <h1 data-aos="zoom-in-up" className="text-center">
        Author collection
      </h1>
      <p data-aos="zoom-in-up" className="text-center fs-5 mx-auto pb-5">
        Discover hidden gems from literary legends as their extraordinary
        stories unfold in this enchanting compendium.
      </p>
      <div className="Author-Fillters d-flex align-items-center justify-content-center gap-2">
        {Btns.map((ele, index) => {
          return (
            <button
              onClick={() => {
                HendleActive(index);
                Hendlefilter(index);
              }}
              key={index}
              className={ind === index ? "active" : null}
            >
              {ele}
            </button>
          );
        })}
        <Link to={"/searchBook"}>
          <button className="btn btn-info Others">Others</button>
        </Link>
      </div>

      <div className="books-container d-flex  justify-content-center gap-5 flex-wrap mt-5">
        {books.map((ele, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={50 * index}
              key={index}
              className="book-card d-flex flex-column "
            >
              <img src={ele.image} alt="" />

              <h2 className="fs-5 text-center">{ele.title} </h2>

              <h2 className="fs-6 text-center price fw-bold">{ele.price} </h2>

              <Link to={`/books/${ele.isbn13} `}>
                <button className="btn btn-primary"> Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Authorcoll;
