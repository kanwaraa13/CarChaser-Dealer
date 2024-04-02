
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { SignUp } from './Auth/SignUp';
import { SellerIn } from './Auth/SellerIn';
import { DealerVerification } from './Auth/DealerVerification';
import { UploadVehicleDetails } from './Dealer/UploadVehicleDetails';
import { SellerNav } from './Dealer/DealerNav';
import { CarEstimated } from './Dealer/CarEstimated';
import { CarSellAppointment } from './Dealer/CarSellAppointment';
import { SeamlessProcess } from './Dealer/SeamlessProcess';
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
          <Route path="/sellerin" element={<SellerIn />} />
          <Route path="/verification" element={<DealerVerification />} />
          <Route path="/uploadvehicledetails" element={<UploadVehicleDetails />} />
          <Route path="/SellerNav" element={<SellerNav />} />
          <Route path="/carvalue" element={<CarEstimated />} />
          <Route path="/book-appointment" element={<CarSellAppointment />} />
          <Route path="/experience-seamless" element={<SeamlessProcess />} />
          <Route path="/open-bid" element={<OpenBid />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/winner-bid" element={<WinnerBid />} />
          <Route path="/winner-car-bid" element={<WinnerCarBid />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
