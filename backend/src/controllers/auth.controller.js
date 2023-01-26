import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import bcrypt from 'bcryptjs'

export const signUp = async (req,res) => {
    const {username, password, email, tel} = req.body;
    const rol = "usuario";
    const credit= 300;
    const newuser = new User({
        username,
        password,
        email,
        tel,
        credit,
        rol
    })
    const saveUser = await newuser.save();
    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400
    })
    res.status(200).json({id:saveUser._id,token: token, rol:saveUser.rol,name:saveUser.username,credit:saveUser.credit})

};
export const signIn = async(req,res)=>{
    const userFound = await User.findOne({username: req.body.username})
    if(!userFound) return res.status(400).json({message: "User not Found"})
    bcrypt.compare(req.body.password, userFound.password, (err, data) => {
        if (err) throw err
          console.log("handle error")
        if (data) {
            const token = jwt.sign({id: userFound._id},config.SECRET,{
                expiresIn: 86400
            })
            return res.status(200).json({id:userFound._id,token: token, rol:userFound.rol,name:userFound.username,credit:userFound.credit})
        } else {
            return res.status(401).json({token: null,msg: "Invalid credencial" })
        }

    })
};