import { Dispatch, ReactNode } from "react";

export type CarInfo = {
  brand: string | number;
  model: string | number;
  year: string | number;
};

export type DataType = {
  result: any;
  carInfo: CarInfo | null;
};

export type ActionType = {
  type: Actions;
  payload?: any;
};

export type ContextType = {
  state: DataType;
  dispatch: Dispatch<ActionType>;
};

export type ProviderType = {
  children: ReactNode;
};

export enum Actions {
  SET_RESULT,
  SET_CARINFO,
}
