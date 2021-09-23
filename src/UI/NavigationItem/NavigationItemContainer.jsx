import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ChangeLinkAC } from "../../BLL/reducers/reducer-navigation";
import { getAllWeatherTC } from "../../BLL/reducers/reducer-weather";
import NavigationItem from "./NavigationItem";

class NavigationItemContainer extends React.Component {
  componentDidMount(){
    this.props.getAllWeatherUI(this.props.coordsSave)
  }
  render() {
    return <NavigationItem links={this.props.links} ChangeLinkUI={this.props.ChangeLinkUI}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.navigation.links,
    coordsSave:  state.settingsPage.coordsSave
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLinkUI: (id) => {
      dispatch(ChangeLinkAC(id));
    },
    getAllWeatherUI: (coordsSave) => {
      dispatch(getAllWeatherTC(coordsSave))
    }
  };
};

let NavigationItemContainerRouter = withRouter(NavigationItemContainer);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItemContainerRouter);
