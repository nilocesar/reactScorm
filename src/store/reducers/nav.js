// import { push } from 'connected-react-router';

// "react-redux": "^5.0.7",
// "react-router-dom": "^5.1.2",

const initialState = {
  eventNav: 'go',
  indiceNav: 1,
};


const TYPE_EVENT = 'NAV_EVENT';

export const navMode = (eventNav, indiceNav = 1) => ({ type: TYPE_EVENT, eventNav, indiceNav });

export default (state = initialState, action) => {
switch (action.type) {
  case TYPE_EVENT:
      {
        if (action.eventNav === 'prev') {
          state.indiceNav -= 1;
          // navigate(`/Aa${state.indiceNav}/`);
        } else if (action.eventNav === 'next') {
          state.indiceNav += 1;
          // navigate(`/Aa${state.indiceNav}/`);
        } else if (action.eventNav === 'go') {
          state.indiceNav = action.indiceNav;
          alert('s');
          // history.push('/AA2');
        }

        return { ...state, eventNav: action.eventNav, indiceNav: state.indiceNav };
      }
  default:
      return state;
  }
};
