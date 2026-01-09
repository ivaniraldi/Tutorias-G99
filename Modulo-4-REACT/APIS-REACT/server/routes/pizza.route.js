import { Router } from "express";
import { pizzaController } from "../controllers/pizza.controller.js";

const router = Router();

router.get("/", pizzaController.readPizzas);
router.get("/:id", pizzaController.readPizza);

export default router;
