//this file is to decide what to do when someone is reaches 
//localhost/8000/pokemon

const router = require('express').Router();
const controller = require('./controller');

//router.get('extention after localhost:8000/pokemon',the_controller_method_that_matches)
router.get('/', controller.index);


router.get('/new', controller.new);

// router.get('/:id/update', controller.update);

// localhost:8000/pokemon/:id or localhost:8000/pokemon/1
router.get('/:id', controller.show);

//restful routing =  order in which we place our routes 
//any URL that include a variable such as :id should be placed at the bottom
//of this page. This is because we dont want other extensions to be misinterpreted as a URL variable

//in cases where you have an extension AFTER a variable such as '/id/update', it 
//should be place above the URL
module.exports = router;