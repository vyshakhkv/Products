import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            
            <div className="links">
                <ul>
                <li><Link to='/admin/'>Dashboard</Link></li>
                
                
                <li><Link to='/admin/view-prod'>Product List</Link></li>
                <li><Link to='/admin/add-product'>Add Product</Link></li>
                <li><Link to='/admin/edit'>Edit & Delete </Link></li>
                
                
                
                </ul>

            </div>

        </div>
     );
}
 
export default AdminNavbar;