import { PaymentController } from "../../controller";

export const paymentRoutes = {
  "/payments": {
    GET: (req: Request) => PaymentController.getPayments(req),
    POST: (req: Request) => PaymentController.createPayment(req)
  },
};
