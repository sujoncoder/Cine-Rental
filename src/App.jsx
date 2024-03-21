import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import MoviesList from "./cine/MoviesList";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MoviesList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;
