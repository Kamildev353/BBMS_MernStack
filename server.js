const express = require('express');
const dotenv = require('dotenv');
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dotconfig
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middileware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
//1 test route
app.use('/api/v1/test', require('./router/testRouters'));
app.use('/api/v1/auth', require('./router/authRouters'));
app.use('/api/v1/inventory', require('./router/inventoryRouters'));
app.use('/api/v1/analytics', require('./router/analyticsRouters'));
app.use('/api/v1/admin', require('./router/adminRouters'));

//port
const PORT = process.env.PORT || 8080;
 
//listen
app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white);
});

