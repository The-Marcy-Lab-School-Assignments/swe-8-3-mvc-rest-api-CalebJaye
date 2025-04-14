/// Imports
const express = require("express");
const path = require('path');


const {
    serveCars,
    serveCar,
    createCar,
    updateCar,
    deleteCar
  } = require('./controllers/CarControllers');
  

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

  const parseJSON = express.json();
  
  app.use(logRoutes);   
  app.use(serveStatic);
  app.use(parseJSON);   
  

  app.get('/api/fellows', serveFellows);
  app.get('/api/fellows/:id', serveFellow);
  app.post('/api/fellows', createFellow);
  app.patch('/api/fellows/:id', updateFellow);
  app.delete('/api/fellows/:id', deleteFellow);
  

  const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
  