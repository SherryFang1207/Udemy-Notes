//1. First require express module from package
const express = require("express");
//2. Create an object of required module to use methods of express module
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // res.send("Thank you for posting that!");
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the addition is: " + result);
});

app.listen(3000, function() {
    console.log("App is listening to Port 3000");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(Math.pow(height,2));
    res.send("Your BMI is: " + bmi);
});