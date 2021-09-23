import React from "react";
import s from "./WeatherOneDay.module.css";

let WeatherOneDay = (props) => {
  let ConvertTemperature = (temp) => {
    let integer = Math.floor(temp);
    if (integer > 0) return "+" + integer;
    if (integer < 0) return "+" + integer;
    else return integer;
  };
  let DateFunc = (date, type) => {
    var timestamp = date;
    var a = new Date(timestamp * 1000);
    var days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    if (type == "dayWeek") return days[a.getDay()];
    else return a.getDate();
  };
  if (props.daily) {
    return (
      <div className={`${s.box} containerWeather`}>
        <div className={`${s.loadingWrapper} ${props.loading && s.active}`}>
          <img className={s.loading} src="https://i.stack.imgur.com/ATB3o.gif" />
        </div>

        <div className={s.boxRight}>
          <div className={s.mainInfo}>
            <div>
              <h3 className={s.mainInfoCity}>{props.city}</h3>
            </div>
            <div>
              <span className={`${s.day} ${s.dayNumber}`}>{DateFunc(props.daily.sunrise)}</span>
              <span className={s.day}>{DateFunc(props.daily.sunrise, "dayWeek")}</span>
            </div>
            <div className={s.mainInfoTemp}>
              <span className={s.temperature}>{ConvertTemperature(props.daily.temp.day)}</span>
              <div className={s.typeWeather}>
                <img
                  className={s.imageWeather}
                  src={`http://openweathermap.org/img/wn/${props.daily.weather && props.daily.weather[0].icon}@2x.png`}
                  alt={props.daily.weather && props.daily.weather.description}
                />
                <span className={s.typeWeatherDescription}>
                  {props.daily.weather && props.daily.weather[0].description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.boxLeft}></div>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className={s.mainInfoCity}>{props.city}</h3>
      </div>
    );
  }
};
export default WeatherOneDay;
