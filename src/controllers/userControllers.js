//en controlador se requiere primero el modelo del Documento
const User = require("../Models/User");

// crear controladores

//controlador crear Usuarios

const CreateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password
    });
    await user.save();
    res.status(201).json({ status: "Usuario creado correctamente!" });
  } catch (error) {
    console.log(error);
    res.status(203).json({ status: "Se produce un error", error });
  }
};

const UpdateUser = async (req,res)=>{
  const id= req.params.IdUsers;
  await User.findByIdAndUpdate(id, req.body);
  res.status(201).json({ msj: "Actializacion exitosa" });


}
const DeleteUser =async (req,res)=>{
  const id=req.params.IdUser
  await User.findByIdAndDelete(id)
  res.status(200).json({ msj: "Usuario eliminado!" });
}

module.exports = {
    CreateUser,
    UpdateUser,
    DeleteUser
};
