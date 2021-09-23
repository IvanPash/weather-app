import API from "../../DAL/api";

const initState = {
  current: {},
  loading: false,
  daily: [],
  city: null
};

let reducerWeather = (state = initState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      let stateCopy = {
        ...state,
        current: action.data.current,
        daily: action.data.daily,
      };
      return stateCopy;
    }
    case SET_LOADING: {
      let stateCopy = {
        ...state,
        loading: action.status
      };
      return stateCopy;
    }
    case SET_CITY_WEATHER: {
      let stateCopy = {
        ...state,
        city: action.city
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

// TypeActions
const SET_WEATHER = "SET_WEATHER";
const SET_LOADING = "SET_LOADING";
const SET_CITY_WEATHER = "SET_CITY_WEATHER"

// ActionCreators
const setWeatherAC = (data) => ({ type: SET_WEATHER, data });
const setLoadingAC = (status) => ({ type: SET_LOADING, status });
const setWeatherCityAC = (city) => ({ type: SET_CITY_WEATHER, city });

// ThunkCreators
export const getWeatherCurrentTC = (coords) => (dispatch) => {
};
export const getAllWeatherTC = (coords) => (dispatch) => {
  if(!coords.lat) return
  dispatch(setLoadingAC(true))
  API.getWeather(coords).then(response => {
    dispatch(setWeatherAC(response.data))
    API.getCityCoords(coords).then((response) => {
      dispatch(setWeatherCityAC(response.data.suggestions[0].data.city))
      dispatch(setLoadingAC(false))
    })
  })
}

export default reducerWeather;
