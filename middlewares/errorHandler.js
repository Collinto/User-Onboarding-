const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
