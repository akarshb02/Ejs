const express = require("express");
const app = express();


app.set("view-engine", "ejs");

const bodyParser = require("body-parser");

var day = '';




app.get("/", function(req, res) {

    var today = new Date();
    switch (today.getDay()) {

        case 0:
            day = "sunday";
            break;

        case 1:
            day = "monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "wednesday";
            break;

        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "saturday";
            break;


        default:
            console.log("Error");



    }

    res.render('list.ejs', { kindOfDay: day })

});

app.listen(7000, function() {

    console.log("server started");
});