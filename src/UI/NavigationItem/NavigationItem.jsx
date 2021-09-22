import { NavLink } from "react-router-dom";
import s from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  
  return (
    <ul className={s.linksList}>
      {props.links.map((el) => (
        <NavLink
          key={el.id}
          to={el.link}
          onClick={() => props.ChangeLinkUI(el.id)}
          className={s.linkItem}
          activeClassName={s.active}
        >
          {el.text}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationItem;
