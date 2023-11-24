const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");

const connectDB = require("./Config/db");

const { readdirSync } = require("fs");
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  })
);
connectDB();

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.Header("Access-Control-Allow-Headers", "Content-Type");
  res.Header("Access-Control-Allow-Credentials", true);
});
app.use(bodyParse.json({ limit: "10mb" }));

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
