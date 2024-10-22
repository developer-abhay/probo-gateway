import express from "express";
import forwardRequest from "../controllers";

const router = express.Router();

// Orderbook
router.get("/", (req, res) => {
  forwardRequest(req, res, "/orderbook");
});
router.get("/:stockSymbol", (req, res) => {
  forwardRequest(req, res, "/orderbook/:stockSymbol");
});

export default router;
