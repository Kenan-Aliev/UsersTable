import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const UserList = ({ el, allcheck }) => {
  const [checkBox, setCheckBox] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setCheckBox(allcheck)
    if (allcheck || !allcheck) {
      dispatch({ type: 'CHECKED', checked: { name: el.name, id: el.id, status: allcheck } })
    }
  }, [allcheck])
  return (
    <>
      {checkBox ? (
        <tr className="bg-teal-800">
          <input
            type="checkbox"
            checked={checkBox}
            onChange={(e) => {
              setCheckBox(e.target.checked)
              dispatch({
                type: 'CHECKED',
                checked: { name: el.name, id: el.id, status: e.target.checked }
              })
            }}
          />
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.phone}</td>
        </tr>
      ) : (
        <tr>
          <input
            type="checkbox"
            checked={checkBox}
            onChange={(e) => {
              setCheckBox(e.target.checked)
              dispatch({
                type: 'CHECKED',
                checked: { name: el.name, id: el.id, status: e.target.checked }
              })
            }}
          />
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.phone}</td>
        </tr>
      )}
    </>
  )
}

export default UserList
