//fs is a built in node module that knows how to work with reading and writing files
let fs = require("fs");

const FILE_NAME = "./assets/pies.json";

let pieRepo = {
  get: function (resolve, reject) {
    //read file on that file_name, the functiosn brings in an error and the data itself
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
};

module.exports = pieRepo;
