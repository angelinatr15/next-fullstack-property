import React, { useRef, useState } from 'react'

const Cars = () => {
  const userRef = useRef()
  const [cars, setCars] = useState([])

  async function changeUser() {
    console.log(userRef.current.value)
    const name = userRef.current.value

    const url = 'api/cars/name/' + name

    try {
      const response = await fetch(url)
      const cars = await response.json()
      console.log(cars)
      setCars(cars)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div>
      <select ref={userRef} onChange={changeUser}>
        <option value="Ryan Nguyen">Ryan Nguyen</option>
        <option value="Alvin Nguyen">Alvin Nguyen</option>
        <option value="Angelina Truong">Angelina Truong</option>
      </select>

      {cars.map((car) => (
        <div key={car.id}>
          {car.year}
          {car.make}
          {car.model}
        </div>
      ))}
    </div>
  )
}

export default Cars
