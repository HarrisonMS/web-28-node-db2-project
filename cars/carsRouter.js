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

module.exports = router;