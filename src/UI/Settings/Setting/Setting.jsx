import React from "react";
import s from "./Setting.module.css";

const Setting = (props) => {
  let inputLink = React.createRef();
  let setInput = (id) => {
    debugger
    let value = inputLink.current.value;
    props.getCitiesInputSettingUI(id, value)
  };
  // let setSettingType = (selectedType) => {
  //   props.setSettingTypeUI(selectedType);
  // };
  
  
  // let setCoordsCity = (obj) => {
  //   props.selected && props.setCoordsCityUI(obj);
  // };

  return (
    <li className={s.settingsItem}>
      <input
        className={s.settingLeft}
        id={props.type}
        type="radio"
        checked={props.selected}
        onClick={() => props.setSelectedSettingUI(props.id, props.type)}
        readOnly
      />
      <div className={`${s.settingRight} ${props.selected && s.active}`}>
        <span className={s.typeTitle}>{props.title}</span>
        <span className={s.description}>{props.loading ? "загрузка..." : "✔"}</span>
        <span className={s.description}>широта {props.coords.lat} , долгота {props.coords.lon}</span>
        {props.error.status && <span className={s.typeTitle}>Ошибка: {props.error.description}</span>}
        {props.type === "input" && (
          <div className={s.inputCityContainer}>
            <div className={s.hintCityContainer}>
              <div className={s.hintCitiInner}>
                {props.hints.map((el) => (
                  <span onClick={() => props.getCoordinatesForCityUI(props.id, el)} className={s.hintCity}>
                    {el.value}
                  </span>
                ))}
              </div>
            </div>
            <input
              className={s.inputCity}
              id="city"
              type="text"
              ref={inputLink}
              onChange={() => setInput(props.id)}
              placeholder={props.input.placeholder}
              value={props.input.inputValue}
            />
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
