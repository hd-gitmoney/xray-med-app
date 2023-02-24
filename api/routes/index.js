const express = require('express');
const router = express.Router();

// const app = express()
// app.listen(3001, () => {
//   console.log("api runs")
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports = router;
