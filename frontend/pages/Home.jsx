import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllCars, createCar } from '../adapters/carAdapters';

const Home = () => {
  // Get all fellows from the serverstate
  const [cars, setCars] = useState([]);
  // form input state
  const [newCarName, setNewCarName] = useState('');
  // form submission response state
  const [newlyAddedCar, setNewlyAddedCar] = useState({})

  // Get me the most up to date full list of fellows
  useEffect(() => {
    const doFetch = async () => {
      const [allCars, error] = await getAllCars()
      setCars(allCars);
    }
    doFetch();
  }, [newlyAddedCar])

  // Use the form data to create a POST request to create a new fellow
  const handleCreateCar = async (e) => {
    e.preventDefault();
    const [newCar, error] = await createCar(newCarName)
    setNewlyAddedCar(newCar);
    setNewCarName('');
  }

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateCar}>
        <label htmlFor="name">Add A New Car</label>
        <input type="text" name="name" id="name" value={newCarName} onChange={(e) => setNewCarName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          cars.map((car) => {
            return <li key={car.id}>
              <Link to={`/cars/${car.id}`}>
                {car.name} (User {car.id})
              </Link>
            </li>
          })
        }
      </ul >
    </>
  )
}

export default Home;