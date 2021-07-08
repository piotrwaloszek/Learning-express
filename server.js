const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/public/views/${name}`));
    };
    next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user', (req, res, next) => {
    res.show('login.html');
  });

app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });

  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/public/not-found.jpg'));
  })