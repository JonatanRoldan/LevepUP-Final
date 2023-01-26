import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
  username:{
    type: String,
    required:true,
    unique: true
  },
  password:{
    type: String,
    required:true
  }, 
  email: String,
  tel: String,
  credit: Number,
  rol: String
  //type: [{
    //ref: "rol",
    //type: Schema.Types.ObjectId
  //}]
},{
    timestamps:true,
    versionKey: false
});

userSchema.pre('save', async function(next){
  if(this.isNew || this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10)
    next()
  }
  else{
    next()
  }
});

userSchema.methods.comparePassword= function(password,recibePasword){
  return bcrypt.compare(password, recibePasword)
}

export default model('User',userSchema);