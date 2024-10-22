import { Request, Response } from "express";

// Get INR Balance
export const getInrBalances = (req: Request, res: Response) => {
  console.log("GEt inr balance");
  res.status(200).send({ message: "Get inr balance" });
};

// Get INR Balance by User Id
export const getInrBalanceByUserId = (req: Request, res: Response) => {
  console.log("GEt inr balance by id");
  res.status(200).send({ message: "Get inr balance by id" });
};

// Get Stock Balance
export const getStockBalances = (req: Request, res: Response) => {
  console.log("GEt stock balance ");
  res.send({ message: "get stock balances" });
};

// Get Stock Balance By User Id
export const getStockBalancebyUserId = (req: Request, res: Response) => {
  console.log("GEt stock balance by id ");
  res.send({ message: "get stock balances by id" });
};

// Om Ramp Wallet
export const onRamp = (req: Request, res: Response) => {
  console.log("On ramp");
  res.status(200).send({
    message: `Onramped `,
  });
};
