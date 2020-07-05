const express = require('express');

const app = express();


// middleware
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('welcome');
})

app.get('/layla', (req, res) => {
    res.send("Hi from Layla")
})

app.listen(4242, () => console.log("Server is listening at http://localhost:4242"))