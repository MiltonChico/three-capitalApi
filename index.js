const express = require("express");
const app = express();
const cors = require('cors');
const browserObject = require('./browser');
const scraperController = require('./scraper-controller.js');

app.use(cors());
app.use(express.json());

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

app.get('/results', async(req, res) => {

  try {
    // Pass the browser instance to the scraper controller
    const responseData = await scraperController(browserInstance)
    res.json(responseData)
    
  } catch (err){
    res.status(400).json(err)
    console.error(err)
  }
})

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });  

const PORT = process.env.PORT || 8080;

  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
