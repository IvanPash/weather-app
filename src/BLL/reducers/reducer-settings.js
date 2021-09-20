import API from "../../DAL/api";

const initState = {
  settingTypes: [
    { id: 1, selected: false, type: "ip", text: "Определять по IP-адресу" },
    { id: 2, selected: true, type: "input", text: "Найти город" },
  ],
  input: {
    inputValue: "",
    placeholder: "Поиск",
  },
  hintsCity: [],
  selectedCoordsCity: { lat: "", lon: "" },
  // { id: "", data: { geo_lat: "", geo_lon: "" }, value: "" }
};

let reducerSettings = (state = initState, action) => {
  switch (action.type) {
    case SET_SETTING_TYPE: {
      let stateCopy = {
        ...state,
        settingTypes: state.settingTypes.map((el) => {
          if (el.type == action.selectedType) {
            return { ...el, selected: true };
          } else {
            return { ...el, selected: false };
          }
        }),
      };
      return stateCopy;
    }

    case SET_INPUT: {
      let stateCopy = {
        ...state,
        input: { ...state.input, inputValue: action.value },
      };
      API.getCity(action.value).then((response) => {
        stateCopy.hintsCity = [];

        let responseData = response.data.suggestions;
        for (let i = 0; i < responseData.length; i++) {
          stateCopy.hintsCity.push({
            id: i,
            data: { geo_lat: responseData[i].data.geo_lat, geo_lon: responseData[i].data.geo_lon },
            value: responseData[i].value,
          });
        }
      });
      return stateCopy;
    }

    case SET_COORDS_CITY: {
      let stateCopy = {
        ...state,
        input: { ...state.input, inputValue: action.obj.value },
        selectedCoordsCity: { ...state.selectedCoordsCity, lat: action.obj.data.geo_lat, lon: action.obj.data.geo_lon },
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

const SET_SETTING_TYPE = "SET-SETTING-TYPE";
const SET_INPUT = "SET-INPUT";
const SET_COORDS_CITY = "SET-COORDS-CITY";

export const setSettingTypeAC = (selectedType) => ({ type: SET_SETTING_TYPE, selectedType });
export const setInputAC = (value) => ({ type: SET_INPUT, value });
export const setCoordsCityAC = (obj) => ({ type: SET_COORDS_CITY, obj });

export default reducerSettings;
