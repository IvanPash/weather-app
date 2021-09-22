import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ChangeLinkAC } from "../../BLL/reducers/reducer-navigation";
import NavigationItem from "./NavigationItem";

class NavigationItemContainer extends React.Component {

  render() {
    return <NavigationItem links={this.props.links} ChangeLinkUI={this.props.ChangeLinkUI}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.navigation.links,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLinkUI: (id) => {
      dispatch(ChangeLinkAC(id));
    },
  };
};

let NavigationItemContainerRouter = withRouter(NavigationItemContainer);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItemContainerRouter);
