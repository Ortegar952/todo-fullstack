//express comes with the ability to redirect a user based on a URL,
// thats what this set up is 

const router = require('express').Router();
      //creating routes for our app using controllers
      router.use('/api', require('./controllers/api'));
      router.use('/tasks', require('./controllers/tasks'));

      //handles the loalhost:8000. request 
      router.get('/',(req,res) => res.render('index'));
      
      

module.exports = router;