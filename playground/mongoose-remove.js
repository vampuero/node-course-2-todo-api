const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//   console.log(result);
// Todo.remove({}).then((result) => {
// });

// Todo.findOneAndRemove({});
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59a4667913fdc256156ad31b'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59a4667913fdc256156ad31b').then((todo) => {
  console.log(todo);
});
