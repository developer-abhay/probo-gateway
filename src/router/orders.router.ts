import express from "express";

import forwardRequest from "../controllers";

const router = express.Router();

// Orders
router.post("/buy", (req, res) => {
  forwardRequest(req, res, "/order/buy");
});
router.post("/sell", (req, res) => {
  forwardRequest(req, res, "/order/sell");
});
router.post("/cancel", (req, res) => {
  forwardRequest(req, res, "/order/cancel");
});

export default router;
