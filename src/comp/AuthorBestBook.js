import "./AuthorBestBook.css"
const AuthorBook = () => {
    return (
      <div className="author-book">
        <h1 className="text-center" data-aos="zoom-in-up">
          Author’s Best Book
        </h1>
        <p className="text-center fs-5 mx-auto" data-aos="zoom-in-up">
          The Historical mystery A detective's pursuit through ancient streets
          unveils secrets that time can't erase.
        </p>

        <div className="author-books-show pt-5">
          <div className="row ">
            <div data-aos="zoom-in-right" className="col-6 d-flex gap-3 ">
              <div className="book-img">
                <img
                  src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                  alt=""
                />
              </div>
              <div className="book-desc d-flex flex-column justify-content-center align-items-start">
                <h3 className="fs-4">Soldier by olivia wilson</h3>
                <h2 className="fs-2 fw-bold">$ 29.00 USD</h2>
                <p className="book-desc-p fs-6">
                  Olivia Soldier A heroic journey of sacrifice and resilience.
                  Unforgettable war narrative.
                </p>
                <div className="d-flex align-items-center gap-2 check pb-4">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <span className="fw-normal fs-5">Personal trainer</span>
                </div>
                <button className="fw-bold">Order now</button>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="col-6 d-flex gap-3">
              <div className="book-img">
                <img
                  src="https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium"
                  alt=""
                />
              </div>
              <div className="book-desc d-flex flex-column justify-content-center align-items-start">
                <h3 className="fs-4">Echoes of your soul</h3>
                <h2 className="fs-2 fw-bold">$ 80.00 USD</h2>
                <p className="book-desc-p fs-6">
                  Echoes soul melody in prose. Poetry's reflection of emotions.
                  Dive into Echoes of Your Soul.
                </p>
                <div className="d-flex align-items-center gap-2 check pb-4">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <span className="fw-normal fs-5">Personal trainer</span>
                </div>
                <button className="fw-bold">Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default AuthorBook;