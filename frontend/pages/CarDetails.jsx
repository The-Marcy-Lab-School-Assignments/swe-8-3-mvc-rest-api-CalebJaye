import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCarById, updateCarName, deleteCar } from '../adapters/carAdapters';

const CarDetails = () => {
  const [car, setCar] = useState({})
  const [newCarName, setNewCarName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // on load, get the fellow by id
  useEffect(() => {
    const doFetch = async () => {
      const [foundCar, error] = await getCarById(id);
      setFellow(foundCar);
    };
    doFetch();
  }, [])

  // when the delete button is pressed, send a DELETE request
  const handleDeleteCar = async () => {
    await deleteCar(id);
    navigate('/');
  }

  // when the form is filled out, send a PATCH request
  const handleUpdateCar = async (e) => {
    e.preventDefault();

    const [updatedCar, error] = await updateCarName(id, newCarName);
    setFellow(updatedCar);

    setNewFellowName('');
  }

  return (
    <>
      <Link to='/'>Go Home</Link>
      <h1>Car Details</h1>
      <p>Name: {car.name}</p>
      <p>Id: {car.id}</p>
      <form onSubmit={handleUpdateCar}>
        <label htmlFor="name">Update Car Name</label>
        <input type="text" name="name" id="name" value={newCarName} onChange={(e) => setNewCarName(e.target.value)} placeholder='New Name' />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteCar} className='danger'>Delete Car</button>
    </>
  )
}

export default CarDetails;