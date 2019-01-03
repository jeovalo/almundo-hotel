var handleError = require('../error');
var bo = require('../middleware/hotel');
var express = require('express');
var router = express.Router();

router.get('/', bo.hotelsMiddleware, (req, res) =>{
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

router.get('/names', bo.hotelFindNameMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

router.get('/names/:name', bo.hotelFindNameMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

router.get('/:id', bo.hotelMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotel)
  }catch (error){
    handleError(error);
  }
});

router.post('/filter', bo.hotelFilterMiddleware, (req, res) => {
  try{
    res.status(200).json(req.hotels)
  }catch (error){
    handleError(error);
  }
});

module.exports = router;
