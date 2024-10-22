import express, { Response } from "express";
import balanceRouter from "./balance.router";
import orderbookRouter from "./orderbook.router";
import ordersRouter from "./orders.router";

import forwardRequest from "../controllers";

const router = express.Router();

// Create user
router.post("/user/create/:userId", (req, res) => {
  forwardRequest(req, res, "/user/create/:userId");
});

// Create Symbol
router.post("/symbol/create/:stockSymbol", (req, res) => {
  forwardRequest(req, res, "/symbol/create/:stockSymbol");
});
// Mint tokens
router.post("/trade/mint", (req, res) => {
  forwardRequest(req, res, "/trade/mint");
});

// Reset database
router.post("/reset", (req, res) => {
  forwardRequest(req, res, "/reset");
});

// Balances
router.use("/balances", balanceRouter);

// Orderbook
router.use("/orderbook", orderbookRouter);

// Orders
router.use("/order", ordersRouter);

export default router;
