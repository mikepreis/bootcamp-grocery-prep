const express = require('express')
const path = require('path')
const app = express()
const hostname = '127.0.0.1'
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/static')));

app.get('/', function(req, res){
    res.sendFile('index.html', {root: '../'});
});

app.get('/about', function(req, res){
  res.sendFile('about.html', {root: '../'});
});

app.get('/recipes/drinks/classic-old-fasioned', function(req, res){
  res.sendFile('/recipes/drinks/classic-old-fasioned.html', {root: '../'});
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../'});
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../'});
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../'});
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../'});
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root: '../'});
});
    

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
