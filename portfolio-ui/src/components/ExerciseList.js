import React from 'react'
import Exercise from './Exercise'

const ExerciseList = ({exercises, onDelete, onEdit}) => {
  return (
    <div>
        <table id="exercises">
            <thead>
               <tr>
                   <th>Name</th>
                   <th>Reps</th>
                   <th>Weight</th>
                   <th>Unit</th>
                   <th>Date</th>
                   <th>Edit</th>
                   <th>Delete</th>
               </tr> 
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    </div>
  )
}

export default ExerciseList