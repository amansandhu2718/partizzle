const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const requests = require("requests");
app.use(bodyParser.json());

app.use(cors());
var allowedDomains = []; // ['https://google.com', 'https://facebook.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowedDomains.length === 0) {
    corsOptions = { origin: true };
  } else {
    if (allowedDomains.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.get("/", (req, res) => {
  res.json({
    hello: "ok world",
    hello2: "okoko",
  });
});
app.get("/contact", (req, res) => {
  console.log("hello");
  requests("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .on("data", function (chunk) {
      chunk = JSON.parse(chunk);
      console.log(chunk.states);
      res.send(chunk);
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
});

app.listen(5000);
