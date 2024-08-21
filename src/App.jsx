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
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./contexts/ContextApis";


function App() {
  
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />

          {/* Nested router code */}
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Citylist />} />

            {/*URLs For Book mark: using param*/}
            <Route path="cities/:id" element={<City />} />

            <Route path="cities" element={<Citylist />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;