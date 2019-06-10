exports.download = (req, res, next) => {
  res.download('./stories.html', function(err) {
    if (err) {
      console.log(err);
    } else {
      next();
    }
  });
}