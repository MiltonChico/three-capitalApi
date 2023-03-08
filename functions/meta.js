const express = require("express");
const app = express();
const cors = require('cors');

const browserObject = require('../browser')
const scraperController = require('../scraper-controller.js');

app.use(cors());
app.use(express.json());

exports.handler = async function(event , context, req, res) {

    try {
      let browserInstance = browserObject.startBrowser();
      // Pass the browser instance to the scraper controller
      const responseData = await scraperController(browserInstance)

      let response = {
        statusCode : 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(responseData)
      }

    console.log("response: ", JSON.stringify(response))

    return response

  } catch (err) {
    console.error(err)
  }
  
}