const express = require('express');
const { createExam, getExam, getExams, updateExam, deleteExam } =  require('../controllers/exams');

const router = express.Router();

// const app = express()
// app.listen(3001, () => {
//   console.log("api runs")
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('API is working properly!');
// });

//GET single xray exam
router.get('/:id', function(req, res){
  res.json({mssg: 'GET single xray exam'})
})

//POST a new xray exam
router.post('/', function(req,res){
  res.json({mssg: 'POST a new exam'})
})

//DELETE exam
router.delete('/:id', function(req, res){
  res.json({mssg: 'DELETE an exam'})
})

//UPDATE exam
router.patch('/:id', function(req, res){
  res.json({mssg: "UPDATE this exam"})
})

module.exports = router;

//export default router;