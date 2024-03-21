import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import MoviesList from "./cine/MoviesList";
import { MovieContext, ThemeContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
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
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default App;
