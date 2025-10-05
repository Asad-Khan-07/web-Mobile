export const initialState = {username:""}

export function inputReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {...state, username:action.payload} 
    case "nothing":
      return {...state,username:state.username===""}  
  }
}
