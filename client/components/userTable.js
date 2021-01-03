import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import UserList from './userList'

const UserTable = () => {
  const usersList = useSelector((s) => s.usersData.users)
  const users = useSelector((s) => s.usersData.checked)
  const [allCheck, setAllCheck] = useState(false)
  useEffect(()=>{
    if(users.length === 0){
      setAllCheck(false)
    }
  },[users.length])
  return (
    <>
      <table className="border-seperate border border-green-800 py-5">
        <thead>
          <tr>
            <th className="border-seperate border border-green-800 w-1/8">
              <input type="checkbox" checked={allCheck} onChange={(e) => setAllCheck(e.target.checked)} />
            </th>
            <th className="border-seperate border border-green-800">Name</th>
            <th className="border-seperate border border-green-800">Email</th>
            <th className="border-seperate border border-green-800">Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return <UserList key={user.id} el={user} allcheck={allCheck} />
          })}
        </tbody>
      </table>
      <div className="flex">
        <h4>Пользователи:</h4>
        {users.map((user) => {
          return <div key={user.id}>{`${user.name},`}</div>
        })}
      </div>
    </>
  )
}
export default UserTable
