import Setting from "./Setting/Setting";
import s from "./Settings.module.css";

const Settings = (props) => {
  debugger
  return (
    <div className={s.container}>
      <h4 className={s.title}>Настройки</h4>
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
        <button className={s.buttonSave} disabled={props.buttonSave}>Сохранить</button>
      </div>
    </div>
  );
};

export default Settings;
