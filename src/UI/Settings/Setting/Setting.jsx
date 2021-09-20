import React from "react";
import s from "./Setting.module.css";

const Setting = (props) => {
  let inputLink = React.createRef();

  let setSettingType = (selectedType) => {
    props.setSettingTypeUI(selectedType);
  };
  let setInput = () => {
    let value = inputLink.current.value;
    props.setInputUI(value);
  };
  let setCoordsCity = (obj) => {
    props.setCoordsCityUI(obj);
  };

  // let getCity = () => {
  //   console.log("ggg");
  //   // API.getCity("Моск")
  // };
  return (
    <li className={s.settingsItem}>
      <input
        className={s.settingLeft}
        id={props.type}
        type="radio"
        checked={props.selected}
        onClick={() => setSettingType(props.type)}
        readOnly
      />
      <div className={s.settingRight}>
        <span className={s.typeTitle}>{props.text}</span>

        {props.type === "ip" && <span className={s.description}>загрузка...</span>}
        {props.type === "input" && (
          <div>
            <input
              className={s.inputCity}
              id="city"
              type="text"
              ref={inputLink}
              onChange={() => setInput()}
              placeholder={props.input.placeholder}
              value={props.input.inputValue}
            />
            <div className={s.hintCityContainer}>
              {props.hintsCity.map((el) => (
                <span onClick={() => setCoordsCity({ ...el })} className={s.hintCity}>
                  {el.value}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default Setting;

// <li className={s.settingsItem}>
//           <input
//             className={s.settingLeft}
//             id="type"
//             type="radio"
//             checked={props.selectedType == "search" && true}
//           />
//           <div className={s.settingRight}>
//             <span className={s.typeTitle}>Найти город</span>
//             <input className={s.settingLeft} id="city" type="text" placeholder="Поиск города" />
//           </div>
//         </li>
