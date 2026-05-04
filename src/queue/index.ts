import { Queue } from "bullmq";
import { redis } from "../configuration/redis";

export const registerPaymentQueue = new Queue("registerPayment", { connection: redis });
    
export const updatePaymentQueue = new Queue("updatePayment", { connection: redis });

export const deletePaymentQueue = new Queue("deletePayment", { connection: redis });