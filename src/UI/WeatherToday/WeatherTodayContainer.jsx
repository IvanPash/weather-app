import React from "react";
import { connect } from "react-redux";
import { getWeatherCurrentTC } from "../../BLL/reducers/reducer-weather";
import WeatherToday from "./WeatherToday";

class WeatherTodayContainer extends React.Component {
  componentDidMount(){
    this.props.getWeatherCurrentUI(this.props.coords)
  }
  render(){
    return (
      <WeatherToday currentWeather={this.props.currentWeather} loading={this.props.loading} coords={this.props.coords}/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    coords: state.settingsPage.coordsSave,
    currentWeather: state.weatherPage.current,
    loading: state.weatherPage.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherCurrentUI: (coords) => {
      dispatch(getWeatherCurrentTC(coords))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherTodayContainer);
