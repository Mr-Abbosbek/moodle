import React from "react";
import { Link } from "react-router-dom";

function Matlab() {
  return (
    <div
      style={{ background: "rgb(32, 33, 36)", height: "100vh", paddingTop: "100px" }}
      className="d-flex justify-content-center"
    >
      <div className="d-block">
        <div className="d-block">
          <img src="./images/Screenshot_1.png" alt="Not found 404" className="d-block" />
          <p style={{ textDecoration: "none", color: "rgb(154, 160, 166)", fontSize: "14px", paddingLeft: "75px" }}>
            <Link to="/test" style={{ textDecoration: "none", color: "rgb(154, 160, 166)", fontSize: "14px"}}>ERR_INTERNET_DISCONNECTED</Link>
            <Link to="/mo" style={{ textDecoration: "none", color: "rgb(154, 160, 166)", fontSize: "14px"}}>M</Link>
            <Link to="/ev" style={{ textDecoration: "none", color: "rgb(154, 160, 166)", fontSize: "14px"}}>E</Link>
            <Link to="/lb" style={{ textDecoration: "none", color: "rgb(154, 160, 166)", fontSize: "14px"}}>LB</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Matlab;
