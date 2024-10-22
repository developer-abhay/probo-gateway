import { v4 as uuidv4 } from "uuid";
import { queueName } from "../config/Constants";
import { Request, Response } from "express";
import { pushToQueue, subscriber } from "../services/redis";

// forward request and wait for the response
const forwardRequest = async (
  req: Request,
  res: Response,
  endpoint: string
) => {
  const payload: QUEUE_DATA = {
    _id: uuidv4(),
    endpoint,
    req: { body: req.body, params: req.params },
  };

  try {
    // Push request to the queue
    await pushToQueue(queueName, JSON.stringify(payload));

    // Waiting for the response to get published on unique channel
    await new Promise((resolve) => {
      const callbackFunc = (message: string) => {
        const { statusCode, data } = JSON.parse(message);
        res.status(statusCode).send(data);
        subscriber.unsubscribe(payload._id, callbackFunc);
        resolve(undefined);
      };

      subscriber.subscribe(payload._id, callbackFunc);
    });

    return;
  } catch (error) {
    console.log(error);
  }
};

export default forwardRequest;
