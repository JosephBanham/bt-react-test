/*
 * Libs
 */
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

/*
 * Constants
 */
const PORT = 4000;
const API_KEY = '7f12e4d96d5a4889ac27ccb3a1492770';
const SEARCH_QUERY = "NHS";
const SORT_BY = "popularity";
const PAGE_SIZE = 10;

/*
 * Setup CORS - This is needed to bypass NewsAPI CORS Policy Blocking by rerouting request to localhost
 */
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

/*
 * Setup to request NewsAPI data using Fetch API
 */
app.get('/news-api', function (req, res) {
  fetch(`https://newsapi.org/v2/everything?q=${SEARCH_QUERY}&sortBy=${SORT_BY}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('result:', result);
      res.json(result);
    })
    .catch((ex) => {
      console.log('error:', ex);
      res.status(400).send({
        message: 'This is an error!',
        error: ex
     });
    });
})

/*
 * Start Backend API Proxy server
 */
app.listen(PORT, () => {
  console.log(`=================`)
  console.log(`🎉 API Connected!`)
  console.log(`🟣 BT React NewsAPI App Test listening at http://localhost:${PORT}`)
  console.log(`=================`)
})