import logo from "./logo.svg";
import "./App.css";
import s from "./App.module.css";
import { Route } from "react-router";
import WeatherMonth from "./UI/WeatherMonth/WeatherMonth";
import {WeatherTodayContainer} from "./UI/WeatherToday/WeatherTodayContainer";
import NavigationItemContainer from "./UI/NavigationItem/NavigationItemContainer";
import { SettingsContainier } from "./UI/Settings/SettingsContainer";

function App(props) {
  return (
    <div className={s.appContainer}>
      <div className={s.app}>
        <div className={s.header}>
          <h2 className={s.headerTitle}>Погода</h2>
          <nav className={s.navigation}>
            <NavigationItemContainer />
          </nav>
        </div>
        <div className={s.containerPage}>
          <Route path="/oneday" render={() => <WeatherTodayContainer />} />
          <Route path="/month" render={() => <WeatherMonth />} />
          <Route path="/settings" render={() => <SettingsContainier />} />
        </div>
      </div>
    </div>
  );
}

export default App;
