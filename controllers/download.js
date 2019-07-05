exports.download = (req, res, next) => {
  res.download('./story.html', function(err) {
    if (err) {
      console.log(err);
    } else {
      next();
    }
  });
}