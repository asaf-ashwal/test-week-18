import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Router from "./Router";
import Header from "./components/Header/index";
import "./App.css";
import axios from "axios";
export const GlobalContext = createContext();

function App() {
  const [dataToShow, setDataToShow] = useState([]);
  const [data, setData] = useState([]);

  async function getData() {
    const url = "http://localhost:3000/questions";
    const res = await axios({ method: "get", url });
    setData(res.data);
    setDataToShow(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ dataToShow, setDataToShow, data }}>
        <Header />
        <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
