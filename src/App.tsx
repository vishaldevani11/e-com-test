import { FunctionComponent } from "react";
import Page from "./components/Page";
import Offer from "./components/Offer";
import NavigationColumn from "./components/NavigationColumn";
import Footer from "./components/Footer";
import "./styles/CategoryPage.css";


function App() {
  return (
    <div className="App">
     <div className="category-bedroom-products-page">
      <Page />
      <div className="category-bedroom-products-page-child" />
      <div className="category-bedroom-products-page-item" />
      <div className="category-bedroom-products-page-inner" />
      <div className="rectangle-div" />
      <main className="promotion">
        <Offer />
        <section className="navigation-panel">
          <NavigationColumn />
        </section>
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;
