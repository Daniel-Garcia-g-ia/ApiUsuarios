const env = require("dotenv");
const mongoose = require("mongoose");
env.config()
const uri = process.env.MONGO_ATLAS;

//, {userNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri)
  .then((db) => console.log(`Conexion db exitosa`))
  .catch((err) => console.log(err));
module.exports=mongoose