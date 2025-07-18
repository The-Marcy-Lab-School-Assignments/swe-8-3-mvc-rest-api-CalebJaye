const Car = require('../models/Cars');

// Get All (Read)
const serveCars = (req, res) => {
  const CarsList = Car.list();
  res.send(CarsList);
}

// Get One (Read)
const serveCar = (req, res) => {
  const { id } = req.params;
  const car = Car.find(Number(id));

  if (!car) {
    return res.status(404).send({
      message: `No car with the id ${id}`
    });
  }
  res.send(car);
};

// Create
const createCar = (req, res) => {
  const { carName } = req.body;
  if (!carName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newCar = Car.create(carName);
  res.send(newCar);
};

// Update
const updateCar = (req, res) => {
  const { carName } = req.body;

  if (!carName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedFellow = Car.editName(Number(id), carName);

  if (!updatedFellow) {
    return res.status(404).send({
      message: `No car with the id ${id}`
    });
  }

  res.send(updatedFellow);
}

// Delete
const deleteCar = (req, res) => {
  const { id } = req.params;
  const didDelete = Car.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No car with the id ${id}`
    });
  }

  res.sendStatus(204);
}

module.exports = {
  serveCars,
  serveCar,
  createCar,
  updateCar,
  deleteCar
};