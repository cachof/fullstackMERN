import React from 'react'
import { VscEdit, VscTrash } from "react-icons/vsc";

const Exercise = ({exercise, onDelete, onEdit}) => {
  return (
    <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.unit}</td>
        <td>{exercise.date}</td>
        <td><VscEdit className='icon' onClick={() => onEdit(exercise)}/></td>
        <td><VscTrash className='icon' onClick={() => onDelete(exercise._id)}/></td>
    </tr>
  )
}

export default Exercise