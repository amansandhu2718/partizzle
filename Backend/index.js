const express = require("express");
const app = express();
const cors = require("cors");
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
app.get("http://localhost:3000/", (req, res) => {
  console.log("Connected to React");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
