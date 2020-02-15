// bearer means i own this token
const Users = require ('./users.js');

let bearerAuthMiddleware = function(req,res,next){

  if(!req.headers.authorization){ next('cannot login');}

  let tokenForBearer = req.headers.authorization.split(' ').pop();
  console.log('req.headers.authorization',tokenForBearer);

  // to check my token
  Users.tokenAthenticate(tokenForBearer)
    .then(goodUser => {
      req.user = goodUser;
      next();
    }).catch(err => next(err));

};
module.exports = bearerAuthMiddleware;