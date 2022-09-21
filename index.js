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
