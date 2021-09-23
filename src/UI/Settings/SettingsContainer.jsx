import { connect } from "react-redux";
import { getCitiesInputSettingTC, getCoordinatesForCityTC, setSelectedSettingTC,setLocalStorageSettingsAC } from "../../BLL/reducers/reducer-settings";
import { getAllWeatherTC } from "../../BLL/reducers/reducer-weather";
import Settings from "./Settings";

const mapStateToProps = (state) =>{
  return {
    settingsTypes: state.settingsPage.settingsTypes,
    buttonSave: state.settingsPage.buttonSave,
    coordsSave: state.settingsPage.coordsSave
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setSelectedSettingUI: (id, typeSetting) => {
      dispatch(setSelectedSettingTC(id, typeSetting))
    },
    getCitiesInputSettingUI: (id,value) => {
      dispatch(getCitiesInputSettingTC(id,value))
    },
    getCoordinatesForCityUI: (id, hintsObj) => {
      dispatch(getCoordinatesForCityTC(id, hintsObj))
    },
    setLocalStorageSettingsUI: () => {
      dispatch(setLocalStorageSettingsAC())
    },
    getAllWeatherUI: (coords) => {
      dispatch(getAllWeatherTC(coords))
    }
  }
}


export let SettingsContainier = connect(mapStateToProps, mapDispatchToProps)(Settings);