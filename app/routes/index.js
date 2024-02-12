const express = require("express");
const router = express.Router();

//localhost:3000/api/
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get to API",
    metadata: {hostname: req.hostname, method: req.method},
  });
});

// localhost:3000/api/---anything after
router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    message: "GET by Id for /api",
    id,
    metadata: {hostname: req.hostname, method: req.method},
  });
});

router.put("/:charles", (req, res) => {
  const {charles} = req.params;
  res.status(200).json({
    message: "Put Data",
    charles,
    metadata: {hostname: req.hostname, method: req.method},
  });
});

router.post("/", (req, res) => {
  const {data} = req.body;
  res.status(200).json({
    message: "PORT to /api",
    data,
    metadata: {hostname: req.hostname, method: req.method},
  });
});

module.exports = router;
