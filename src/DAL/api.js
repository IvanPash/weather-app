import * as axios from "axios";

const instanseAxiosWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: "ru",
    units: "metric",
    appind: "a5ad12f0d63af840e7971a1142ba79d5",
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
  getWeatherToday(city) {
    return instanseAxiosWeather.get(`weather?q=${city}`);
  },
  getCity(input) {
    let params = {
      query: input,
      // настройка - только города
      from_bound: { value: "city" },
      to_bound: { value: "city" },
    };
    return instanseAxiosCity.post("", params).then((response) => {
      console.log(response.data);
    });
  },
};

export default API;
