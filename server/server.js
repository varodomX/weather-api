const express = require("express")
const request = require('request');
const morgan = require("morgan")
const cors = require("cors")
const bodyParse = require("body-parser")

//const connectDB = require("./Config/db");

const { readdirSync } = require("fs")
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const app = express();
//connectDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(morgan("dev"));
app.use(bodyParse.json());

// Route 1
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint 555')
// })

// Route 2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

// Route 3
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(5000, () => console.log("Server is Running 5000"));
