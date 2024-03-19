import Header from "./Header";
import SideBar from "./SideBar";
import MoviesList from "./cine/MoviesList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MoviesList />
        </div>
      </main>
    </>
  );
};

export default App;
