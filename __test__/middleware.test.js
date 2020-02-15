// i tooke it from actually upone  Mr Brian premission  [](https://github.com/401-advanced-javascript-dania/amman-javascript-401d1/blob/master/class-07/demo/api-server/__test__/lib/logger.test.js)
const logger = require('../middleware/logger.js');
describe('logger middleware',()=>{
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() =>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  });
  afterEach(()=>{
    consoleSpy.mockRestore();
  });
  it('properly logs some ouput',()=>{
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('properly moves to the next middleware',()=>{
    logger(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
});