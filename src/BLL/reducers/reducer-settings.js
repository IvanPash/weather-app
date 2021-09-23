import API from "../../DAL/api";

const initState = JSON.parse(localStorage.getItem("settings"))
  ? JSON.parse(localStorage.getItem("settings"))
  : {
      settingsTypes: [
        {
          id: 1,
          selected: false,
          type: "ip",
          title: "Определять по IP-адресу",
          coords: { lat: "", lon: "" },
          loading: false,
          error: { status: false, description: "" },
        },
        {
          id: 2,
          selected: true,
          type: "input",
          title: "Выберите город",
          coords: { lat: "", lon: "" },
          loading: false,
          error: { status: false, description: "" },

          input: {
            inputValue: "",
            placeholder: "Поиск",
          },
          hints: [
            {
              id: 1,
              data: { lat: "", lon: "" },
              value: "",
            },
          ],
        },
      ],
      buttonSave: true,
      coordsSave: {lat: "", lon: ""},
      city: "",
    };

let reducerSettings = (state = initState, action) => {
  switch (action.type) {
    case SET_SELECTED_SETTING: {
      // let settingsTypesIndex = state.settingsTypes.findIndex((index) => {index.id === action.id})
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id) {
              return { ...el, selected: true };
              
            } else {
              return { ...el, selected: false };
            }
          }),
        ],
        
      };
      return stateCopy;
    }
    case SET_COORDS_SETTING: {
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id && action.important) {
              return { ...el, coords: { ...el.coords, lat: action.lat, lon: action.lon } };
            } else if (el.id === action.id && el.selected) {
              return { ...el, coords: { ...el.coords, lat: action.lat, lon: action.lon } };
            } else {
              return el;
            }
          }),
        ],
      };
      return stateCopy;
    }
    case SET_LOADING_STATUS_SETTING: {
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id && el.selected) {
              return { ...el, loading: action.status };
            } else {
              return el;
            }
          }),
        ],
      };
      return stateCopy;
    }

    case SET_ERROR_SETTING: {
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id) {
              return { ...el, error: { status: action.status, description: action.description } };
            } else {
              return el;
            }
          }),
        ],
      };
      return stateCopy;
    }

    case SET_INPUT_VALUE_SETTING: {
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id && el.selected && el.input) {
              return {
                ...el,
                input: { ...el.input, inputValue: action.value },
                coords: { ...el.coords, lat: "", lon: "" },
              };
            } else {
              return el;
            }
          }),
        ],
      };
      return stateCopy;
    }

    case SET_HINTS_SETTING: {
      let stateCopy = {
        ...state,
        settingsTypes: [
          ...state.settingsTypes.map((el) => {
            if (el.id === action.id && el.selected && el.input) {
              return { ...el, hints: action.hintsArray };
            } else {
              return el;
            }
          }),
        ],
      };
      return stateCopy;
    }

    case SET_SAVE_BUTTON_SETTING: {
      let stateCopy = { ...state };
      let selectIdSetting = state.settingsTypes.findIndex((index) => index.id === action.id);
      let coords = state.settingsTypes[selectIdSetting].coords;
      if (coords.lon && coords.lat) {
        stateCopy.buttonSave = false;
      } else {
        stateCopy.buttonSave = true;
      }
      return stateCopy;
    }
    case SET_LOCAL_STORAGE_SETTINGS: {
      let stateCopy = {...state}
      localStorage.removeItem("settings");
      localStorage.setItem("settings", JSON.stringify(stateCopy));   
      return stateCopy
    }
    case SET_COORDS_SAVE: {
      let stateCopy = {...state}
      let selectIdSetting = state.settingsTypes.findIndex((index) => index.selected === true);
      let coords = state.settingsTypes[selectIdSetting].coords;
      stateCopy.coordsSave = {lat: coords.lat, lon: coords.lon}
      return stateCopy
    }
    default:
      return state;
  }
};

