const express = require("express");
const router = express.Router();

const posts = [];

//localhost:3000/api/
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get to API",
    posts,
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
//localhost:3000/api/2324352
router.put("/:id", (req, res) => {
  const {id} = req.params;
  console.log(id);

  res.status(200).json({
    message: "Put Data",
    metadata: {hostname: req.hostname, method: req.method},
  });
});

router.post("/", (req, res) => {
  const {data} = req.body;
  console.log(">>>", data);
  posts.push({data});
  res.status(200).json({
    message: "PORT to /api",
    data,
    metadata: {hostname: req.hostname, method: req.method},
  });
});

module.exports = router;
