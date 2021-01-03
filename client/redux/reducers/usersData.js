import axios from 'axios'


const initialState = {
  users: [],
  checked:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.users }
    case 'CHECKED':
      if(action.checked.status && state.checked.filter(el=>el.id!==action.checked.id) && state.checked.length < state.users.length) {
        return {...state,checked: [...state.checked,action.checked]}
      }
     return {...state,checked: state.checked.filter(el=>el.id !== action.checked.id)}
    default:
      return state
  }
}

export const getUsers = () => {
  return (dispatch) => {
    axios('https://jsonplaceholder.typicode.com/users').then(({ data }) =>
      dispatch({ type: 'GET_USERS', users: data })
    )
  }
}
