const express = require("express");
const bodyParser = require("body-parser");


const app =express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
     res.send("Welcome to my page");
});
app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/contact",function(req,res){
   
    res.send("Visheshjindal368@gmail.com");
  });
app.listen(8080 ,function(req,res){
    console.log("Server is running on port 8080");
});
app.post("/bmi",function(req,res){
   
    let n1 =Number(req.body.v1);
    let name = req.body.v3;
    let n2 = Number(req.body.v2);
    let s = n1/(n2*n2);
    res.sendFile(__dirname+"/result.html");
    res.send("<h1>Dear..</h1>"+name+"<h1>Your BMI is :</h1>"+s);
});