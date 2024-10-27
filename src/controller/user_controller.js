import { User } from "../model/user_model";

const editProfile= async (req, res) => {
    try {
        const user= await User.findByIdAndUpdate(req.user._id,req.body,{new: true})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Error occur in profile "});
    }
};
const orderViewHiostory= async (req, res) => {
    try{
        const order= await User.findById(req.user._id).populate("orders");
        res.status(200).json(user.orders);
    }
    catch (error) {
        req.status(500).json({message: "Error factching order history"});
    }
}
export {
editProfile,
orderViewHiostory
}