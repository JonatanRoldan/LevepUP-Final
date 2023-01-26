import {Schema, model} from 'mongoose'

 const seatSchema = new Schema({
  user: {
    ref: "User",
    type: Schema.Types.ObjectId
  },
  state: Boolean,
},{
    versionKey: false
});
export default model("seat",seatSchema);