export const initialState = {mode1:"light"}

export function themeReducer(state, action) {
  switch (action.type) {
    case "WHITE":
      return {...state,mode1:state.mode1 === "light" ? "dark" : "light"} 
  }
}
