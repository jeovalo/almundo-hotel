const handleError = (error, res) =>{
  res.status(500).json({
    message: 'An error ocurred',
    error
  });
};

// module.exports = handleError;
module.exports.handleError = handleError;
