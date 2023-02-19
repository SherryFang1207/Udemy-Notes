const express = require("express");
const app = express();

app.get("/", function(req, res) {
    // console.log(request);
    res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req, res) {
    res.send("Please contact me at.. Boom!");
});
app.get("/about", function(req, res){
    res.send("This page is kacked by JINX!!!!");
});
app.get("/hobbies", function(req,res){
    res.send("I love GUNS. You will buy me some new GUNS, won't you?");
});


app.listen(3000, function () {
    console.log("Server started at Port 3000");
});