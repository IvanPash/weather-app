import { NavLink } from "react-router-dom";
import Setting from "./Setting/Setting";
import s from "./Settings.module.css";

const Settings = (props) => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Настройки</h4>
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
          <NavLink to="/oneday" onClick={() => props.setLocalStorageSettingsUI()} className={s.buttonSavelink}> 
            Сохранить
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Settings;
