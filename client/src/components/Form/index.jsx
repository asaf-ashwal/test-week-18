import React, { useContext, useRef } from "react";
import style from "./style.module.css";
import { GlobalContext } from "../../App";

function index() {
  const { dataToShow, data, setDataToShow } = useContext(GlobalContext);
  function filterData({ yearGreat, yearLest, cityContry }) {
    console.log('data: ',data);
    return data.filter((obj) => {
      return (
        (obj.country_txt.toLowerCase().includes(cityContry.toLowerCase()) ||
          obj.city.toLowerCase().includes(cityContry.toLowerCase())) &&
        obj.iyear < (yearLest || obj.iyear + 1) &&
        obj.iyear > (yearGreat || 0)
      );
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const yearGreat = greater.current.value;
    const yearLest = last.current.value;
    const cityContry = search.current.value;
    const res = filterData({ yearGreat, yearLest, cityContry });
    setDataToShow(res);
    console.log(dataToShow.length);
  }
  const search = useRef();
  const greater = useRef();
  const last = useRef();
  return (
    <form className={`${style.systemForm}`} onSubmit={handleSubmit}>
      <label for="search" htmlFor="">
        Search: <input ref={search} id="search" type="text" />
      </label>
      <label htmlFor="">
        {"Year >"}
        <input ref={greater} type="text" />
      </label>
      <label htmlFor="">
        {"Year <"}
        <input ref={last} type="text" />
      </label>
      <button   type="submit">Submit</button>
    </form>
  );
}

export default index;
