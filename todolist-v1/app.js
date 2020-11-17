const express = require("express");
const app = express();


app.set("view-engine", "ejs");

const bodyParser = require("body-parser");

var day = '';
var today = new Date();




app.get("/", function(req, res) {


    if (today.getDay() === 0 || today.getDay() === 6) {
        day = "weekend";
    } else {
        day = "weekday";

    }

    res.render('list.ejs', { kindOfDay: day })

});

app.listen(1000, function() {

    console.log("server started");
});