import  { createContext, useContext, useState, ReactNode } from 'react'

interface ActalentLibraryContextType {
  token: string;
  setToken: (token: string) => void;
  userType: string;
  setUserType: (userType: string) => void;
  id: string;
  setId: (id: string) => void;
}

const ActalentLibraryContext = createContext<ActalentLibraryContextType>({
  token: '',
  setToken: () => {},
  userType: '',
  setUserType: () => {},
  id: '',
  setId: () => {}
})

export const useActalentLibraryContext = () => {
  const context = useContext(ActalentLibraryContext)
  if (!context) {
    throw new Error('useActalentLibraryContext must be used within a ActalentLibraryContextProvider')
  }
  return context
}


export const ActalentLibraryContextProvider= ({ children }:{children: ReactNode}) => {
  const [token, setToken] = useState<string>('hello')
  const [userType, setUserType] = useState<string>('')
  const [id, setId] = useState<string>('')

  return (
    <ActalentLibraryContext.Provider
      value={{ token, setToken, userType, setUserType, id, setId }}
    >
      {children}
    </ActalentLibraryContext.Provider>
  )
}
