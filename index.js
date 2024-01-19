import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import moment from "moment";

const app=express();
const port=3001;
mongoose.connect("mongodb://localhost:27017//ToDOListDB");
app.use(express.static("public"));
app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
  });
  app.use(bodyParser.urlencoded({extended:true}));
app.set('viewengine','ejs');

  var i1=[];
app.get("/",(req,res)=>{
    res.render("index.ejs",{newItem:i1});
});
app.get("/today",(req,res)=>{
    res.render("today.ejs");
});
app.get("/work",(req,res)=>{
    res.render("work.ejs");
});

app.post("/",(req,res)=>{
   var newlist=req.body["newItem"];
    // res.render("index.ejs",{newlist});
    // console.log(newlist);
    i1.push(newlist)
    res.redirect("/");

  
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });