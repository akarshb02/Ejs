const express = require("express");
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view-engine", "ejs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var today = new Date();


app.get("/", function(req, res) {


    var option = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',




    };



    var day1 = today.toLocaleDateString("en-US", option);
    res.render('list.ejs', { kindOfDay: day1, newLists: items })

});
app.post("/", function(req, res) {

    var item = req.body.newItem;

    items.push(item);




    res.redirect("/");

});


app.listen(1000, function() {

    console.log("server started");
});