DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  name    VARCHAR(50) NOT NULL,
  message VARCHAR(100) NOT NULL,
  subject VARCHAR(100) NOT NULL
);

INSERT INTO tasks (name, message, subject) VALUES
(
  'Buy Almond Milk',
  'Stop By The Supermarket and Buy Two Gallons of Almond Milk',
  'Grocery'
),
(
  'Take Out The Trash',
  'Retrieved Garbage Bags From The Garage',
  'Chores'
),
(
  'Take Out Pelus Out For A Walk',
  'Go Around the Block with the Dog',
  'Pet'
);
