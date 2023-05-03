import React from "react";
import Under from "../../assets/under.jpg";
import Navbar from "../navbar/Navbar";
const Account = () => {
  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <Navbar />
      <img
        src={Under}
        alt="under-construction"
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
    </div>
  );
};

export default Account;
