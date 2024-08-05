//Third party libraries:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Components
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import Login from './Pages/LogIn';
import Homepage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'
import AppLayout from "./Pages/AppLayOut";
import Citylist from "./Components/Citylist";
import CountriesList from "./Components/CountriesList";


import { useEffect, useState } from "react";

const BASE_URLS = 'http://localhost:9000';

function App() {

  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URLS}/Details`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert("Something was wrong:")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Citylist cities={cities} isLoading={isLoading} />} />
          <Route path='cities' element={<Citylist cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;