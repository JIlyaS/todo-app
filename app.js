const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/home.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

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