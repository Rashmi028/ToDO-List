import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

const app=express();
const port=3001;
app.use(express.static("public"));
app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
  });
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/today",(req,res)=>{
    res.render("today.ejs");
});
app.get("/work",(req,res)=>{
    res.render("work.ejs");
});

app.post("/submit",(req,res)=>{
    res.render("index.ejs",{
    });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });