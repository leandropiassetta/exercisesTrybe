import { CHANGE_SIGNAL } from '../actionCreators';

const initialState = {
  signal: {
    color: 'red',
  },
}

function signalColor(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

export default signalColor;
