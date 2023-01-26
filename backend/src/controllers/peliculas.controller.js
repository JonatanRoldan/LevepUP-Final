import Movie from'../models/movies'

export const createPelicula = async(req,res)=>{
  const {name, imgUrl, category , schedule, price}=req.body
  let seating=[]
  for (let step = 0; step < 50; step++) {
    seating.push(true)
  }
  let seataux=[]
  const silla={
    user:1,
    state:true
  }
  for (let step = 0; step < 50; step++) {
    seataux.push(silla)
  }
  let seatind1=seataux
  let seatind2=seataux
  let seatind3=seataux

  const newMovie = new Movie({name,imgUrl,category,seating,seatind1,seatind2,seatind3,schedule,price})
  const movie = await newMovie.save()
  res.status(201).json('creating movie')
}
export const getPelicula = async(req,res)=>{
  const movies = await Movie.find();
  res.json(movies)
}
export const getPeliculaById = async (req,res)=>{
  console.log(req.params.id)
  const movief = await Movie.findById(req.params.id);
  res.status(200).json(movief)
}
export const updatePelicula = async (req,res)=>{
  const updatePeli = await Movie.findByIdAndUpdate(req.params.id,req.body, {
    new: true
  })
  res.status(240).json(updatePeli)
}

export const deletePelicula = async (req,res)=>{
  await Movie.findByIdAndDelete(req.params.id)
  res.status(204).json({"message":"pelicula eliminada"})
}