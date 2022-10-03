//Bring in the express server and create application
let express = require("express");
let app = express();
//brings in anything exported
let pieRepo = require("./repos/pieRepo");

//use the express Router object
let router = express.Router();

//let pies = pieRepo.get();

//Create GET to return a list of all pies
router.get("/", function (req, res, next) {
  //use .status method to return appropriate status code
  //use .json to pass a json object; want client to know
  //json data is being sent back
  pieRepo.get(
    //in the 'get' we have 2 callbacks -resolve and reject
    //so when calling the 'get', we need 2 functions
    //the first function is the successful - if it gets the 'data' then go ahead and do the res.status(200) etc.
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All pies retrieved.",
        data: data,
      });
    },
    //the 2nd function is the error function and we will handle exception TODO
    function (err) {
      next(err);
    }
  );
});

router.get("/search", function (req, res, next) {
  //search obj has an id property which we get from req.query.id and a name;either could be null
  //
  let searchObject = {
    id: req.query.id,
    name: req.query.name,
  };

  pieRepo.search(
    searchObject,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All pies retrieved.",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});
router.get("/:id", function (req, res, next) {
  pieRepo.getById(
    req.params.id,
    function (data) {
      if (data) {
        res.status(200).json({
          status: 200,
          statusText: "OK",
          message: "Single Pie retrieved.",
          data: data,
        });
        //if pie can't be found, use respone obj to pass back a status of 404
      } else {
        res.status(404).json({
          status: 404,
          statusText: "Not Found",
          message: "The pie `" + req.params.id + "` could not be found.",
          error: {
            code: "NOT_FOUND",
            message: "The pie `" + req.params.id + "` could not be found.",
          },
        });
      }
    },
    function (err) {
      next(err);
    }
  );
});
//Configure router so all routes are prefixed with /api/v1
app.use("/api/", router);

//Create server to listen on port 5000
//listen method listens for connections on the host and the port number
var server = app.listen(3000, function () {
  console.log("Node server is running on http://localhost:3000..");
});
