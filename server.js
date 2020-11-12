const express = require('express');
//instantiate the server
const app = express();

//method to make the server listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});