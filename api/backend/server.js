require('dotenv').config();
const express = require("express");
const cors = require("cors");
const services = require("../services/getService");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/search/:query', (req, res) => services.searchPodcast(req.params.query).then(result => res.send(`${JSON.stringify(result)}`)));
app.get('/podcast/:id', (req, res) => services.podcastDetails(req.params.id).then(result => res.send(`${JSON.stringify(result)}`)));
app.post('/subscribe', (req, res) => services.createSubscription(req.body).then(res.sendStatus(200)));
app.get('/subscriptions', (req, res) => services.getSubscriptions().then(result => res.send(`${JSON.stringify(result)}`)))

app.listen(PORT, () => console.log("Server is running on port " + PORT));