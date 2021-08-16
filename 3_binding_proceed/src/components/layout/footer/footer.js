import React from "react";
import "./footer.css";



const getCurrentYear = () => {
  return new Date().getFullYear();
};



export default function Footer() {
  return (
    <div className="footer">
      all rights reserved &copy;{" "}
      <a href="http://johnmogi.com" target="_blank" rel="noreferrer">
        Johnmogi
      </a>{" "}
      {getCurrentYear()}
    </div>
  );
}
