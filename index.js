//Bring in the express server and create application
let express = require("express");
let app = express();
let pieRepo = require("./repos/pieRepo");

//use the express Router object
let router = express.Router();
//create an array of pie objects
let pies = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Peach" },
];
//Create GET to return a list of all pies
router.get("/", function (req, res, next) {
  //use .status method to return appropriate status code
  //use .json to pass a json object; want client to know
  //json data is being sent back
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "All pies retrieved.",
    data: pies,
  });
});

//Configure router so all routes are prefixed with /api/v1
app.use("/api/", router);

//Create server to listen on port 5000
//listen method listens for connections on the host and the port number
var server = app.listen(3000, function () {
  console.log("Node server is running on http://localhost:3000..");
});
