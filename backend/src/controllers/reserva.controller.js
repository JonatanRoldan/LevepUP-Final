import Reserva from '../models/reserva'

export const getReserva = async(req,res)=>{
    const reservas= await Reserva.find().populate('idUser').populate('idPeli');
    res.json(reservas)
}

export const createReserva = async(req,res)=>{
    const {idUser, idPeli, seat, total}=req.body
    const newReserva = new Reserva({idUser, idPeli, seat, total})
    const reserva = await newReserva.save()
    res.status(201).json('creating Reserva')
  }