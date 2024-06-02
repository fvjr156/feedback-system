import { Router } from "express";
import {
  GET_FormByID,
  GET_Forms,
  GET_ResponseByID,
  GET_Responses,
  GET_Survey,
  GET_Test,
  POST_SubmitForm,
} from "../controllers/server_controller.mjs";
import {
  GET_FormsPageStats,
  GET_ResponsesPageStats,
} from "../controllers/data_visualization_operations.mjs";
const router = Router();

router.get("/healthcheck", function (req, res) {
  res.status(200).send("OK");
});
router.get("", GET_Test);
router.get("/", GET_Test);
router.get("/forms", GET_Forms);
router.get("/responses", GET_Responses);
router.get("/formbyid", GET_FormByID);
router.get("/responsebyid", GET_ResponseByID);
router.post("/submit-form", POST_SubmitForm);
router.get("/stats/forms", GET_FormsPageStats);
router.get("/stats/response", GET_ResponsesPageStats);
router.get("/survey", GET_Survey);

router.get("*", function (req, res) {
  res.status(404).send("Not found");
});

export default router;
