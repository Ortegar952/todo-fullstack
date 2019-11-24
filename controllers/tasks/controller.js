//this file will communicate between the user request and any database action

const Task = require('../../models/tasks');

const controller = {};

controller.index = (req,res)=>{
      Task
        .findAll()
        .then((data)=>{
            res.render('tasks/index', {tasks: data});
        })
        .catch(err => console.log('ERROR:', err));
}
controller.show = (req, res) => {
  const id = req.params.id;
  Task
    .findById(id)
    .then((data) => {
      res.render('tasks/show', data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
    res.render('tasks/new');
  };

// controller.update = (req, res) =>{
//   const id = req.params.id;
//   Pokemon
//       .findById(id)
//       .then(data =>{
//         res.render('pokemon/update', data);
//       })
// };



module.exports = controller;
