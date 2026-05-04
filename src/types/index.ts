interface CreatePaymentInterface {
  amount: number;
  method: string;
  status: string;
  fraud: boolean;
}

interface ListPaymentInterface extends CreatePaymentInterface {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface UpdatePaymentInterface {
  amount?: number;
  method?: string;
  status?: string;
  fraud?: boolean;
}

interface DeletePaymentInterface {
  id: number;
}

export type {
  CreatePaymentInterface,
  ListPaymentInterface,
  UpdatePaymentInterface,
  DeletePaymentInterface,
};
