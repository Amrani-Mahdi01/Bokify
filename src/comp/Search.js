import { useEffect, useState } from "react";
import "./Search.css"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Search = () => {

    AOS.init();

    const [book , setBooks] = useState(null)
    const [val , setVal] = useState()

    const Hendleserch = (e) => {
        setVal(e)

    }

    const Hendleclick = () => {
        if(val != ""){
            console.log(val)

            fetch(`https://api.itbook.store/1.0/search/${val}`)
              .then((res) => res.json())
              .then((res) => setBooks(res.books));
        }
    }

    useEffect(() => {
     Hendleclick()

    }, [])


    console.log(book);



    return (
      <div className="search-container mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="search-btn d-flex align-items-center gap-3 ">
          <input
            onChange={(e) => {
              Hendleserch(e.target.value);
            }}
            placeholder="Any Book in Mind ?"
            type="text"
            className="search-inp py-3 px-5 fs-3"
          />
          <i
            onClick={Hendleclick}
            className="bi bi-search search-btn-icon fs-2 pe-4"
          ></i>
        </div>
        <div className="search-result-container d-flex flex-wrap justify-content-center gap-5">
          {book && (
            <>
              {book.map((ele) => {
                return (
                  <div
                    data-aos="fade-up"
                    className="d-flex  flex-column justify-content-center align-items-center book-searched text-truncate"
                    key={ele.isbn13}
                  >
                    <img src={ele.image} alt="" />
                    <h1 className="fs-5 text-center book-searched-title">
                      {ele.title}{" "}
                    </h1>
                    <Link to={`/books/${ele.isbn13} `}>
                      <button className="btn btn-primary"> Details</button>
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    );
}
 
export default Search;