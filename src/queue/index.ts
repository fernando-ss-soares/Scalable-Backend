import { Queue } from "bullmq";
import { redis } from "../configuration/redis";

export const registerProductQueue = new Queue("registerProduct", { connection: redis });

export const updateProductQueue = new Queue("updateProduct", { connection: redis });

export const deleteProductQueue = new Queue("deleteProduct", { connection: redis });