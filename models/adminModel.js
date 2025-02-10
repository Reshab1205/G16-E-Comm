const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    type_of_address:{type:String, enum:["Home", "Work", "Others"]},
    house_no:{type:Number},
    address_Line_1:{type:String},
    address_Line_2:{type:String},
    landmark:{type:String},
    city:{type:String},
    state:{type:String},
    pin_code:{type:Number},
    nation:{type:String, default:'Bharat'},
    alternate_mobile_number:{type:Number}

}, {timestamps:true})



const feedbackSchema = new mongoose.Schema({
    feedback_description:{type:String},
    ratings:{type:Number}
}, {timestamps:true})



const userSchema = new mongoose.Schema({

    first_name: {type:String, required:true},
    last_name: {type:String},
    email: {type:String, unique:true, required:true},
    mobile_number: {type:Number,unique:true, required:true},
    password: {type:String, required:true},
    address: [addressSchema],
    admin_feedback: [feedbackSchema],
    admin_roles:{type:String, enum:["Super_Admin", "Admin_L1", "Admin_L2"]}


}, {timestamps:true})

// Admin_L1:- Sales, Offers, Product monetisation, user feedbacks handling
// Admin_L2:- Handling Seller Data, Inventory Management, Delivery_Partner Management

module.exports = mongoose.model('user', userSchema)