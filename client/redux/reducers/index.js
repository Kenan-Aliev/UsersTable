import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import usersData from './usersData'


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    usersData

  })

export default createRootReducer
