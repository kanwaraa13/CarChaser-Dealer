
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { SignUp } from './Auth/SignUp';
import { DealerIn } from './Auth/DealerIn';
import { DealerVerification } from './Auth/DealerVerification';
import { SellerNav } from './Dealer/DealerNav';
import { OpenBid } from './Dealer/OpenBid';
import { CarDetails } from './Dealer/CarDetails';
import { WinnerBid } from './Dealer/WinnerBid';
import { WinnerCarBid } from './Dealer/WinnerCarBid';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dealerin" element={<DealerIn />} />
          <Route path="/verification" element={<DealerVerification />} />
          <Route path="/SellerNav" element={<SellerNav />} />
          <Route path="/open-bid/" element={<OpenBid />} />
          <Route path="/car-details/:Vehicle_Id" element={<CarDetails />} />
          <Route path="/winner-bid" element={<WinnerBid />} />
          <Route path="/winner-car-bid/:Vehicle_Id" element={<WinnerCarBid />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
