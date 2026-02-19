import React, { createContext, useEffect, useState } from "react";
import Table from "../../components/Table/index";
import Form from "../../components/Form/index";
import { useNavigate } from "react-router";
import axios from "axios";

function index() {
 

  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    navigate("/Quiz");
  }

  return (
    <>
        <Form />
        <Table />

        <button onClick={handleClick}> move to test</button>
    </>
  );
}

export default index;
