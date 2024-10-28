import { Router } from "express";
import { placeOrder, trackOrder, updatePaymentStatus } from "../controller/order_controller.js";
import auth from "../middleware/authmiddleware.js";

const router = Router();

router.route("/").post(auth, placeOrder);
router.route("/:orderId").get(auth, trackOrder).put(auth, updatePaymentStatus);

export default router;
