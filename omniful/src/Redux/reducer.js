import { GET_HUBS } from "./actionTypes";

const initialState = {
  hubs: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HUBS: {
      return {
        hubs: payload,
      };
    }
    default: {
      return state;
    }
  }
};
