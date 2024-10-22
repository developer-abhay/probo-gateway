import { Request, Response } from "express";

// Get order book
export const getOrderBook = (req: Request, res: Response) => {
  console.log("Order book");
  res.send({ message: "Order book" });
};

// View Buy and Sell Orders
export const viewOrders = (req: Request, res: Response) => {
  console.log("view orders");
  res.send({ message: "view orders" });
};

// Buy Order
export const buyOrder = (req: Request, res: Response) => {
  console.log("Buy order");
  res.status(200).send({
    message: `Buy order placed and trade executed`,
  });
};

// Sell Order
export const sellOrder = (req: Request, res: Response) => {
  console.log("Sell order");
  res.status(200).send({ message: "Sell order placed" });
};

// Cancel Order
export const cancelOrder = (req: Request, res: Response) => {
  console.log("Order Cancelled");
  res.send({ message: "Sell order canceled" });
};
