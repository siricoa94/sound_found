let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require("./routes/html_routes");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});