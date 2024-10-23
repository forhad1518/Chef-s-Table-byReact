import Banner from "./components/header/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/main/Recipes";

const App = () => {
  return (
    <div>
      {/* Header Container */}
      <header>
        <Header></Header>
        <Banner></Banner>
      </header>
      <br />
      <br />
      <main>
        {/* Our Recipes */}
        <Recipes></Recipes>
      </main>
    </div>
  );
};

export default App;