import Banner from "./components/header/Banner";
import Header from "./components/header/Header";
import Items from "./components/main/items/Items";
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
        <br />
        <br />
        <Items></Items>
      </main>
    </div>
  );
};

export default App;