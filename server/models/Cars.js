const getId = require('../utils/getId');

const Cars = [
    { name: 'Ferrari', id: getId() },
    { name: 'Porsche', id: getId() },
    { name: 'Honda', id: getId() },
  ];


  class Car {
    // Create and add the new fellow to the "database" (the fellows array)
    // Rather than using a constructor, we use a static method to create a new fellow
    static create(name) {
      const newCar = {
        name,
        id: getId()
      }
      Cars.push(newCar);
      return newCar;
    }
  
    // Get all values from the "database"
    static list() {
      return [...Cars];
    }
  
    // Get one value from the "database"
    static find(id) {
      return Cars.find((car) => car.id === id);
    }
  
    // Update one value from the "database"
    static editName(id, newName) {
      const car = Car.find(id);
      if (!car) return null;
      car.name = newName;
      return car;
    }
  
    // Delete one value from the "database"
    static delete(id) {
      const carIndex = Cars.findIndex((car) => car.id === id);
      if (carIndex < 0) return false;
  
      Cars.splice(carIndex, 1);
      return true;
    }
  }
  
  module.exports = Car;
  
