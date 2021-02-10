import { createContext } from "react";

export const initialState = {
  points: 0
}

const PointContext = createContext(initialState)

export const PointProvider = PointContext.Provider
