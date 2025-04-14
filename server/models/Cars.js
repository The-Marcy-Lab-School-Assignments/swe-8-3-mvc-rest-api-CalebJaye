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
      fellows.push(newCar);
      return newCar;
    }
  
    // Get all values from the "database"
    static list() {
      return [...fellows];
    }
  
    // Get one value from the "database"
    static find(id) {
      return fellows.find((fellow) => fellow.id === id);
    }
  
    // Update one value from the "database"
    static editName(id, newName) {
      const fellow = Fellow.find(id);
      if (!fellow) return null;
      fellow.name = newName;
      return fellow;
    }
  
    // Delete one value from the "database"
    static delete(id) {
      const fellowIndex = fellows.findIndex((fellow) => fellow.id === id);
      if (fellowIndex < 0) return false;
  
      fellows.splice(fellowIndex, 1);
      return true;
    }
  }
  
  module.exports = Fellow;
  
