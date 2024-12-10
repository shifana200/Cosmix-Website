const express = require('express')
const app= express()
const env = require('dotenv').config()
const path = require('path');
const connectDB=require('./config/db')
const User = require('./models/User');
const session = require('express-session');
const userRouter =require('./routes/userRouter')
connectDB();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views',[path.join(__dirname, 'views/user'),path.join(__dirname, 'views/admin')]);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

module.exports =app;