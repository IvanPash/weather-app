import * as axios from "axios";


const instanseAxiosWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: "ru",
    units: "metric",
    exclude: "minutely,alerts",
    appid: "5de3f2a0575c8acbacec8bfacf666bb5",
  },
});

const instanseAxiosCity = axios.create({
  baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + "5e332d1c033a2bc229cd5ccbf1a4f97264059c9d",
  },
});

let API = {
  getWeatherCurrent(coords) {
    let exclude = "minutely,alerts,daily";
    return instanseAxiosWeather.get(`onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${exclude}`)
  },
  getWeatherDays(coords) {
    let exclude = "current,hourly,minutely,alerts";
    return instanseAxiosWeather.get(`onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${exclude}`).then(response => {
      
    })
  },
  getCity(input) {
    let params = {
      query: input,
      // настройка - только города
      from_bound: { value: "city" },
      to_bound: { value: "city" },
      count: 4
    };
    return instanseAxiosCity.post("", params)
  },
};

export default API;
