import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsLis";
import GetOneProduct from "./entities/services/GetOneProduct";
import ProductsLimitedFive from "./entities/services/ProductsLimitedFive";
import SortProducts from "./entities/services/SortProducts";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
        <LoginForm />
        </div>
        {/* <ProductList /> */}
        {/* <GetOneProduct/> */}
        {/* <ProductsLimitedFive/> */}
        {/* <SortProducts/> */}

      </div>
    </>
  );
}

export default App;
