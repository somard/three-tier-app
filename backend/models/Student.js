import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gpa: Number
});

export default mongoose.model('Student', studentSchema);

