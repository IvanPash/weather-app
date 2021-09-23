import logo from "./logo.svg";
import "./App.css";
import s from "./App.module.css";
import { Route } from "react-router";
import WeatherMonthContainer from "./UI/WeatherMonth/WeatherMonthContainer";
import NavigationItemContainer from "./UI/NavigationItem/NavigationItemContainer";
import { SettingsContainier } from "./UI/Settings/SettingsContainer";
import WeatherOneDayInnerContainer from "./UI/WeatherOneDayInner/WeatherOneDayInnerContainer";

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
          <Route path="/oneday/:id" render={() => <WeatherOneDayInnerContainer />} />
          <Route path="/month" render={() => <WeatherMonthContainer />} />
          <Route exact path="/" render={() => <SettingsContainier />} />
        </div>
      </div>
    </div>
  );
}

export default App;
