import { DataType, ActionType, Actions } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
  switch (action.type) {
    case Actions.SET_RESULT:
      if (!action.payload.result) return { ...state, result: {} };
      return { ...state, result: action.payload.result };
    case Actions.SET_CARINFO:
      if (!action.payload.carInfo) return { ...state, carInfo: {} };
      return { ...state, carInfo: action.payload.carInfo };
    default:
      return state;
  }
};
