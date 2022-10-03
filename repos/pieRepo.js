//fs is a built in node module that knows how to work with reading and writing files
let fs = require("fs");

const FILE_NAME = "./assets/pies.json";

let pieRepo = {
  get: function (resolve, reject) {
    //read file on that file_name, the function brings in an error and the data itself
    fs.readFile(FILE_NAME, function (err, data) {
      //if in error, going to call the reject callback, passing the error object back
      if (err) {
        reject(err);
        //if everything correct,going to call the resolve callback
        //JSON.parse the data so grabbing the data and converting it to actual JSON
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  //pass in the id, pass in a resolve and reject callback
  getById: function (id, resolve, reject) {
    //grab the data from our file name and reject if an error occurs
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        //pass in each pie, check if pies id is equal to the id passed in by function
        let pie = JSON.parse(data).find((p) => p.id == id);
        resolve(pie);
        //so either a real pie data will come back or a null
      }
    });
  },
  search: function (searchObject, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        let pies = JSON.parse(data);
        //perform search
        if (searchObject) {
        }
      }
    });
  },
};

module.exports = pieRepo;
