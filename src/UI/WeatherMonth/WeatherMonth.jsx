import s from "./WeatherMonth.module.css";
import WeatherMonthItem from "./WeatherMonthItem/WeatherMonthItem";

const WeatherMonth = (props) => {
  if (props.daily.length) {
    return (
      <div className={`${s.box} containerWeather`}>
        <div className={`${s.loadingWrapper} ${props.loading && s.active}`}>
          <img className={s.loading} src="https://i.stack.imgur.com/ATB3o.gif" />
        </div>
        <div>
          <h3 className={s.mainInfoCity}>{props.city}</h3>
          
          {/* <span className={s.coordinate}>
            погода по координатам: широта {props.coords.lat} , долгота {props.coords.lon}
          </span> */}
        </div>
        <div className={s.wrapperItems}>
          {props.daily.map(el => <WeatherMonthItem daily={el}/>)}
        </div>
      </div>
    );
  } else {
    return <div>Выберите город в настройках</div>;
  }
};

export default WeatherMonth;
