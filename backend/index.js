require('./config/config');
require('./models/db');

const express = require("express");
const cors = require('cors');

const routes = require('./routes/index.router');
const app = express();


app.use(cors());
app.use('/api', routes);


app.listen(process.env.PORT, () => console.log(`Server started at Port: ${process.env.PORT}`));
module.exports = app;