//Bring in the express server and create application
let express = require("express");
let app = express();

//use the express Router object
let router = express.Router();

//Create GET to return a list of all pies
router.get("/", function (req, res, next) {
  res.send("Apple");
});

//Configure router so all routes are prefixed with /api/v1
app.use("/api/", router);

//Create server to listen on port 5000
//listen method listens for connections on the host and the port number
var server = app.listen(3000, function () {
  console.log("Node server is running on http://localhost:3000..");
});
