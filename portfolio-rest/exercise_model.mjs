// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb+srv://cachof:HnXbtZ9Q0fvvJE6c@cs290.l5j2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true, default: 'lbs'},
    date: { type: String, required: true}
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

const findExercise = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const replaceExercise = async ({_id, name, reps, weight, unit, date} ) => {
    if (_id === undefined) {
        return
    }
    const result = await Exercise.findOneAndUpdate({ "_id": _id }, 
        { 
            "$set": {
                "name": name,
                "reps": reps,
                "weight": weight,
                "unit": unit,
                "date": date}
        });
    if (result === null) {
        return 0;
    }
    return 1

}

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}

export {createExercise, findExercise, replaceExercise, deleteById}
