import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    city : String
}
)

const Student = mongoose.model('Student', userSchema);

export default Student;