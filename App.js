const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const routes = require('./src/routes')

const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database'));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('Server running on port ', port)
});