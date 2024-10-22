import { createClient } from "redis";

const client = createClient();
export const subscriber = createClient();

// Connect To redis
export const connectToRedis = async () => {
  try {
    await client.connect();
    await subscriber.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Failed to connect to REdis");
  }
};

// push to queue function
export const pushToQueue = async (queueName: string, data: string) => {
  try {
    await client.lPush(queueName, data);
    console.log(`Data pushed to queue: ${queueName}`);
  } catch (error) {
    console.error(error);
  }
};
