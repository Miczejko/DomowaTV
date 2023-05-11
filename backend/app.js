require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const authRoutes = require('./routes/auth');


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json())

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/auth', authRoutes);


mongoose.set('strictQuery', true);
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT} `);
        });
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
