import { createContext, useReducer } from "react"
import { initialState, inputReducer} from "./inputreducer"

export const inputContext = createContext()



export const Inputprovider = ({ children }) => {
  const [state, dispatch] = useReducer(inputReducer, initialState)

  return (
    <inputContext.Provider value={{ state, dispatch }}>
      {children}
    </inputContext.Provider>
  )
}
