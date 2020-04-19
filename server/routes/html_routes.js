let express = require("express");

let routes = express.Router();

let path = require("path");

routes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/html/index.html"));
});

module.exports = routes;