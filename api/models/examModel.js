const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    patiendId: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        require: true
    },
    zipCode: {
        type: String,
        require: true
    },
    latestBmi: {
        type: Number,
        require: true
    },
    examId: {
        type: String,
        require: true
    },
    latestWeight: {
        type: Number,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    },
    icuAdmit: {
        type: Number,
        require: true
    },
    mortality: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Exam', examSchema)