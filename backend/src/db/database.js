import mongoose from 'mongoose';
//import config from 'config';
//const dbconf = config.get('peliculas.dbConfig.dbName')

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://jony:Root23Peliculas@peliculas.hakmv0b.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: true,
  //useCreateIndex: true
}).then(() => {
  console.log('DB is conected');
}).catch(err=>{
  console.log('DB not conected'+err)})
