import User from '../models/User'

export const getUsers = async(req,res)=>{
    const users= await User.find();
    res.json(users)
}
export const updateUser = async (req,res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(240).json(updateUser)
}