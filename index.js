const RoboHash = require('./robohash')
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(cors())
app.use(helmet());
const port = parseInt(process.env.PORT || "8080", 10);

app.get('/avatar/:email', async (req, res) => {
  res.set('Cache-Control', 'max-age=31536000');
  res.set('Content-Type', 'image/png');
  const robo = new RoboHash(req.params.email || 'default');
  var body = await robo.assemble('set4');
  res.status(200).send(body);
})

app.listen(port, () => {
  console.log(`server started at http://0.0.0.0:${port}`);
});
