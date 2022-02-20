/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

console.log(path.join(__dirname, 'public'), process.env.PORT);
const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});