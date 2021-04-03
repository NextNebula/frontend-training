require('dotenv').config();

const express = require("express");
const cors = require("cors");
const services = require("../services/jobService");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  services.getJobsByCategory(id)
    .then(result => res.send(`${JSON.stringify(result)}`));
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});