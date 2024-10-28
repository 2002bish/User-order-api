import { Router } from "express";
import User from "../controller/user_controller.js";
const { editProfile, viewOrderHistory } = User;
import auth from "../middleware/authmiddleware.js";

const router = Router();

router.route("/profile").put(auth, editProfile);
router.route("/orders").get(auth, viewOrderHistory);

export default router;
