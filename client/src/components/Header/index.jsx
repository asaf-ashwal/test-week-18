import React, { use, useState } from "react";
import style from "./style.module.css";
import { useLocation } from "react-router";

function index() {
  const location = useLocation();
  return (
    <header>
      <h1>Terror Data {location.pathname.split("/")[1] || "System"}</h1>
    </header>
  );
}

export default index;
