import API from "../../DAL/api";

const initState = {
  current: {
    dt: null,
    sunrise: null,
    sunset: null,
    temp: null,
    feels_like: null,
    pressure: null,
    humidity: null,
    dew_point: null,
    uvi: null,
    clouds: null,
    visibility: null,
    wind_speed: null,
    wind_deg: null,
    wind_gust: null,
    weather: [
      {
        id: null,
        main: null,
        description: null,
        icon: null,
      },
    ],
    rain: {
      "1h": null,
    },
  },
  loading: false,
  hourly: [],
  daily: [],
};

let reducerWeather = (state = initState, action) => {
  switch (action.type) {
    case SET_WEATHER_CURRENT: {
      let stateCopy = {
        ...state,
        current: action.data,
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

    default:
      return state;
  }
};

// TypeActions
const SET_WEATHER_CURRENT = "SET_WEATHER_CURRENT";
const SET_LOADING = "SET_LOADING";

// ActionCreators
const setWeatherCurrentAC = (data) => ({ type: SET_WEATHER_CURRENT, data });
const setLoadingAC = (status) => ({ type: SET_LOADING, status });

// ThunkCreators
export const getWeatherCurrentTC = (coords) => (dispatch) => {
  dispatch(setLoadingAC(true))
  API.getWeatherCurrent(coords).then((response) => {
    dispatch(setWeatherCurrentAC(response.data.current));
    dispatch(setLoadingAC(false))
  });
};

export default reducerWeather;
