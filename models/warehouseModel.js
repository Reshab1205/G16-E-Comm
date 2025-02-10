const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
   mode_of_payment:{type:String, enum:["UPI","CASH","CREDIT_CARD", "DEBIT_CARD", "NET_BANKING", "EMI", "PAY_LATER", "WALLETS", "GIFT_CARD", "SUPER_COINS"]},
   credit_card_details:{
    card_number:{type:Number, unique:true},
    CVV:{type:Number},
    expiry_date:{type:String},
    card_holder_name:{type:String}
   },
   debit_card_details:{
    card_number:{type:Number, unique:true},
    CVV:{type:Number},
    expiry_date:{type:String},
    card_holder_name:{type:String}
   }
}, {timestamps:true})

const feedbackSchema = new mongoose.Schema({
    feedback_description:{type:String},
    ratings:{type:Number},
}, {timestamps:true})

const warehouse_person = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String},
    email: {type:String, unique:true, required:true},
    mobile_number: {type:Number,unique:true, required:true},
}, {timestamps:true})

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

const warehouseSchema = new mongoose.Schema({
    warehouse_id:{type:String, unique:true},
    warehouse_name:{type:String},
    warehouse_official_contact_number_postal_code:{type:String},
    warehouse_official_contact_number:{type:Number},
    warehouse_official_email:{type:String},
    warehouse_website:{type:String},
    warehouse_states_availability:[{type:String}],
    warehouse_delivery_service_type:[{type:String}],
    warehouse_costing_type:[{type:String}],
    warehouse_feedback:[feedbackSchema],
    warehouse_gst_number:{type:String, unique:true, required:true},
    warehouse_gst_verification_status:{type:String, enum:["Done", "Pending", "Blocked", "Not_Verified"], default:"Not_Verified"},
    warehouse_payment:[paymentSchema],
    warehouse_insurance:{type:String},
    warehouse_person:[warehouse_person],
    warehouse_address: [addressSchema]
}, {timestamps:true})


module.exports = mongoose.model('warehouse', warehouseSchema)