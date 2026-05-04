import { Worker } from "bullmq";
import { redis } from "../configuration/redis";
import { prisma } from "../configuration/db";
import type { CreatePaymentInterface } from "../types";

const worker = new Worker(
  "registerPayment",
  async (job) => {
    const { amount, method, status, fraud }: CreatePaymentInterface =
      job.data.payment;

    const payment = await prisma.payments.create({
      data: { amount, method, status, fraud },
    });

    return payment;
  },
  { connection: redis },
);

worker.on("active", (job) => {
  console.log("Processing job:", job.id, "with data:", job.data);
});

worker.on("failed", (_job, err) => {
  console.error(`Failed with error:`, err);
});

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});
