import { Router } from "express";
import { checkoutController } from "../controllers/checkout.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);
router.post("/", checkoutController.create);

export default router;
