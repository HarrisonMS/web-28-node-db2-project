const express = require("express");

const router = express.Router();

const Cars = require("./carsModel");

router.use(express.json());

router.get(`/`, (req, res) => {
  Cars.find(req.query)
  .then(cars => {
      res.status(200).json({data: cars});
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({message: "Error retrieveing cars"})
  })
})

router.get(`/:id`, (req, res) => {
  const id = req.params.id
  Cars.findById(id)
  .then(car => {
    {car 
      ? res.status(200).json(car) 
      : res.status(404).json({error: "The cars information could not be retrieved."}) 
    }
  })
})

// if(!cars.vin && !cars.make && !cars.model && !cars.mileage) {
//   res.status(400).json({ errorMessage: "Please provide vin, make, model, and milage."})
// } else {
//   Cars.insert(cars)
//   .then((car) => {
//     res.status(201).json(car)
//   })


router.post('/', (req, res) => {
  const cars = req.body;
  {!cars.vin && !cars.make && !cars.model && !cars.mileage
    ? res.status(400).json({ errorMessage: "Please provide vin, make, model, and milage."}) 
    : Cars.insert(cars)
      .then((car) => {
        res.status(201).json(car)
      })
  }
})

router.put('/:id', (req, res) => {
  const cars = req.body;
  if(!cars.vin && !cars.make && !cars.model && !cars.mileage) {
      res.status(400).json({errorMessage: "Please provide vin, make, model, and milage for this update"})
  } 
  Cars
  .update(req.params.id, req.body)
  .then(count => {
      if (count > 0) {
          Cars.findById(req.params.id)
          .then((car) => {
              res.status(200).json(car)
          })  
      }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the car'
      });
  });
});
module.exports = router;