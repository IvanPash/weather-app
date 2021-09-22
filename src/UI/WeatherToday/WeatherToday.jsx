import React from "react";
import s from "./WeatherToday.module.css";

let WeatherToday = (props) => {
  let image = props.currentWeather.weather[0].icon
  var date = new Date(props.currentWeather.dt * 1000).toLocaleDateString("en-GB")
  debugger;
  let ConvertTemperature = (temp) => {
    let integer = Math.floor(temp);
    if (integer > 0) return "+" + integer;
    if (integer < 0) return "+" + integer;
    else return integer;
  };
  return (
    <div className={`${s.box} containerWeather`}>
      <div className={`${s.loadingWrapper} ${props.loading && s.active}`}>
        <img className={s.loading} src="https://i.stack.imgur.com/ATB3o.gif"/>
      </div>
      
      <div className={s.boxRight}>
        <div className={s.mainInfo}>
          <h3 className={s.mainInfoCity}>Город</h3>
          <span className={s.mainInfoDate}>{date}</span>
          <div className={s.mainInfoTemp}>
            <span className={s.temperature}>{ConvertTemperature(props.currentWeather.temp)}</span>
            <div className={s.typeWeather}>
              <img
                className={s.imageWeather}
                src={`http://openweathermap.org/img/wn/${image}@2x.png`}
                alt={props.currentWeather.weather.description}
              />
              <span className={s.typeWeatherDescription}>{props.currentWeather.weather[0].description}</span>
            </div>
          </div>
          <div className={s.detailBox}>
            <div className={s.detailBoxItem}>
              <span className={s.detailBoxItemTitle}>тип</span>
              <span className={s.detailBoxItemData}>данные</span>
            </div>
            <div className={s.detailBoxItem}>
              <span className={s.detailBoxItemTitle}>тип</span>
              <span className={s.detailBoxItemData}>данные</span>
            </div>
            <div className={s.detailBoxItem}>
              <span className={s.detailBoxItemTitle}>тип</span>
              <span className={s.detailBoxItemData}>данные</span>
            </div>
            <div className={s.detailBoxItem}>
              <span className={s.detailBoxItemTitle}>тип</span>
              <span className={s.detailBoxItemData}>данные</span>
            </div>
            <div className={s.detailBoxItem}>
              <span className={s.detailBoxItemTitle}>тип</span>
              <span className={s.detailBoxItemData}>данные</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.boxLeft}></div>
    </div>
  );
};
export default WeatherToday;
