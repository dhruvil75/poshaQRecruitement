const submission =  (client, dbName, collectionName, bucketSize) => {
  // Use async-await and lodash to complete this task.
  // client = Mongo server,
  // dbName = Your database name,
  // bucketSize = input variable, can be any integer
  // START your Code
  // **


  var mong = require('mongoose');

  // const express = require('express')

  // const app = express();

  // console.log("hi");
  


  // mong = dbconn(client,dbName,mong);
  mong.connect("mongodb://admin:password1@ds133632.mlab.com:33632/poshaq", {useNewUrlParser: true});


  // console.log("hi 2");
  

    category.find({},function (err,obj){
    console.log(err + "err");
    
      console.log(obj);
  });
   
  




  // var grouped = _.mapValues(_.groupBy(collectionName, 'category'),
  //   clist => clist.map(ele => _.omit(ele, 'category')));

  // a = [];
  // for (o in grouped) {
  //   a.push(o);
  // }

  // answer = {};
  // for (let i = 0; i < a.length; i++) {


  //   var finalArray = grouped[a[i]].map(function (obj) {
  //     return obj._id;
  //   });

  //   finalArray = _.chunk(finalArray, 2);


  //   answer[a[i]] = finalArray;

  //   // /console.log(finalArray);
  // };

  // //console.log(answer);

  // ultimate_answer = [];
  // ultimate_answer[0] = answer;

  // console.log(ultimate_answer);


  // }



  // **
  // END your code  
};
var _ = require('lodash');
test_example = [{
    "_id": "0",
    "category": "A"
  },
  {
    "_id": "1",
    "category": "B"
  },
  {
    "_id": "2",
    "category": "C"
  },
  {
    "_id": "3",
    "category": "A"
  },
  {
    "_id": "4",
    "category": "B"
  },
  {
    "_id": "5",
    "category": "C"
  },
  {
    "_id": "6",
    "category": "A"
  },
  {
    "_id": "7",
    "category": "B"
  },
  {
    "_id": "8",
    "category": "C"
  },
  {
    "_id": "9",
    "category": "A"
  },
  {
    "_id": "10",
    "category": "B"
  },
]

 function dbconn(client,dbName,mong){
  // console.log("Asd");
  
  mong.connect("mongodb://admin:password1@ds133632.mlab.com:33632/poshaq", {useNewUrlParser: true});

  var conn = mong.connection;
  conn.on("error", console.error.bind(console, "Connection Error") );
  conn.once("open",function (callback){
    console.log("connection succeeded");    
  });
  return mong;

}

const category = require('./schema');

submission("mongodb://admin:password1@ds133632.mlab.com:33632/", "poshaq", category, 3);

// Test Case:

// Calling submission function with bucketSize = 2 and products = test_example
// Returns[
//   {
//     "A": [["0", "3"], ["6", "9"]],
//     "B": [["1", "4"], ["7", "10"]],
//     "C": [["2", "5"], ["8"]]
//   }
// ]
// Notice that C category's last bucket can not be filled completely.