const express = require('express');
const app = express();

app.use('/', require('./routes'));

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Contact from intelligent life received on port ${port}`);
});
