import Signin from "./components/user/login/Signin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./components/user/login/Signup";
import Dashboard from "./components/admin/products/dashboard";
import AddProduct from "./components/admin/products/addProduct";
import EditProduct from "./components/admin/products/editProduct";
import Product from "./components/user/product/Product";
import PriceFilter from "./demo/priceFilter";
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>}></Route>
           
            <Route path="/products" element={<Dashboard/>}></Route>
            <Route path="/user/products" element={<Product/>}></Route>
            <Route path="/edit/:id" element={<EditProduct/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/filter" element={<PriceFilter/>}></Route>
            
        </Routes>
      </BrowserRouter>
    );
};

export default App;

// closure
// currying
