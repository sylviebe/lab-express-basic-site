const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', function(req, res) {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', function(req, res) {
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', function(req, res) {
    res.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3000);
