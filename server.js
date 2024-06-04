const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/form.html');
});

app.post('/submit', (req, res) => {
  const data = {
    field1: req.body.field1,
    field2: req.body.field2,
    field3: req.body.field3,
    field4: req.body.field4
  };
  res.render('result', { data });
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(port, () => {
  console.log (Server is running at) http://localhost:${port});
});