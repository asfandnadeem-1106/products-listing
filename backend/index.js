require('dotenv').config()
require('./models/db');

const express = require("express");
const cors = require('cors');

const routes = require('./routes/index.router');
const app = express();

const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(cors(corsOptions));
app.use('/api', routes);


app.listen(process.env.PORT, () => console.log(`Server started at Port: ${process.env.PORT}`));
module.exports = app;