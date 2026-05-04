import { CreatePaymentSchema, GetPaymentsSchema } from "../schema";
import { PaymentService } from "../service";

export const PaymentController = {
  getPayments: async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const skip = parseInt(searchParams.get("skip") || "0");
    const limit = parseInt(searchParams.get("limit") || "30");

    const isValid = GetPaymentsSchema.safeParse({ skip, limit });

    if (!isValid.success)
      return Response.json(
        { message: "Invalid query parameters" },
        { status: 400 },
      );

    return await PaymentService.getPayments({ skip, limit });
  },
  createPayment: async (req: Request) => {
    const body = await req.json();

    const isValid = CreatePaymentSchema.safeParse(body);

    if (!isValid.success)
      return Response.json(
        { message: "Invalid payment data" },
        { status: 400 },
      );

    return await PaymentService.createPayment(isValid.data);
  },
};
