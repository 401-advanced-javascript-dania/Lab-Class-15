/**
 *daynamic model
 *CRUD Method
 @parameter id or record
 *@returns this.schema.DBMethode
 */
class DataModel{
  constructor(schema){
    this.schema = schema;
  }
  get(id){
    if(id){
      return this.schema.findById(id);
    }else{
      return this.schema.find({});
    }
  }
  create(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
  update(id,record){
    return this.schema.findByIdAndUpdate(id,record,{new:true});
  }
  delete(id){
    return this.schema.findByIdAndDelete(id);
  }
}
module.exports = DataModel;