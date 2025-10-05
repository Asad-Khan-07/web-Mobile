import { createContext, useReducer } from "react"
import { initialState, themeReducer } from "./themereducer"

export const ThemeContext = createContext()



export const Themeprovider = ({ children }) => {
  const [mode, dispatch] = useReducer(themeReducer, initialState)

  return (
    <ThemeContext.Provider value={{ mode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
