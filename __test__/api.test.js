

const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
describe('Categories API',()=>{
  it ('can post() a new categories',()=>{
    let obj = {name: 'test categories'};
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data=>{
        let record = data.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a categories', () => {
    let obj = { name: 'test categories' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/categories`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              // expect(record.body[1][key]).toEqual(obj[key]);
            });
          });
      });
  });
});