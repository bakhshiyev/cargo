import { Routes, Route, useParams } from "react-router-dom";

import Addresses from "./pages/Addresses";
import Packages from "./pages/Packages";
import Balance from "./pages/Balance";
import Home from "./pages/Home";
import LoginRegistrationForm from "./components/login/LoginRegistrationForm";


function App() {
  // const params = useParams();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<LoginRegistrationForm />} />
      <Route path='/addresses' element={<Addresses />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/balance' element={<Balance />} />
    </Routes>

  );
}

export default App;
