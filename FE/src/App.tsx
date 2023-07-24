
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Dashboard from "./components/admin/products/dashboardProduct";
import AddProduct from "./components/admin/products/addProduct";
import EditProduct from "./components/admin/products/editProduct";


import DashboardCategory from "./components/admin/categories/dashboardCategory";
import EditCategory from "./components/admin/categories/editCategory";
import AddCategory from "./components/admin/categories/addCategory";
import HomePage from "./components/user/product/product";
import ProductDetail from "./components/user/product/productDetail";
import Header from "./layouts/user/search";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/products/:id" element={<ProductDetail/>} />

            <Route path="/admin/products" element={<Dashboard/>}></Route>
            <Route path="/admin/products/edit/:id" element={<EditProduct/>}></Route>
            <Route path="/admin/products/add" element={<AddProduct/>}></Route>
      
            <Route path="/admin/categories" element={<DashboardCategory/>}></Route>
            <Route path="/admin/categories/edit/:id" element={<EditCategory/>}></Route>
            <Route path="/admin/categories/add" element={<AddCategory/>}></Route>

        </Routes>
      </BrowserRouter>
    );
};

export default App;

// closure
// currying
