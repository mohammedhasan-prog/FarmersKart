import Dashboard from "./components/Dashboard";
// import { Router, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Transactioin from "./components/Transactioin";
import Support from "./components/Support";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Reports from "./components/Reports";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-user" element={<User />} />
          <Route path="/manage-transaction" element={<Transactioin />} />
          <Route path="/support" element={<Support />} />
          <Route path="/view-reports" element={<Reports />} />





          </Routes>
      </BrowserRouter>
   
  );
}

export default App;
