/* importing the model */
import * as exercises from './exercise_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json());

// create
app.post("/exercises", (req, res) => {
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight, 
        req.body.unit, 
        req.body.date
    ).then(exercise => {
        res.status(201).json(exercise);
    }).catch(error => {
        console.error(error);
        res.status(500).json({ Error: error });
    });
});


// Read
app.get('/exercises', (req, res) => {
    let filter = {};
    if(req.query.name !== undefined){
        filter = { name: req.query.name };
    }
    exercises.findExercise(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });

})


// Update
app.put('/exercises/:_id', (req, res) => {
    const exercise = {
        _id: req.params._id, 
        name: req.body.name, 
        reps: req.body.reps, 
        weight: req.body.weight,
        unit: req.body.unit,
        date: req.body.date
    }
    exercises.replaceExercise(exercise).then(numUpdated => {
            if (numUpdated === 1) {
                res.json(exercise)
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
})

// Delete
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});