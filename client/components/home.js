import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import UserTable from './userTable'
import { getUsers } from '../redux/reducers/usersData'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div>
      <Route exact path="/" component={() => <UserTable />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
