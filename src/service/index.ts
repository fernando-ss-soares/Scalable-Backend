import { prisma } from "../configuration/db";
import { registerPaymentQueue } from "../queue";
import type { CreatePaymentInterface } from "../types";

export const PaymentService = {
  getPayments: async ({ skip, limit }: { skip: number; limit: number }) => {
    try {
      const payments = await prisma.payments.findMany({
        skip,
        take: limit,
      });

      return Response.json(payments, { status: 200 });
    } catch (error) {
      return Response.json(
        { message: "Error fetching payments" },
        { status: 500 },
      );
    }
  },
  createPayment: async ({
    amount,
    method,
    status,
    fraud
  }: CreatePaymentInterface) => {
    try {
      await registerPaymentQueue.add(
        "registerPayment",
        {
          payment: { amount, method, status, fraud },
        },
        { attempts: 3, backoff: { type: "exponential", delay: 1000 } },
      );

      return Response.json(
        { message: "Payment received for registration" },
        { status: 202 },
      );
    } catch (error) {
      return Response.json(
        { message: "Error creating payment" },
        { status: 500 },
      );
    }
  },
};
