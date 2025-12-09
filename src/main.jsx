import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './components/users/login.jsx'
import Signup from './components/users/signup.jsx'
import Home from './components/users/home.jsx'
import AddCategory from './components/admin/addCategory.jsx'
import {CategoryList}  from './components/users/categoryList.jsx'
import { AddProduct } from './components/admin/addProduct.jsx'
import {ProductCard} from './components/users/productCard.jsx'

const router=createBrowserRouter(
createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/categorylist" element={<CategoryList/>}/>
    <Route path="/productcard" element={<ProductCard/>}/>


    // admin
     <Route path="/admin/addcategory" element={<AddCategory/>}/>
     <Route path="admin/addproduct" element={<AddProduct/>}/>

  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
