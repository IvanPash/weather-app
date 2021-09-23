import React from "react";
import { connect } from "react-redux";
import {} from "../../BLL/reducers/reducer-weather";
import WeatherMonth from "./WeatherMonth";

class WeatherMonthContainer extends React.Component {
  render() {
    return (
      <WeatherMonth
        loading={this.props.loading}
        city={this.props.city}
        daily={this.props.daily}
        coords={this.props.coords}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coords: state.settingsPage.coordsSave,
    loading: state.weatherPage.loading,
    city: state.weatherPage.city,
    daily: state.weatherPage.daily,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getWeatherCurrentUI: (coords) => {
    //   dispatch(getWeatherCurrentTC(coords))
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMonthContainer);
