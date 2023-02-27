const express = require('express')

const router = express.Router()

// GET all exams
router.get('/', (req, res) => {
    res.json({mssg: 'GET all exams'})
})

module.exports = router