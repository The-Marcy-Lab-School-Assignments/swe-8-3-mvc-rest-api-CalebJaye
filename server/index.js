/// Imports
const express = require("express");
const path = require('path');
const getId = require('./utils/getId');



const app = express();
const pathToFrontendDist = path.join(__dirname, '../frontend/dist');



/// Middleware
const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    req.time = time;
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
  };


  const serveStatic = express.static(pathToFrontendDist);


  const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
  