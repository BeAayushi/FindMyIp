import React, { useState, useEffect } from "react";
import IpAddress from "./components/IpAddress";
import "./App.css";
function App() {
  const [address, setaddress] = useState();
  const [change, setchange] = useState();

  useEffect(() => {
    fetch("https://freegeoip.app/json")
      .then((response) => response.json())
      .then((response) => {
        setaddress(response.ip);
        setchange(response.city);
      });
  }, []);

  return (
    <div>
      <IpAddress ipAddreess={address} City={change} />
    </div>
  );
}

export default App;
