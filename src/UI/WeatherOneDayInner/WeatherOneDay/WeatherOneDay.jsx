import React from "react";
import s from "./WeatherOneDay.module.css";

let WeatherOneDay = (props) => {
  debugger;
  let ConvertTemperature = (temp) => {
    let integer = Math.floor(temp);
    if (integer > 0) return "+" + integer;
    if (integer < 0) return "+" + integer;
    else return integer;
  };
  let DateFunc = (date) => {
    let timestamp = date;
    let a = new Date(timestamp * 1000);
    let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    let month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    return `${days[a.getDay()]} ${a.getDate()}, ${month[a.getMonth()]}`;
  };
  if (props.daily) {
    return (
      <div className={`${s.box} containerWeather`}>
        <div className={`${s.loadingWrapper} ${props.loading && s.active}`}>
          <img className={s.loading} src="https://i.stack.imgur.com/ATB3o.gif" />
        </div>

        <div className={s.boxRight}>
          <div className={s.mainInfo}>
            <div className={s.header}>
              <h3 className={s.titleCity}>{props.city}</h3>
              <span className={s.date}>{DateFunc(props.daily.sunrise)}</span>
            </div>
            <div className={s.mainInfoTemp}>
              <span className={s.temperature}>{ConvertTemperature(props.daily.temp.day)}</span>
              <div className={s.typeWeather}>
                <img
                  className={s.imageWeather}
                  src={`http://openweathermap.org/img/wn/${
                    props.daily.weather && props.daily.weather[0].icon
                  }@2x.png`}
                  alt={props.daily.weather && props.daily.weather.description}
                />
                <span className={s.typeWeatherDescription}>
                  {props.daily.weather && props.daily.weather[0].description}
                </span>
              </div>
            </div>
            <ul className={s.moreInfoList}>
              <li className={s.moreInfoItem}>
                <span className={s.moreInfoTitle}>по ощущению</span>
                <span className={s.moreInfoValue}>{ConvertTemperature(props.daily.feels_like.day)} </span>
              </li>
              <li className={s.moreInfoItem}>
                <span className={s.moreInfoTitle}>ветер</span>
                <span className={s.moreInfoValue}>
                  {props.daily.wind_speed} <small>м/с</small>
                </span>
              </li>
              <li className={s.moreInfoItem}>
                <span className={s.moreInfoTitle}>давление</span>
                <span className={s.moreInfoValue}>
                  {Math.floor(props.daily.pressure * 0.75006375541921)} <small>мм.рт.ст.</small>
                </span>
              </li>
              <li className={s.moreInfoItem}>
                <span className={s.moreInfoTitle}>влажность</span>
                <span className={s.moreInfoValue}>{props.daily.humidity}%</span>
              </li>
            </ul>
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
