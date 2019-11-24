const router = require('express').Router();

const controller = require('./controller');

//whenever someone posts to the localhost:/8000/api/pokemon, were using this controller 
//method 
router.post('/tasks', controller.create);

//put is used for overwriting data
// router.put('/pokemon/:id', controller.update);

//same URL as above, but the method stated in fetch (put vs delete) decides 
//which controller method to use
router.delete('/tasks/:id', controller.delete);
module.exports = router;