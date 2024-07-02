import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      size: { type: String, required: true },
      color: { type: String, required: true },
      name: { type: String, required: true },
      qty: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products',
        required:true,
      },
    },
  ],
  shippingAddress:{
    fullname:{type:String, },
    address:{type:String, },
    email:{
        type:String,trim:true,lowercase:true,
    },
    location:{type:String,},
    phoneNumber:{type:String,},
    shippingMethod:{type:String, },
    shippingCost:{type:String, required:true},
  },
  payments:{
    paymentMethod:{type:String},
    status:{type:sTring,default:'pending,required:true'},
    paymentDate:{type:Date},
    paymentResults
  }

  },
  {
    timestamps:true,
  }
});
