import { connect } from "react-redux";
import { ChangeLinkAC } from "../../BLL/reducers/reducer-navigation";
import NavigationItem from "./NavigationItem";

const mapStateToProps = (state) => {
  return {
    links: state.navigation.links
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLinkUI: (id) => {
      dispatch(ChangeLinkAC(id))
    }
  }
}

let NavigationItemContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationItem)

export default NavigationItemContainer;
