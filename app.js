const exprss = require('express');
const bodyParser = require('body-parser');

const app = exprss();

app.use(bodyParser.urlencoded({ extended: true }));

//app.use("view-engine", "ejs");
var today = new Date();
var day = "";

app.get("/", function(req, res) {

    switch (today.getDay()) {

        case 0:
            day = "sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
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
            console.log("error");


    };

    res.render('list.ejs', { keyday: day });


});


app.listen(4000, function() {

    console.log("server started");
});