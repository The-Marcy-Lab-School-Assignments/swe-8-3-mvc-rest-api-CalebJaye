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
  

  app.get('/api/cars', serveCar);
  app.get('/api/cars/:id', serveCar);
  app.post('/api/cars', createCar);
  app.patch('/api/cars/:id', updateCar);
  app.delete('/api/cars/:id', deleteCar);
  

  const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
  