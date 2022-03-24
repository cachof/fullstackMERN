import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateExercisePage = () => {
  
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        console.log(newExercise)
        const response = await fetch(`/exercises`, {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        if(response.status === 201){
          alert("Successfully added the exercise!");
        } else {
          alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };
    
    return (
    <div>
        <h1>Add An Exercise</h1>
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
                       placeholder='Enter Exercise Here'
                       value={name} 
                       onChange={e => setName(e.target.value)}
                    ></input></td>
                    <td><input
                       type="number"
                       placeholder='Enter Reps Here'
                       value={reps} 
                       onChange={e => setReps(e.target.value)} 
                    ></input></td>
                    <td><input
                       type="number"
                       placeholder='Enter Weight Here'
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
                       type="date"
                    //    placeholder='Enter Date Here' 
                       value={date} 
                       onChange={e => setDate(e.target.value)}
                    ></input></td> 
                    <td>
                        <button onClick={addExercise}>Add</button>
                    </td>     
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}

export default CreateExercisePage