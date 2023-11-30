import "./Topbooks.css";
const Topbooks = () => {
  const elements = [
    {
      ico: "bi bi-stars fs-1 ",
      title: "Best Quality ",
      desc: "Premium Book Elegance and Durability Combined in this Best Quality Accessory.",
    },
    {
      ico: "bi bi-tree-fill fs-1",
      title: "Quick & Friendly",
      desc: "Quick and friendly service for your tech needs. Expert assistance in minutes.",
    },
    {
      ico: "bi bi-grid-1x2-fill fs-1",
      title: "Easy to Learn",
      desc: "amaze with a skillful perform. express joy wherever you go with easy-to-learn.",
    },
    {
      ico: "bi bi-send-fill fs-1",
      title: "Handwritten",
      desc: "Printed Crisp black text on white, conveying timeless in a classic book.",
    },
  ];

  return (
    <div className="top-books py-5">
      <h1 className="text-center" data-aos="zoom-in-up">
        Book's Top Feature
      </h1>
      <p className="text-center fs-5 mx-auto" data-aos="zoom-in-up">
        Your trusted source for the finest. We consistently provide products
        that embody excellence and gain your confidence.
      </p>
      <div className="top-books-features d-flex align-items-center justify-content-between gap-4 pt-5">
        {elements.map((ele , index) => {
          return (
            <div
              data-aos="zoom-in-up"
              data-aos-delay={100 * index}
              key={index}
              className="top-books-features-feature "
            >
              <i className={ele.ico}></i>
              <h3 className="fs-3 py-4">{ele.title} </h3>
              <p className="fs-5 pb-3">{ele.desc} </p>
              <button className="top-books-btn">
                <i className="bi bi-arrow-right fs-4"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topbooks;
