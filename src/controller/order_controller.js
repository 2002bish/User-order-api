import Order, { findById } from "../model/order_model.js";

const placeOrder = async (req, res) => {
  try {
    const order = new Order({ user: req.user._id, products: req.body.products });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error placing order" });
  }
};

const trackOrder = async (req, res) => {
  try {
    const order = await findById(req.params.orderId);
    if (order && order.user.toString() === req.user._id.toString()) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error tracking order" });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    const order = await findById(req.params.orderId);
    if (order && order.user.toString() === req.user._id.toString()) {
      order.paymentStatus = req.body.paymentStatus;
      await order.save();
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating payment status" });
  }
};

exports = { placeOrder, trackOrder, updatePaymentStatus }
