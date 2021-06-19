const express=require("express")
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser")
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

app.get("/",(req,res)=>{
    res.json({'hello':'ok world'});

})
app.post("/",(req,res)=>{
    console.log("hello")

})
app.listen(5000);