import React, { useState } from "react";
import { MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Banner } from "./components/header";
import { AppBar, CssBaseline } from "@material-ui/core";
import { NavBar } from "./components/header/nevBar";
import { darkTheme, lightTheme } from "./assets/themes";
import { AppRoutes } from "./routes/appRoutes";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    paddingTop: "48px",
    borderRadius: "0",
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: "100%",
  },
}));

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem("theme") === "dark"
  );

  return (
    <div className="App">
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        </AppBar>
        <main className={classes.content}>
          <Banner />
          <AppRoutes />
        </main>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
