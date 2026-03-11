import Student from '../models/Student.js';

export function createStudent(req, res) {

    const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    });

    newStudent.save().then(()=>{
        res.json({
            message: "Student Created Successfully",
        });
    });
        
    }
    export async function createStudentAsync(req, res) {
    try {
        const newStudent = new Student({
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        });

        await newStudent.save();

        res.json({
            message: "Student Created Successfully",
        });
    } catch (error) {
        console.error(error);
    }
}

    export function getStudents(req, res) {

        Student.find().then(
            (students)=>{

            })
    }
