import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
   
    registration_no:{type:Number,required:true,unique:true},
    message:{type:String,required:true},
})
const contactmodel=mongoose.models.contact||mongoose.model('contact',contactSchema);
export default contactmodel;
