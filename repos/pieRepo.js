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
    //open up the file and get the data
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        let pies = JSON.parse(data);
        //perform search
        //once we get the data, going to check and make sure we have a search object
        if (searchObject) {
          //apply a filter to the pies - check to see if the searchObject.id has some value, if it does then
          //search on id by doing p.id = searchObject.id otherwise pass back a true
          pies = pies.filter(
            (p) =>
              (searchObject.id ? p.id == searchObject.id : true) &&
              //then check to see if searchObject.name has some value, if it does => do a case-insenstive search checking to see  if index of p.name is within searchObject.name and if that comes back greater than or = to 0, we know we have a match
              //otherwise return back a true
              (searchObject.name
                ? p.name
                    .toLowerCase()
                    .indexOf(searchObject.name.toLowerCase()) >= 0
                : true)
          );
        }
        resolve(pies);
      }
    });
  },
};

module.exports = pieRepo;
