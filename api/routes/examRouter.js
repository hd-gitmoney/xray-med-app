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
import express from 'express';
import { createExam, getExam, getExams, updateExam, deleteExam } from '../controllers/examController';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

/* GET posts */
router.get('/', async (req, res, next) => {
  // We look for a query parameter "search"
  const { search } = req.query;
  let posts;
  if (search) { // If search exists, the user typed in the search bar
    posts = await exam.aggregate(
      [
        {
          '$search': {
            'index': 'default', 
            'text': {
              'query': search, 
              'path': 'AGE'
            }
          }
        }, {
          '$project': {
            'AGE': 1, 
            'ICU_Admit': 1, 
            'LATESTWEIGHT': 1, 
            'LATEST_BMI': 1, 
            'MORTALITY': 1, 
            'NUM_ICU_admits': 1, 
            'PATIENT_ID': 1, 
            'SEX': 1, 
            'ZIP': 1, 
            'exam_Id': 1
          }
        }
      ]
    );
  } else { // The search is empty so the value of "search" is undefined
    posts = await exam.find().sort({ createdAt: 'desc' });
  }

  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched posts',
    data: { posts },
  });
});

//GET single xray exam
router.get('/:id', function(req, res){
  res.json({mssg: 'GET single xray exam'})
})

//POST a new xray exam
router.post('/', (req,res) => {
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

export default router;