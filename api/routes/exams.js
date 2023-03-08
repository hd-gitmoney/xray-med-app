const express = require('express')
const {
    createExam,
    getExams,
    getExam,
    deleteExam,
    updateExam
} = require('../controllers/examController')

const router = express.Router()

// GET all exams
router.get('/', getExams)

//GET a single exam
router.get('/:id', getExam)

// POST a new exam
router.post('/', createExam)

//Delete a exam
router.delete('/:id', deleteExam)

//UPDATE a exam
router.patch('/:id', updateExam)

module.exports = router