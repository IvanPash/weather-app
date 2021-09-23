import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import WeatherOneDay from "./WeatherOneDay/WeatherOneDay";
import s from "./WeatherOneDayInner.module.css";

const WeatherOneDayInner = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        {props.daily.map((el, index) => {
          return (
            <Route path={`/oneday/${index}`}>
              <WeatherOneDay
                daily={props.daily[index]}
                loading={props.loading}
                coords={props.coords}
                city={props.city}
              />
            </Route>
          );
        })}
      </Switch>
      <button className={s.buttonChangeDay} disabled={+match.params.id ? false : true}>
        <Link className={s.buttonChangeDayLink} to={`/oneday/0`}>
          Сегодня
        </Link>
      </button>
      <button
        className={`${s.buttonChangeDay} ${s.buttonChangeDay_right}`}
        disabled={props.daily.length > +match.params.id + 1 ? false : true}
      >
        <Link className={s.buttonChangeDayLink} to={`/oneday/${+match.params.id + 1}`}>
          Следующий день
        </Link>
      </button>
    </div>
  );
};

export default WeatherOneDayInner;
