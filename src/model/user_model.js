import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema= new Schema (
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase : true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        fullName: {
            type: String,
            require: true,
            trim: true,
            index: true

        },
        password: {
            type: String,
            require: [true, 'Password is required']

        },
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) 
        return next();
    this.password= await bcrypt.hash (this.password,10)
   next() 
})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)