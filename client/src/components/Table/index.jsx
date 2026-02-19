import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import style from "./style.module.css";

function index() {
  const { dataToShow } = useContext(GlobalContext);

  return (
    <table>
      <tr>
        <th>Event ID</th>
        <th>Year</th>
        <th>Country</th>
        <th>City</th>
        <th>Attack type</th>
        <th>Motive</th>
      </tr>
      {dataToShow.map((v) => {
        return (
          <tr>
            <td>{v.eventid}</td>
            <td>{v.iyear}</td>
            <td>{v.country_txt}</td>
            <td>{v.city}</td>
            <td>{v.attacktype1_txt}</td>
            <td className={`${style.motive}`}>{v.motive}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default index;
