const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/apiTest', (req, res) => {
    let num = Math.floor(Math.random()*500);
    res.send(`hello, you just got a response from your app, number = ${num}`);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port ${[PORT]}`)
})