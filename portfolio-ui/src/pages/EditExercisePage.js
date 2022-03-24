import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const EditExercisePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    
    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        // console.log(newExercise)
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        if(response.status === 200){
          alert("Successfully edit the exercise!");
        } else {
          alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };
    
    return (
    <div>
        <h1>Edit Exercise</h1>
        <table>
            <thead>
               <tr>
                   <th>Name</th>
                   <th>Reps</th>
                   <th>Weight</th>
                   <th>Unit</th>
                   <th>Date</th>
               </tr> 
            </thead>
            <tbody>
                <tr>
                    <td><input
                       type="text"
                       value={name} 
                       onChange={e => setName(e.target.value)}
                    ></input></td>
                    <td><input
                       type="number"
                       value={reps} 
                       onChange={e => setReps(e.target.value)} 
                    ></input></td>
                    <td><input
                       type="number"
                       value={weight} 
                       onChange={e => setWeight(e.target.value)} 
                    ></input></td>
                    <td><select
                        value={unit} 
                        onChange={e => setUnit(e.target.value)}
                        >
                        <option value="lbs">lbs</option>
                        <option value="kg">kg</option>
                    </select></td>
                    <td><input
                       type="text"
                       value={date} 
                       onChange={e => setDate(e.target.value)}
                    ></input></td> 
                    <td>
                        <button onClick={editExercise}>Save</button>
                    </td>     
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}

export default EditExercisePage