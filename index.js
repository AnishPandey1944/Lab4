// load express, initiate app
const express = require('express'), app = express();
const PORT = 3000;
// static files
app.use(express.static('public'));

var hits = {};
// dynamic content routes
app.get('/hits/:pageId', (req, res) => {
    const pagehits = (hits[req.params.pageId] || 0) + 1;
    hits[req.params.pageId] = pagehits;
    res.send((pagehits).toString());
});
// default route
app.all('*', (req, res) => {
    res.status(404).send('Invalid URL.');
});
// start server
app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
