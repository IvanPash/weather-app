import React from "react";
import s from "./Setting.module.css";

const Setting = (props) => {
  let inputLink = React.createRef();
  let setInput = (id) => {
    let value = inputLink.current.value;
    props.getCitiesInputSettingUI(id, value)
  };
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
        <div className={s.wrapperTitle}>
          <span className={s.typeTitle}>{props.title}</span>
          <span className={s.description}> координаты: {props.coords.lat}, {props.coords.lon}</span>
        </div>
        
        <span className={s.loading}>{props.loading ? "..." : "✔"}</span>
        {props.error.status && <span className={s.errors}>Ошибка: {props.error.description}</span>}
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
