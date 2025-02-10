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

const delivery_person = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String},
    email: {type:String, unique:true, required:true},
    mobile_number: {type:Number,unique:true, required:true},
}, {timestamps:true})

const delivery_partner = new mongoose.Schema({
    delivery_partner_id:{type:String, unique:true},
    delivery_partner_name:{type:String},
    delivery_partner_official_contact_number_postal_code:{type:String},
    delivery_partner_official_contact_number:{type:Number},
    delivery_partner_official_email:{type:String},
    delivery_partner_website:{type:String},
    delivery_partner_states_availability:[{type:String}],
    delivery_partner_delivery_service_type:[{type:String}],
    delivery_partner_costing_type:[{type:String}],
    delivery_partner_feedback:[feedbackSchema],
    delivery_partner_gst_number:{type:String, unique:true, required:true},
    delivery_partner_gst_verification_status:{type:String, enum:["Done", "Pending", "Blocked", "Not_Verified"], default:"Not_Verified"},
    delivery_partner_payment:[paymentSchema],
    delivery_partner_insurance:{type:String},
    delivery_partner_person:[delivery_person]

}, {timestamps:true})

const deliverySchema = new mongoose.Schema({
    order_id: {type:mongoose.Schema.Types.ObjectId, ref:'order'},
    seller_id: {type:mongoose.Schema.Types.ObjectId, ref:'seller'},
    delivery_partner_data: [delivery_partner],
    order_status:{type:String, enum:["Pending", "Confirmed", "Shipped", "InTransit", "Reached_Nearest", "Out_for_delivery", "Delivered", "Not_Received", "Delayed", "Cancelled", "Cancelled_by_user", "Cancelled_by_seller", "Return", "Refund"]},
    warehouse_hub_details:{type:mongoose.Schema.Types.ObjectId, ref:'warehouse'}

}, {timestamps:true})

module.exports = mongoose.model('delivery', deliverySchema)