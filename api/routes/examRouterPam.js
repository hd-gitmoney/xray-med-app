// const express = require('express');
// //const debug = require('debug')('index: examsRouter');
// const examController = require('../controllers/examsController');
// const examRouter = express.Router();


// examRouter.get('/', examController.getExams);


// examRouter.get('/:id', examController.getexamById);
// examRouter.post('/:id', examController.createOneExam);
// examRouter.put('/:id', examController.updateOneExam);

// examRouter.delete('/exams', examController.deleteOneExam);

// module.exports = examRouter;


//Pam
// import express from 'express';
// import { createExam, getExam, getExams, updateExam, deleteExam } from '../controllers/examController';

// //const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('API is working properly!');
// });

// //GET single xray exam
// router.get('/:id', function(req, res){
//   res.json({mssg: 'GET single xray exam'})
// })

// //POST a new xray exam
// router.post('/', function(req,res){
//   res.json({mssg: 'POST a new exam'})
// })

// //DELETE exam
// router.delete('/:id', function(req, res){
//   res.json({mssg: 'DELETE an exam'})
// })

// //UPDATE exam
// router.patch('/:id', function(req, res){
//   res.json({mssg: "UPDATE this exam"})
// })
//module.exports = router;

//export default router;