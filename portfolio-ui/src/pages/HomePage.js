import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ExerciseList from '../components/ExerciseList'

const HomePage = ({setExerciseToEdit}) => {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }  
    }

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push('/edit-exercise')
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }

    useEffect(() => {
        loadExercises();
    }, []);
    
  
    return (
      <>
        <article className='home'>
            <h1>Completed Exercises</h1>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit} ></ExerciseList>
        </article>
      </>
  )
}

export default HomePage