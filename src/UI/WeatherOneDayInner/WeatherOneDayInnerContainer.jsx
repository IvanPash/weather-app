import { connect } from "react-redux";
import WeatherOneDayInner from "./WeatherOneDayInner";

const mapStateToProps = (state) => {
  return {
    coords: state.settingsPage.coordsSave,
    daily: state.weatherPage.daily,
    loading: state.weatherPage.loading,
    city: state.weatherPage.city,
  };
};

export default connect(mapStateToProps)(WeatherOneDayInner);
