const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require('cors');

const homeRoutes = require("./routes/home.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors({
  origin:['http://localhost:3000','http://localhost:3000'],
  credentials:true
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use(express.json({ extended: true }));

app.use('/api', homeRoutes);
app.use('/api/auth', authRoutes);

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }));

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (err) {
    console.log("Server error", err.message);
    process.exit(1);
  }
}

start();
