import { createContext } from "react";


interface ContextProps {
  available: number
  setAvailable: (points: number) => void
  
  total: number
  setTotal: (points: number) => void
}

export const PointContext = createContext<Partial<ContextProps>>({})

export const PointProvider = PointContext.Provider
