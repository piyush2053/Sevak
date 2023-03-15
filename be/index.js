const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen(3000, () => {
  console.log('BE Running at Port 3000');
})

app.post('/vehicle', (request, res) => {
  let number = request.body.number;
  res.send(number)
});