const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World 3.0!!');
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Node.js application listening on port ' + port);
});
