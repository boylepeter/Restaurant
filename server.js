// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT ? process.env.PORT : 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty Table (DATA)
// =============================================================
var tables = [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

// 
app.get("/api/tables", function(req, res) {
    fs.readFile("reserve.html", data, function (err) {
      err ? console.log(err) : console.log("Success!")
    })
return res.json(tables);
});
app.get("/api/waitlist", function(req, res) {
return res.json(waitlist);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
