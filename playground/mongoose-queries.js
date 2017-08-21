const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// var id = '599b47ddcadbbe6053e270821';
//
// if ( !ObjectID.isValid(id) ) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById
var userId = '599aed3ae5905f962b7ac8fe';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }

  console.log('User by Id', user);
}).catch((e) => console.log(e));
