import * as axios from "axios";
import API from "../../DAL/api";
import s from "./Settings.module.css";

const Settings = (props) => {
  let getCity = () => {
    API.getCity("Моск")
    axios
      .post(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", // url
        { query: "Вла" }, // data
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + "5e332d1c033a2bc229cd5ccbf1a4f97264059c9d",
          },
          // Может быть надо, а может быть нет
        }
      )
      .then(function (response) {
        console.log(response); // Здесь обработать ответ как надо
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={s.container}>
      <h4>Настройки</h4>
      <div>
        {" "}
        Введите город
        {/* <input id className={}/> */}
      </div>
      <button onClick={getCity}>Получить город</button>
    </div>
  );
};

export default Settings;
