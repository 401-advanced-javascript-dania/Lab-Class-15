

const mongoose = require('mongoose');
require('../products/products-schema.js');
const categories = mongoose.Schema({
  name:{type:String,required:true },

},{toObject:{virtuals:true},toJSON:{virtuals:true}});
/**
 * do virtuals for categories with products
 */
categories.virtual('real products',{
  ref:'products',
  localField:'name',
  foreignField:'names',
  justOne:false,
});
/**
 * do the join with the other schema then go and findOne
 */
categories.pre('findOne',function(){
  try{
    this.populate('real products');
  }catch(e){
    console.error(e);

  }
});
module.exports = mongoose.model('categories',categories);