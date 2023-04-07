import { useContext } from "react";
import { AppContext } from ".";
import { Actions, CarInfo } from "./types";

export const useProjectContext = () => {
  const { state, dispatch } = useContext(AppContext);

  return {
    ...state,
    setResult: (result: any) => {
      dispatch({
        type: Actions.SET_RESULT,
        payload: { result },
      });
    },
    setCarInfo: (carInfo: CarInfo) => {
      dispatch({
        type: Actions.SET_CARINFO,
        payload: { carInfo },
      });
    },
  };
};
