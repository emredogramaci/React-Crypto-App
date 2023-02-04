import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Home from "./Routes/Home";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";
import Account from "./Routes/Account";
import CoinDetail from "./Routes/CoinDetail";
import Footer from "./Components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setCoins(response.data);
    });
  }, [apiUrl]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinID" element={<CoinDetail />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
