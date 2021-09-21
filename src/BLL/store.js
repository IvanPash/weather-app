import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerNavigation from "./reducers/reducer-navigation";
import reducerSettings from "./reducers/reducer-settings";
import reducerWeatherMonth from "./reducers/reducer-weatherMonth";
import reducerWeatherToday from "./reducers/reducer-weatherToday";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  weatherTodayPage: reducerWeatherToday,
  weatherMonthPage: reducerWeatherMonth,
  settingsPage: reducerSettings,
  navigation: reducerNavigation
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store



