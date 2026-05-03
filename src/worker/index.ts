import { Worker } from "bullmq";
import { redis } from "../configuration/redis";
import { prisma } from "../configuration/db";

const worker = new Worker(
  "registerProduct",
  async (job) => {
    const { name, price, description } = job.data.product;

    const product = await prisma.product.create({
      data: { name, price, description },
    });

    return product;
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
