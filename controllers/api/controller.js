const Task = require('../../models/tasks');

const controller = {};
controller.create = (req, res) => {
  const name = req.body.name,
        message = req.body.message,
        subject = req.body.subject;
  Task
    .create(name, message, subject)
    .then(data => res.json(data))
    .catch(err => console.log('BACKEND ERROR:', err));
};

controller.delete = (req,res) =>{
  id = req.body.id;
  Task
    .delete(id)
    .then(data => res.json(data))
    .catch(err => console.log('DELETE ERROR:', err));
}

module.exports = controller;