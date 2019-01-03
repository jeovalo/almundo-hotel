const fs = require('fs');
const hotelsFile = './data/data.json';

const hotel =  {
  findAll: () => {
    let rawdata = fs.readFileSync(hotelsFile);
    return JSON.parse(rawdata);
  },
  findById: (idHotel) => hotel.findAll().find(({id}) => id == idHotel)
};

module.exports = hotel;

/*module.exports.hotel = {
  findAll: findAll,
  findById: findById
}*/

