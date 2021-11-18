const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User=require('./Models/User');
const Product=require('./Models/Product');
const validator = require("validator");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Public/Upload/");
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '_' + file.originalname);
  },
});

var upload = multer({ storage: storage });



app.use(cors());

// var allowedDomains = []; // ['https://google.com', 'https://facebook.com']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowedDomains.length === 0) {
//     corsOptions = { origin: true };
//   } else {
//     if (allowedDomains.indexOf(req.header("Origin")) !== -1) {
//       corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//     } else {
//       corsOptions = { origin: false }; // disable CORS for this request
//     }
//   }

//   callback(null, corsOptions); // callback expects two parameters: error and options
// };

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose
  .connect("mongodb://localhost:27017/Partizzle", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))



// GET ROUTES

app.get("/", (req, res) => {
  res.send("Ritik")
});


//  POST ROUTES

app.post("/signup", (req, res) => {
  let data= req.body

  // storing form data in variables
  var userName = data.name;
  var userEmail = data.email;
  var userLocation = data.address;
  var userPassword = data.password;
  var userCpassword = data.conpassword;
  var userNumber = data.mobile;


  // saving function for storing user registration details in database
  const saveData = function () {
    User.findOne({ email: userEmail }).then((user) => {
      if (user) {
        res.redirect("/signup");
        console.log("E-mail already in use");
      } else {
        //var user = mongoose.model("user", usersSchema);
        const u1 = new User({
          name: userName,
          email: userEmail,
          mobile: userNumber,
          password: userPassword,
          address: userLocation,
        });
        u1.save();
        console.log("USER REGISTRATION SUCCESFULL");
        res.send({status:200})
      }
    });
  };

   // validation function for validation of form data
   const myvalidation = function () {
    if (validator.isLength(userName, { min: 1, max: 25 })) {
      console.log("name is valid");
      if (validator.isEmail(userEmail)) {
        userEmail = validator.normalizeEmail(userEmail);
        console.log("email is valid and sanitized");
        if (validator.isLength(userLocation, { min: 1, max: 25 })) {
          console.log("location valid");
          if (validator.isStrongPassword(userPassword)) {
            if (userPassword == userCpassword) {
              console.log("password is valid and strong");
              saveData();
            } else {
              console.log("user password mismatched");
            }
          } else {
            console.log("password must contain minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 ");
          }
        } else {
          console.log("location too large it must be in 25 characters");
        }
      } else {
        console.log("enter valid email");
      }
    } else {
      console.log("name is not valid");
    }
  };


  // checking fields are null or not
  if (userName != "") {
    if (userEmail != "") {
      if (userLocation != "") {
        if (userPassword != "") {
          if (userCpassword != "") {
            if (userPassword == userCpassword) {
              console.log("running validation");
              myvalidation(); //calling validation function if fields are filled properly
            } else {
              console.log("password doesnt matched");
            }
          } else {
            console.log("confirm your password");
          }
        } else {
          console.log("password required");
        }
      } else {
        console.log("location required");
      }
    } else {
      console.log("email required");
    }
  } else {
    console.log("username required");
  }

});

app.post("/signin", (req, res) => {
  let data= req.body
  let a = 0;
  const Email = data.email;
  const Password = data.password;
  console.log(`${Email} tried logging in.`);

  if (Email == "" && Password == "") {
    console.log(`${Email} Login failed`);
    res.redirect("/login");
  } else {
    User.findOne({ email: Email, password: Password }).then((user) => {
      if (user) {
        console.log(`${user.email} Logged In Successfully`);
        res.send({status:200})
      }
      else{
        console.log("PASSWORD OR EMAIL DOESN'T MATCH");
        res.send();
      }
    })
  }
});

app.post("/add-data", (req, res) => {
  var data = req.body;
  console.log(data.category);
  const p1 = new Product({
    name: data.name,
    description: data.description ,
    price:data.price,
    category:data.category
  });
  p1.save();
  console.log("Done");
  res.send({message:"ADDED DATA"})
});


app.get("/beverages", (req, res) => {
  Product.find({category:"drinks"}).then((abc) => {
    var temp=JSON.stringify(abc);
    temp = JSON.parse(temp)
    console.log(temp);
    res.send(temp)
  })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
