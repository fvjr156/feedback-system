import { Router } from "express";
import { GET_FormByID, GET_Forms, GET_ResponseByID, GET_Responses, GET_Test, POST_SubmitForm } from "../controllers/server_controller.mjs";
const router = Router();

router.get("", GET_Test);
router.get("/", GET_Test);
router.get("/forms", GET_Forms)
router.get("/responses", GET_Responses)
router.get("/formbyid", GET_FormByID)
router.get("/responsebyid", GET_ResponseByID)
router.post("/submit-form", POST_SubmitForm)

export default router;
