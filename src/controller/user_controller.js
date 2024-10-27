import { User } from "../model/user_model";

const editProfile= async (req, res) => {
    try {
        const user= await User.findByIdAndUpdate(req.user._id,req.body,{})
    }
}