const CHANGE_LINK = "CHANGE-LINK";

const initState = {
  links: [
    { id: 1, active: false, link: "/oneday/0", text: "На сегодня", exact: false },
    { id: 2, active: false, link: "/month/", text: "На месяц", exact: false },
    { id: 3, active: false, link: "/", text: "настройки", exact: true },
  ],
};

let reducerNavigation = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LINK:
      let stateCopy = {
        ...state,
        links: state.links.map((el) => {
          if (el.id === action.id && !el.active) {
            return { ...el, active: true };
          }
          return { ...el, active: false };
        }),
      };
      return stateCopy;

    default:
      return state;
  }
  return state;
};

export const ChangeLinkAC = (id) => ({ type: CHANGE_LINK, id });

export default reducerNavigation;
