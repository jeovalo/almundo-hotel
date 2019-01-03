var hotel = require('../bd-api/hotel');
// var Debug = require('debug');
// const debug = Debug('almundo:midleware:hotel');

const hotelsMiddleware = (req, res, next) => {
  req.hotels = hotel.findAll();
  next();
};

const hotelMiddleware = (req, res, next) => {
  req.hotel = hotel.findById(req.params.id);
  next();
};

const hotelFindNameMiddleware = (req, res, next) => {
  let hotels = hotel.findAll();
  let nameHotels = hotels.map(hotel => hotel.name);
  if (req.params.name) {
    let cadena = req.params.name;
    req.hotels = nameHotels.filter((name) => name.toUpperCase().includes(cadena.toUpperCase()));
  }else{
    req.hotels = nameHotels;
  }
  next();
};

const hotelFilterMiddleware = (req, res, next) => {
  debugger;
  let hotels = hotel.findAll();
  let { name, stars } = req.body;
  if (name){
    hotels = hotels.filter(( hotel ) => hotel.name.toUpperCase().includes(name.toUpperCase()));
  }
  if(stars && stars.length > 0){
    let myHotels = [];
    stars.forEach((star)=>{
      myHotels.push(hotels.filter(( hotel ) => +hotel.stars === +star));
    });
    hotels = [];
    myHotels.forEach((starHotels) => {
      hotels = hotels.concat(starHotels);
    });

  }
  req.hotels = hotels;
  next();
};

module.exports = {
  hotelsMiddleware: hotelsMiddleware,
  hotelMiddleware: hotelMiddleware,
  hotelFindNameMiddleware: hotelFindNameMiddleware,
  hotelFilterMiddleware: hotelFilterMiddleware
}

/*
module.exports.hotelsMiddleware =  hotelsMiddleware;
module.exports.hotelMiddleware = hotelMiddleware;
module.exports.hotelFindNameMiddleware = hotelFindNameMiddleware;
module.exports.hotelFilterMiddleware = hotelFilterMiddleware;
*/