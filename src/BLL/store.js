import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerNavigation from "./reducers/reducer-navigation";
import reducerSettings from "./reducers/reducer-settings";
import reducerWeather from "./reducers/reducer-weather";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  weatherPage: reducerWeather,
  settingsPage: reducerSettings,
  navigation: reducerNavigation
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store



