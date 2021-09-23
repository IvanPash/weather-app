import { NavLink } from "react-router-dom";
import Setting from "./Setting/Setting";
import s from "./Settings.module.css";

const Settings = (props) => {
  let saveSettings = () => {
    props.setLocalStorageSettingsUI();
    props.getAllWeatherUI(props.coordsSave);
  };
  return (
    <div className={s.container}>
      <h3 className={s.title}>Настройки</h3>
      <span className={s.coordinate}>
        выбрано: широта {props.coordsSave.lat} , долгота {props.coordsSave.lon}
      </span>
      <ul className={s.settingsList}>
        {props.settingsTypes.map((el) => (
          <Setting
            key={el.id}
            {...el}
            setSelectedSettingUI={props.setSelectedSettingUI}
            getCitiesInputSettingUI={props.getCitiesInputSettingUI}
            getCoordinatesForCityUI={props.getCoordinatesForCityUI}
          />
        ))}
      </ul>
      <div className={s.buttonSaveContainer}>
        <button disabled={props.buttonSave} className={s.buttonSave}>
          <NavLink to="/oneday/0" onClick={() => saveSettings()} className={s.buttonSavelink}>
            Сохранить
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Settings;
