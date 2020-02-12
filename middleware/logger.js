

module.exports = (req,res,next)=>{
    console.log('request info',req.method,req.path);
    next();
  
  };
  /**
   *console.log the request
   *  req.metod
   * req.path
   */