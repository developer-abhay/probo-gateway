import express from "express";
import forwardRequest from "../controllers";

const router = express.Router();

// Balances
router.get("/inr", (req, res) => {
  forwardRequest(req, res, "/balances/inr");
});
router.get("/inr/:userId", (req, res) => {
  forwardRequest(req, res, "/balances/inr/:uderId");
});
router.get("/stock", (req, res) => {
  forwardRequest(req, res, "/balances/stock");
});
router.get("/stock/:stockSymbol", (req, res) => {
  forwardRequest(req, res, "/balances/stock/:stockSymbol");
});

export default router;
