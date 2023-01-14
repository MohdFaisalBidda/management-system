import React from 'react'

const StudItem = ({name,roll_no,checkin,checkout,handleUpdate}) => {



  return (
      <>
      <tr>
        <td>{roll_no}</td>
        <td>{name}</td>
        <td>{checkin}</td>
        <td onClick={handleUpdate}>{checkout ? checkout: <h4 style={{textDecoration:"underline",color:"blue",cursor:"pointer"}}>Update</h4>}</td>
        </tr>
      </>
  )
}

export default StudItem
