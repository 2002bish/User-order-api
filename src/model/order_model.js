import mongoose, {Schema} from "mongoose";


const orderScheme= new Schema(
    { 
        User: {
            type: String,
            require: true,
        },
        product: {
            productId: String,
            quantity: Number,
            price: Number,
        },
        status: {
            type: String,
            enum: ["Pending","Shipped","Delivered"],
            defult: ["Pending"]
        },
        paymentstatus: {
            type: String,
            enum: ["pending", "completed", "failed"],
            defult: ["pending"]
        },
timestamp: true,
})
export const Order = mongoose.model("Order", orderSchema)