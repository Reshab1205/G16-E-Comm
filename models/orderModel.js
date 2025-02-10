const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    feedback_description:{type:String},
    ratings:{type:Number}
}, {timestamps:true})



const orderSchema = new mongoose.Schema({

    order_id: {type:String, required:true, unique:true},
    user_id: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    seller_id: [{type:mongoose.Schema.Types.ObjectId, ref:'seller'}],
    product_id: [{type:mongoose.Schema.Types.ObjectId, ref:'product'}],
    total_amount:{type:Number},
    order_expected_delivery_date:{type:Date},
    order_delivered_date:{type:Date},
    order_status:{type:String, enum:["Pending", "Confirmed", "Shipped", "InTransit", "Reached_Nearest", "Out_for_delivery", "Delivered", "Not_Received", "Delayed", "Cancelled", "Cancelled_by_user", "Cancelled_by_seller", "Return", "Refund"]},
    order_payment_status:{type:String, enum:["Prepaid", "COD"]},
    minimum_billing_amount:{type:Number},
    order_feedback:[feedbackSchema]



}, {timestamps:true})

module.exports = mongoose.model('order', orderSchema)