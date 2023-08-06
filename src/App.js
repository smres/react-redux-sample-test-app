import "./App.css";
import ProductList from "./components/ProductList";

// Components
import ProductDetails from './components/ProductDetails';
import Test1 from './components/Test1';
// import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container-fluid">
      {/* <ProductList /> */}
      <h1>First Redux Sample App</h1>
      <div className="row">
        <div className="col">
          <Test1 /></div>
        <div className="col">
          <ProductDetails />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
