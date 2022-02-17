// primer paso en routes crear routes requiriendo express
const express = require("express");
const router = express.Router();

//importar controladores

const Controlador = require("../controllers/userControllers");

//crear las rutas de Api

router.post("/create-user", Controlador.CreateUser);
router.put("/update-user/:IdUsers", Controlador.UpdateUser);
router.delete("/update-user/:IdUsers", Controlador.DeleteUser);

//exportar modulos router
module.exports = router;
