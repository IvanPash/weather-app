import Setting from "./Setting/Setting";
import s from "./Settings.module.css";

const Settings = (props) => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return;
    }
  }
  function showPosition(position) {
    console.log("latitude" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
  }
  return (
    <div className={s.container}>
      <h4 className={s.title}>Настройки</h4>
      <span>текущие координаты {props.selectedCoordsCity.lat} и {props.selectedCoordsCity.lon}</span>
      <ul className={s.settingsList}>
        {props.settingTypes.map((el) => (
          <Setting
            key={el.id}
            {...el}
            hintsCity={props.hintsCity}
            input={props.input}
            setSettingTypeUI={props.setSettingTypeUI}
            setInputUI={props.setInputUI}
            setCoordsCityUI={props.setCoordsCityUI}
          />
        ))}
      </ul>
      <button onClick={getLocation}>Получить координаты по IP</button>
      <div className={s.buttonSaveContainer}>
        <button className={s.buttonSave}>Сохранить</button>
      </div>
    </div>
  );
};

export default Settings;
