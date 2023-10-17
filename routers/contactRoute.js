import { Router } from "express";
const route = Router();
import { sendEmail } from "../controllers/contactController.js";
import { validateContactInfo } from "../middleware/validationMiddleware.js";

route.post("/contact", validateContactInfo, sendEmail);

export default route;
