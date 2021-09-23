import s from "./WeatherMonthItem.module.css";

const WeatherMonthItem = (props) => {
  let DateFunc = (date, type) => {
    var timestamp = date;
    var a = new Date(timestamp * 1000);
    var days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    if (type == "dayWeek") return days[a.getDay()];
    else return a.getDate();
  };
  let ConvertTemperature = (temp) => {
    let integer = Math.floor(temp);
    if (integer > 0) return "+" + integer;
    if (integer < 0) return "+" + integer;
    else return integer;
  };
  return (
    <div className={s.box}>
      <div className={s.mainInfoTemp}>
        <div>
          <span className={`${s.day} ${s.dayNumber}`}>{DateFunc(props.daily.sunrise)}</span>
          <span className={s.day}>{DateFunc(props.daily.sunrise, "dayWeek")}</span>
        </div>

        <div className={s.typeWeather}>
          <img
            className={s.imageWeather}
            src={`http://openweathermap.org/img/wn/${props.daily.weather[0].icon}@2x.png`}
            alt={props.daily.weather.description}
          />
          <div className={s.temperatureWrapper}>
            <span className={s.temperature}>
              <span className={s.tempDescription}>днем</span> {ConvertTemperature(props.daily.temp.day)}
            </span>
            <span className={`${s.temperature} ${s.temperatureNight}`}>
              <span className={s.tempDescription}>ночью</span> {ConvertTemperature(props.daily.temp.night)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMonthItem;
