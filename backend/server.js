
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/todoRoutes');


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Connected to MongoDB')).catch((err) => console.log('Error connecting to mongoDB' , err));



app.listen(PORT, () => {

    console.log("server listening on PORT " + PORT);
})