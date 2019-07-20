module.exports = ((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

