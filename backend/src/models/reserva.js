import {Schema, model} from 'mongoose'

 const reservaSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId, ref:'User'
  },
  idPeli: {
    type: Schema.Types.ObjectId, ref:'Movie'
  },
  seat:Array,
  total: Number
},{
  timestamps:true,  
  versionKey: false
});
export default model("Reserva",reservaSchema);