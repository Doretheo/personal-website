let express = require('express');
let path = require('path');
let axios = require('axios')
let app = express();
let port = 2000;

app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
});

