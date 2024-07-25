
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import Login from './Pages/LogIn';
import Homepage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'
import AppLayout from "./Pages/AppLayOut";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List Of Cities </p>} />
          <Route path='cities' element={<p>List of cities:</p>} />
          <Route path="countries" element={<p>list of countries:</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;