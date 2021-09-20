import { connect } from "react-redux";
import { setCoordsCityAC, setInputAC, setSettingTypeAC } from "../../BLL/reducers/reducer-settings";
import Settings from "./Settings";

const mapStateToProps = (state) =>{
  return {
    settingTypes: state.settingsPage.settingTypes,
    input: state.settingsPage.input,
    hintsCity: state.settingsPage.hintsCity,
    selectedCoordsCity: state.settingsPage.selectedCoordsCity
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setSettingTypeUI: (selectedType) => {
      dispatch(setSettingTypeAC(selectedType))
    },
    setInputUI: (value) => {
      dispatch(setInputAC(value))
    },
    setCoordsCityUI: (obj) => {
      dispatch(setCoordsCityAC(obj))
    }
  }
}


export let SettingsContainier = connect(mapStateToProps, mapDispatchToProps)(Settings);