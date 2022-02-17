const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");
const res = require("express/lib/response");
const { Router } = require("express");
const { route } = require("express/lib/application");
require("./DataBase");

env.config();

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());

//aqui estan las rutas
app.use("/api/user", require("./routes/UserRoutes"));

app.listen(port, () => console.log("Ejecutando appi"));
