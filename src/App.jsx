import Footer from "./components/Footer";
import HomePage from "./HomePage";
import HeroCarousel from "./HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLoanPage from "./components/HomeLoanPage";
import GoldLoanPage from "./components/GoldLoanPage";
import CarLoanPage from "./components/CarLoanPage";
import ApplyPage from "./components/LoanApplyPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import CalculatorPage from "./components/CalculatorPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-loan" element={<HomeLoanPage />} />
            <Route path="/gold-loan" element={<GoldLoanPage />} />
            <Route path="/car-loan" element={<CarLoanPage />} />
            <Route path="/apply/:loanType" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            {/* <Route path="/faq" element={<FAQPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
