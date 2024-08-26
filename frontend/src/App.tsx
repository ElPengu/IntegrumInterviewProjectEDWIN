import React, { useState } from "react"; /*To change
state programmatically*/
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

import "./App.css"; /*Import the app.css file*/

import { Toggle } from "./components/Toggle";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

/*Import useLocalStorage to remember light/dark mode
setting*/
import useLocalStorage from "use-local-storage";

/*Changed export default function App() -> export const App => ()*/
export const App = () => {
  /*Create an isDark property*/
  const [isDarkBool, setIsDark] = useLocalStorage("DarkMode", false);

  return (
    /*To use anything defined in App.css, we must use
    include all of this in the class name for App*/
    /*Introduce dark mode feature which works by
    going to the opposite version when you click*/
    <div className="App" data-theme={isDarkBool ? "DarkMode" : "LightMode"}>
      <Toggle isChecked={isDarkBool} handleChange={() => setIsDark(!isDarkBool)} />
      <section>
        <Router>
          <EntryProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<AllEntries />}></Route>
              <Route path="create" element={<NewEntry />}></Route>
              <Route path="edit/:id" element={<EditEntry />}></Route>
            </Routes>
          </EntryProvider>
        </Router>
      </section>
    </div>
  );
};
