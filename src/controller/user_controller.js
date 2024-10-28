import { findByIdAndUpdate, findById } from "../model/user_model.js";

const editProfile = async (req, res) => {
  try {
    const user = await findByIdAndUpdate(req.user._id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
};

const viewOrderHistory = async (req, res) => {
  try {
    const user = await findById(req.user._id).populate("orders");
    res.status(200).json(user.orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order history" });
  }
};

export default { editProfile, viewOrderHistory };
