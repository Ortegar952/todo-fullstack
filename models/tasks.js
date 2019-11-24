const db = require('../db');

//sql queries needed to communicate with the db are gonna be in this object 
const Task = {};

Task.findAll = () => {
    return db.manyOrNone('SELECT * FROM tasks');
};

Task.findById =(id) =>{
    //db one () takes 2 arguments. the first is a SQL query
    return db.one(
      'SELECT * FROM tasks WHERE id=$1',
      // the second is an array or variables to be injected in the query
      [id]
    );
  };
Task.create = (name, message, subject) => {
    return db.one(
      'INSERT INTO tasks (name, message, subject) VALUES ($1, $2, $3) returning id',
      //[$1 = NAME,$2 = description, $3 =image, $4 = type  ]
      [name, message, subject]
    );
  };

Task.delete = (id) =>{
    return db.none(
      'DELETE FROM tasks WHERE id = $1',
      [id]
    );
  };


module.exports = Task;
