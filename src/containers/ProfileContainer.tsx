import { createContext } from "react"

interface ContextProps {
  fileList: Array<{
    filename: string
    title: string
  }>
}

export const ProfileContext = createContext<Partial<ContextProps>>({})

export const ProfileContainer: React.FC<ContextProps> = ({
  children, fileList
}) => (
  <ProfileContext.Provider value={{fileList}}>
    {children}
  </ProfileContext.Provider>
)