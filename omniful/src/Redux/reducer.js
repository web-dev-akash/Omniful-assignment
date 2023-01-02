import { GET_ARABIC, GET_HUBS } from "./actionTypes";

const initialState = {
  hubs: [],
  opposite: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HUBS: {
      return {
        ...state,
        hubs: payload,
      };
    }
    case GET_ARABIC: {
      return {
        ...state,
        opposite: payload,
      };
    }
    default: {
      return state;
    }
  }
};
