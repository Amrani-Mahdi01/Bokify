import "./App.css";
import AuthorBook from "./comp/AuthorBestBook";
import Authorcoll from "./comp/AuthorColl";
import Feature from "./comp/Feature";
import Header from "./comp/Header";
import HomeSec from "./comp/HomeSec";
import Topbooks from "./comp/Topbooks";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./comp/BookDetails";
import Search from "./comp/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <>
                <div className="home-section pb-5">
                  <div className="container-xl">
                    <Header />
                    <HomeSec />
                  </div>
                </div>
                <div className="Feature-section py-5 mb-5">
                  <div className="container-xl">
                    <Feature />
                  </div>
                </div>
                <div className="author-best-book py-5 mb-5">
                  <div className="container-xl">
                    <AuthorBook />
                  </div>
                </div>
                <div className="books-top-feature pb-5">
                  <div className="container-xl">
                    <Topbooks />
                  </div>
                </div>
                <div className="Author-collection pb-5 pt-5">
                  <div className="container-xl">
                    <Authorcoll />
                  </div>
                </div>
              </>
            }
          ></Route>
        </Route>
        <Route
          path="books/:bookId"
          element={
            <>
              <div className="container-xl">
                <Header />
                <BookDetails />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/searchBook"
          element={
            <>
            <div className="container-xl">
                <Header />
                <Search />
            </div>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
