const express = require("express");
const app = express();
const browserObject = require('./browser');
const scraperController = require('./cardano-controller.js');
const scrapeAll = require('./cardano-controller')

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)

app.get("/", (req, res) => {
    res.send("Here is my webscraper");
});

app.get('/results', (req, res) => {
})

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });  

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
