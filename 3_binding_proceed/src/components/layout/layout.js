import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./header/header";
import "./layout.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "./footer/footer";
import Main from "./main/main";

export default function Layout() {
  return (
    <BrowserRouter>
    <div className="layout">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" fixed>
          <Header />
          
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
          >
            <Main />
          </Typography>
          <Footer />
        </Container>
      </React.Fragment>

    </div>
    </BrowserRouter>
    
  );
}
