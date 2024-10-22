import express, { Response } from "express";
import {
  getInrBalanceByUserId,
  getInrBalances,
  getStockBalancebyUserId,
  getStockBalances,
  onRamp,
} from "../controllers/balance";
import {
  buyOrder,
  cancelOrder,
  getOrderBook,
  sellOrder,
  viewOrders,
} from "../controllers/orders";
import forwardRequest from "../controllers";

const router = express.Router();

// Create user and Symbol
router.post("/user/create/:userId", (req, res) => {
  forwardRequest(req, res, "/user/create/:userId");
});
router.post("/symbol/create/:stockSymbol", (req, res) => {
  forwardRequest(req, res, "/symbol/create/:stockSymbol");
});
router.post("/trade/mint", (req, res) => {
  forwardRequest(req, res, "/trade/mint");
});
router.post("/reset", (req, res) => {
  forwardRequest(req, res, "/reset");
});

// Balances
router.get("/balances/inr", getInrBalances);
router.get("/balances/inr/:userId", getInrBalanceByUserId);
router.get("/balances/stock", getStockBalances);
router.get("/balances/stock/:userId", getStockBalancebyUserId);
router.post("/onramp/inr", onRamp);

// Orders
router.get("/orderbook", getOrderBook);
router.get("/orderbook/:stockSymbol", viewOrders);
router.post("/order/buy", buyOrder);
router.post("/order/sell", sellOrder);
router.post("/order/cancel", cancelOrder);

export default router;
