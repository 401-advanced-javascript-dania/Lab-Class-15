  

const supergoose = require('@code-fellows/supergoose');
const categories = require('../models/categories/categories-model.js');
let testObj = {name:'test'};
describe('Categories Model',()=>{
  it('can create() a new categories',()=>{
    return categories.create(testObj)
      .then(record=>{
        Object.keys(testObj).forEach(key=>{
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it ('can get() categories',()=>{
    return categories.get()
      .then(record=>{
        Object.keys(testObj).forEach(key=>{
          expect(record[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can update() a categories item',()=>{
    let obj = {name:'test categories'};
    return categories.create(obj)
      .then(record=>{
        categories.get(record._id);
        categories.update(record._id,record)
          .then(Item=>{
            Object.keys(obj).forEach(key=>{
              expect(Item[key]).toEqual(obj[key]);
            });
          });

      });

  });
  it('can delete() a categories item ',()=>{
    let obj = {name:'test categories'};
    return categories.create(obj)
      .then(record=>{
        categories.get(record._id);
        categories.delete(record._id)
          .then(Item=>{
            Object.keys(obj).forEach(key=>{
              expect(Item[key]).toEqual(obj[key]);

            });
          });

      });

  });
});