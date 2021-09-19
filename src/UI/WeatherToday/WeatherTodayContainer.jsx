import { connect } from "react-redux";
import WeatherToday from "./WeatherToday";

const mapStateToProps = (state) => {
  return {
    weather: state.weatherTodayPage.weatherOneDay
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export let WeatherTodayContainer = connect(mapStateToProps,mapDispatchToProps)(WeatherToday);
