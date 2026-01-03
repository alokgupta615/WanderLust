module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// function wrapAysnc(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch(next);
//   };
// }
