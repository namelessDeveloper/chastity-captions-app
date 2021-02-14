import { useState, createContext } from "react"

interface ContextProps {
  available: number
  setAvailable: (points: number) => void
  
  total: number
  setTotal: (points: number) => void
}

export const PointContext = createContext<Partial<ContextProps>>({})

export const PointContainer: React.FC = ({
  children
}) => {
  const [available, setAvailable] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <PointContext.Provider value={{
      available,
      setAvailable,
      total, 
      setTotal,
    }}>
      {children}
    </PointContext.Provider>
  )
}