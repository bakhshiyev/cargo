import { Routes, Route, useParams } from "react-router-dom";

import Addresses from "./pages/Addresses";
import Packages from "./pages/Packages";
import Balance from "./pages/Balance";
import Home from "./pages/Home";
import LoginRegistrationForm from "./components/login/LoginRegistrationForm";
import News from "./components/home/News";
import Contact from "./components/home/Contact";
import Tariff from "./components/home/Tariff";
import Layout from "./components/layout/Layout";


function App() {
  // const params = useParams();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<LoginRegistrationForm />} />
      <Route path='/addresses' element={<Addresses />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/balance' element={<Balance />} />
      <Route path='/news' element={<Layout><News /></Layout>} />
      <Route path='/contact' element={<Layout><Contact /></Layout>} />
      <Route path='/tariff' element={<Layout><Tariff /></Layout>} />
    </Routes>
  );
}

export default App;
