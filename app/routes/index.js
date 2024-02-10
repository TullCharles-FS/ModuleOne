const express = require("express");
const router = express.Router();

`localhost:3000/api/`;
router.get("/", (req, res) => {
  res.status(200).json({message: "From the API"});
});

`localhost:3000/api/:id`;
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const todo = arr.find((obj) => obj.id === id);
  console.log("params >>> ", id);
  res.status(200).json({message: "From the API"});
});

`localhost:3000/api/`;
router.post("/", (req, res) => {
  console.log("Resquest body >>>", req.body);
  const {data} = req.body;
  res.status(200).json({message: "We got the request", data});
});

module.exports = router;
