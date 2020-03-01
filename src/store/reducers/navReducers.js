
const initialState = {
  evt: 'go',
  ind: 1,
  tela: '/Aa1/',
};


const TYPE_EVENT = 'NAV_EVENT';


export const navEvent = (evt, ind) => dispatch => {
  dispatch({ type: TYPE_EVENT, evt, ind });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE_EVENT:
        {
          if (action.evt === 'prev') {
            state.ind -= 1;
          } else if (action.evt === 'next') {
            state.ind += 1;
          } else if (action.evt === 'go') {
            state.ind = action.ind;
          }

          state.tela = `/Aa${state.ind}/`;

          return { ...state, evt: action.evt, ind: state.ind, tela: state.tela };
        }
    default:
        return state;
    }
};


// const TYPE_EVENT = 'NAV_EVENT';

// const initialState = {
//   evt: 'go',
//   ind: 1,
// };

// export const navEvent = (evt, ind = 1) => ({ type: TYPE_EVENT, evt, ind });

// export default (state = initialState, action) => {
//   console.log('ddd');

//   switch (action.type) {
//     case TYPE_EVENT:
//         {
//           if (action.evt === 'prev') {
//             state.ind -= 1;
//             // navigate(`/Aa${ state.indiceNav }/`);
//           } else if (action.evt === 'next') {
//             state.ind += 1;
//             // navigate(`/Aa${ state.indiceNav }/`);
//           } else if (action.evt === 'go') {
//             state.ind = action.ind;
//           }

//           return { ...state, evt: action.evt, ind: state.ind };
//         }
//     default:
//         return state;
//     }
// };


// export const navEvent = ( {state = initialState , action } ) => dispatch => {

//   switch (action.evt) {
//       case 'prev':{
//         state.ind  -=1;
//         changeNav( state , dispatch , action );
//         return state;
//       }
//       case 'next':{
//         state.ind  +=1;
//         changeNav( state , dispatch , action );
//         return state;
//       }
//       case 'go':{
//         state.ind = action.ind;
//         changeNav( state , dispatch , action );
//         return state;
//       }
//       default:
//         return state;
//   }
// };


// export default (state = initialState , action  ) => {
//   return state
// };

// const changeNav = ( state , dispatch , action ) => {
//   dispatch( push( `/Aa${ state.ind }/` ) );
//   return { ...state, evt: action.evt , ind: state.ind };
// }
