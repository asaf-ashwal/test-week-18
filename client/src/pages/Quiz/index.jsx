import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import style from "./style.module.css";
import { GlobalContext } from "../../App";
import axios from "axios";

function index() {
  const inputRef = useRef();
  const h1Ref = useRef();
  const { data } = useContext(GlobalContext);

  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState({ class: "", text: "" });
  const navigate = useNavigate();

  function handleChengePage(e) {
    e.preventDefault();
    e.stopPropagation();
    navigate("/");
  }
  function handleNext(e) {
    e.preventDefault();
    e.stopPropagation();
    setCurrentQ(currentQ + 1);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const enswerResult = data.find((v) => {
      return (
        inputRef.current.value.toLowerCase() ===
        v?.attacktype1_txt?.toLowerCase()
      );
    });

    if (enswerResult) {
      setResult({ text: "well done !!!", class: style.right });
      await axios({
        method: "post",
        url: "http://localhost:3000/player",
        data: { score: 1 },
      });
    } else {
      setResult({ text: "sorry maiby next time !!!", class: style.wroung });
    }
    setCurrentQ(currentQ + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setResult({ class: "", text: "" });
      h1Ref.current.value = `When Country = ${data[currentQ]?.country_txt} and Year = ${data[currentQ]?.iyear}, what is the Attack Type?`;
      inputRef.current.value = "";
    }, 2000);
  }, [currentQ]);

  return (
    <form className={`${style.form}`}>
      <h1
        ref={h1Ref}
      >{`When Country = ${data[currentQ]?.country_txt} and Year = ${data[currentQ]?.iyear}, what is the Attack Type?`}</h1>
      <label htmlFor="enswer">Your Answer:</label>
      <input ref={inputRef} type="text" id="enswer" required />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      <div className={result.class}>{result.text}</div>
      <nav>
        <button onClick={handleChengePage}>Back to data page</button>
        <button onClick={handleNext}>Next question</button>
      </nav>
    </form>
  );
}

export default index;
