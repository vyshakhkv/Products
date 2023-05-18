import { Routes, Route } from "react-router-dom";

import AddProduct from "./AddProduct";

import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";







import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
import Edit from "./Edit";


const AdminHome = () => {
    return (
        <div className="adminHome">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboard />} />

                <Route path='/view-prod' element={<ProductList />} />


                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/edit-product' element={<EditProduct/>} />
                <Route path='/edit' element={<Edit/>} />
                <Route path='/edit/:id' element={<EditProduct/>}/>
                
                




            </Routes>
        </div>
    );
}

export default AdminHome;