// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('598e3389d02a35b70c3a35fb')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('598de4978a001c0ed968652f')
  }, {
    $set: {
      name: 'Victor'
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
