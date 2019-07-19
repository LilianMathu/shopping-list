const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db configuration
const db = require('./config/keys').mongoURI;

//db connection
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('database connected successfully'))
    .catch((err) => console.log(err));

//routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server up and running on port ${port}`));