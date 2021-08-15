learn react from scratch  

1. make the same course as jb + projects just instead of ts use functional 

2019-12-08 - React - New Project, Components, Layout
https://nodejs.org/en/download/
update nodejs - v

npm cra --version
6.14.8

https://create-react-app.dev/docs/getting-started/
(template building)

npx create-react-app client 
cd client
yarn start

mkdir components
touch header.js
rfc

test css files + do them in sass

layout arrangement:

mkdir Layout
0. touch layout.js :
import React from "react";
import Header from "./header/header";
export default function Layout() {
  return (
    <div>
      Layout
      <Header />
    </div>
  );
}

0. touch header.js :
import React from "react";

export default function Header() {
  return <div>Header</div>;
}


import material ui
https://material-ui.com/getting-started/installation/
yarn add @material-ui/core

npm install @fontsource/roboto

main font error?
npm install --save node-sass
npm i
reroot css to index.js + css 


yarn add @material-ui/icons


rebuild layout:
import React from "react";
import Header from "./header/header";
import "./layout.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "./footer/footer";
import Main from "./main/main";

export default function Layout() {
  return (
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
  );
}


import React from "react";
import "./header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}














