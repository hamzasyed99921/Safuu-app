import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './components/Layouts/Base';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Swap from './pages/Swap';
import Calculator from './pages/Calculator';
import Analytics from './pages/Analytics';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Dashboard/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/swap" element={<Swap/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/analytics" element={<Analytics/>} />
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
