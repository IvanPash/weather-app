const initState = {
  weatherOneDay: {
    coord: {
      lon: null,
      lat: 56.1366,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "пасмурно",
        icon: "04n",
      },
    ],
    base: "stations",
    main: {
      temp: 281.3,
      feels_like: 278.41,
      temp_min: 281.3,
      temp_max: 281.3,
      pressure: 1023,
      humidity: 50,
      sea_level: 1023,
      grnd_level: 1005,
    },
    visibility: 10000,
    wind: {
      speed: 5.03,
      deg: 81,
      gust: 9.5,
    },
    clouds: {
      all: 100,
    },
    dt: 1632065213,
    sys: {
      country: "RU",
      sunrise: 1632020261,
      sunset: 1632065213,
    },
    timezone: 10800,
    id: 473247,
    name: "Владимир",
    cod: 200,
  },
};

let reducerWeatherToday = (state = initState, action) => {
  return state;
};

export default reducerWeatherToday;
