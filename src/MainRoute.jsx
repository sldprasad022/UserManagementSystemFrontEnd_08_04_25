import React from 'react'

import Home from './Pages/Home'
import { Routes,Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import CreateUser from './Pages/CreateUser';
import Login from "./Pages/Login";
import AdminHome from './AdminDashBoard/AdminPages/AdminHome';
import TotalUsers from './AdminDashBoard/AdminPages/TotalUsers';
import EditUser from './AdminDashBoard/AdminPages/EditUser';
import PrivateRoute from './PrivateRoute';
import ClickImages from './AdminDashBoard/AdminPages/ClickImages';
import AllUsers from './Pages/AllUsers';
import ProductsImages from './Pages/ProductsImages';

const MainRoute = () => {
  return (
    <div>
        <Routes>

            <Route path='/createUser' element={<CreateUser/>}/>
            <Route path='/' element={<Login/>}/>

            <Route path='/userdashboard' element={<Home/>}>
                <Route path='/userdashboard/aboutUs' element={<AboutUs/>}/>
                <Route path='/userdashboard/allusersdata' element={<PrivateRoute element={AllUsers} requiredRole="ROLE_USER" />} />
                <Route path='/userdashboard/productsimages' element={<ProductsImages/>} />
            </Route>

            <Route path='/admindashboard' element={<PrivateRoute element={AdminHome} requiredRole="ROLE_ADMIN" />}>
                <Route path='/admindashboard/totalUsers' element={<PrivateRoute element={TotalUsers} requiredRole='ROLE_ADMIN' />} />
                <Route path='/admindashboard/edit/:userId' element={<PrivateRoute element={EditUser} requiredRole='ROLE_ADMIN' />}/>
                <Route path='/admindashboard/clickImages' element={<PrivateRoute element={ClickImages} requiredRole='ROLE_ADMIN' />} />
            </Route>

        </Routes>
    </div>
  )
}

export default MainRoute