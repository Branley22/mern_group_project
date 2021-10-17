require('dotenv').config();
const express = require('express');
const myLocalHost = process.env.DB_Host;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();



app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');
require('./routes/movie.routes')(app);
require('./routes/user.routes')(app);

app.listen(myLocalHost, () =>
    console.log(`You have successfully connected to port ${myLocalHost}`)
)