// TypeActions
const SET_SELECTED_SETTING = "SET_SELECTED_SETTING";
const SET_COORDS_SETTING = "SET_COORDS_SETTING";
const SET_LOADING_STATUS_SETTING = "SET_LOADING_STATUS_SETTING";
const SET_ERROR_SETTING = "SET_ERROR_SETTING";
const SET_INPUT_VALUE_SETTING = "SET_INPUT_VALUE_SETTING";
const SET_HINTS_SETTING = "SET_HINTS_SETTING";
const SET_SAVE_BUTTON_SETTING = "SET_SAVE_BUTTON_SETTING";
const SET_LOCAL_STORAGE_SETTINGS = "SET_LOCAL_STORAGE_SETTINGS";
const SET_COORDS_SAVE = "SET_COORDS_SAVE"

// ActionCreators
export const setSelectedSettingAC = (id) => ({ type: SET_SELECTED_SETTING, id });
export const setCoordsSettingAC = (id, lat, lon, important = false) => ({type: SET_COORDS_SETTING,id,lat,lon,important,});
export const setLoadingStatusSettingAC = (id, status) => ({ type: SET_LOADING_STATUS_SETTING, id, status });
export const setErrorSettingAC = (id, status, description = "") => ({type: SET_ERROR_SETTING,id,status,description,});
export const setInputValueSettingAC = (id, value) => ({ type: SET_INPUT_VALUE_SETTING, id, value });
export const setHintsSettingAC = (id, hintsArray) => ({ type: SET_HINTS_SETTING, id, hintsArray });
export const setSaveButtonSettingAC = (id) => ({ type: SET_SAVE_BUTTON_SETTING, id });
export const setLocalStorageSettingsAC = () => ({ type: SET_LOCAL_STORAGE_SETTINGS });
export const setCoordsSaveAC = () => ({ type: SET_COORDS_SAVE });

// ThunkCreators
export const getCitiesInputSettingTC = (id, value) => (dispatch) => {
  dispatch(setInputValueSettingAC(id, value));
  dispatch(setSaveButtonSettingAC(id))
  if (value != "") {
    let hintsCity = [];

    dispatch(setLoadingStatusSettingAC(id, true));

    API.getCity(value).then((response) => {
      let responseData = response.data.suggestions;
      for (let i = 0; i < responseData.length; i++) {
        hintsCity.push({
          id: i,
          data: { lat: responseData[i].data.geo_lat, lon: responseData[i].data.geo_lon },
          value: responseData[i].value,
        });
      }
      dispatch(setHintsSettingAC(id, hintsCity));
      dispatch(setLoadingStatusSettingAC(id, false));
    });
  }
  dispatch(setCoordsSaveAC())
};
export const getCoordinatesForCityTC = (id, hintsObj) => (dispatch) => {
  dispatch(setInputValueSettingAC(id, hintsObj.value));
  dispatch(setCoordsSettingAC(id, hintsObj.data.lat, hintsObj.data.lon));
  dispatch(setHintsSettingAC(id, []));
  dispatch(setSaveButtonSettingAC(id));
  dispatch(setCoordsSaveAC())
};
export const setSelectedSettingTC = (id, typeSetting) => (dispatch) => {
  if (typeSetting == "ip") {
    dispatch(setLoadingStatusSettingAC(id, true));
    let PositionSucces = (position) => {
      dispatch(setSelectedSettingAC(id));
      dispatch(setCoordsSettingAC(id, position.coords.latitude, position.coords.longitude));
      dispatch(setLoadingStatusSettingAC(id, false));
      dispatch(setSaveButtonSettingAC(id));
      dispatch(setErrorSettingAC(id, false));
      dispatch(setCoordsSaveAC())
    };
    let PositionError = (error) => {
      dispatch(setLoadingStatusSettingAC(id, false));
      dispatch(setCoordsSettingAC(id, "", "", true));
      dispatch(setErrorSettingAC(id, true, "Вы не разрешили использовать службу геолокации"));
      console.log(`ERROR(${error.code}): ${error.message}`);
    };
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(PositionSucces, PositionError);
    } else {
      dispatch(setErrorSettingAC(id, true, "Ваш браузер не поддерживает"));
      dispatch(setCoordsSettingAC(id, "", "", true));
      dispatch(setSaveButtonSettingAC(id));
    }
  } else {
    dispatch(setSelectedSettingAC(id));
    dispatch(setSaveButtonSettingAC(id));
    dispatch(setCoordsSaveAC())
  }
  
};


export default reducerSettings;
