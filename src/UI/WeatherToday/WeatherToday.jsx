import React from "react";
import API from "../../DAL/api";
import s from "./WeatherToday.module.css";

let WeatherToday = (props) => {
  return (
    <div className={s.container}>
      <h4>{props.weather.name}</h4>
      
      <button></button>
    </div>
  );
};
export default WeatherToday;
