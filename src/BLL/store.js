import { combineReducers, createStore } from "redux";
import reducerNavigation from "./reducers/reducer-navigation";
import reducerSettings from "./reducers/reducer-settings";
import reducerWeatherMonth from "./reducers/reducer-weatherMonth";
import reducerWeatherToday from "./reducers/reducer-weatherToday";

let reducers = combineReducers({
  weatherTodayPage: reducerWeatherToday,
  weatherMonthPage: reducerWeatherMonth,
  settingsPage: reducerSettings,
  navigation: reducerNavigation
})

let store = createStore(reducers)

export default store



