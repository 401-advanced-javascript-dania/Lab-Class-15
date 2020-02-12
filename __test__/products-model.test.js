

const supergoose = require('@code-fellows/supergoose');
const products = require('../models/products/products-model.js');
let testObj = {names:'test',price:40,weight:30,quantity_in_stock:20};
describe('Products Model',()=>{
  it('can create() a product',()=>{
    return products.create(testObj)
      .then(record=>{
        Object.keys(testObj).forEach(key=>{
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it ('can get() a product',()=>{
    return products.get()
      .then(record=>{
        Object.keys(testObj).forEach(key=>{
          expect(record[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can update() a product item',()=>{
    let testObj = {names:'test',price:40,weight:30,quantity_in_stock:20};
    return products.create(testObj)
      .then(record=>{
        products.get(record._id);
        products.update(record._id,record)
          .then(Item=>{
            Object.keys(testObj).forEach(key=>{
              expect(Item[key]).toEqual(testObj[key]);
            });
          });

      });

  });
  it('can delete() a product item ',()=>{
    let testObj = {names:'test',price:40,weight:30,quantity_in_stock:20};
    return products.create(testObj)
      .then(record=>{
        products.get(record._id);
        products.delete(record._id)
          .then(Item=>{
            Object.keys(testObj).forEach(key=>{
              expect(Item[key]).toEqual(testObj[key]);

            });
          });

      });

  });
});