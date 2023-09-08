const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");
const mongoose = require("mongoose");




const mydb = require("./model")

const app = express();
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

// mydb.db.find().then((fit) => {
//     console.log(fit);
// })

app.get("/", (req, res) => {
    mydb.db.find().then((fit) => {
        var daramas = fit.map((item) => item.toObject());
        res.render("index.ejs", { dar: daramas })

    })
})
app.get("/temp/:search", (req, res) => {
    var val = req.params.search;
    mydb.db.findOne({name:val}).then((fit) => {
        // var daramas = fit.map((item) => item.toObject());
        res.render("template.ejs", { view: fit })

    })
})
app.get("/:channel/:year", (req, res) => {
    var ch = req.params.channel;
    var y = req.params.year;
    mydb.db.find({year:y,channel:ch}).then((fit) => {
        var daramas = fit.map((item) => item.toObject());
        res.render("index.ejs", { dar: daramas })

    })
})
app.get("/total/channel/:channel", (req, res) => {
    var che = req.params.channel;
    // var y = req.params.year;
    mydb.db.find({channel:che}).then((fit) => {
        var daramas = fit.map((item) => item.toObject());
        res.render("index.ejs", { dar: daramas })

    })
})
app.get("/total/year/:year", (req, res) => {
    // console.log("ASSLAM O ALIKUM");
    var val = req.params.year;
    mydb.db.find({year:val}).then((fit) => {
        var daramas = fit.map((item) => item.toObject());
        res.render("index.ejs", { dar: daramas })

    })
})

app.post("/",(req,res)=>{
    var sar = req.body.search;
    // console.log(sar);
    res.redirect(`/search?sar=${sar}`);
  })
  
  
  app.get("/search", (req, res) => {
    var sar = req.query.sar;
    mydb.db.find({name:{ $regex: new RegExp(sar,"i")} }).then((items) => {
      const plainObjects = items.map((item) => item.toObject());
      
      
      
      // plainObjects.forEach(element => {
      //   // console.log(element.poster);
      // });
      res.render("index.ejs", { dar: plainObjects })
    });
  })

app.listen(3000, () => {
    console.log("Server is Running");
})
