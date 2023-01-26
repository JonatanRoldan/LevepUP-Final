import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cosrs from 'cors'

import peliRoute from './routes/pelicula.routes'
import authroutes from './routes/auth.routes'
import  userroute from './routes/user.routes'
import reservaRotes from './routes/reserva.routes'

const app = express()
app.use(morgan('dev'));
app.use(express.json());
app.use(cosrs());

//Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});
app.use('/peliculas',peliRoute)
app.use('/auth',authroutes)
app.use('/users',userroute)
app.use('/reserva',reservaRotes)
//404
//router.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../../public/page/404.html'));
//});

export default app;