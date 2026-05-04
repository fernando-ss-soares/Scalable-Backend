import * as z from 'zod';

export const ListPaymentSchema = z.object({
    id: z.number().int(),
    amount: z.number().positive(),
    method: z.string().min(1),
    status: z.string().min(1),
    fraud: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type Payment = z.infer<typeof ListPaymentSchema>;

export const CreatePaymentSchema = z.object({
    amount: z.number().positive(),
    method: z.string().min(1),
    status: z.string().min(1),
    fraud: z.boolean(),
});

export type CreatePaymentInput = z.infer<typeof CreatePaymentSchema>;

export const GetPaymentsSchema = z.object({
    skip: z.number().nonnegative().default(0),
    limit: z.number().positive().max(100).default(10),
});

export type GetPaymentsInput = z.infer<typeof GetPaymentsSchema>;

export const UpdatePaymentSchema = z.object({
    amount: z.number().positive().optional(),
    method: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
    fraud: z.boolean().optional(),
});

export type UpdatePaymentInput = z.infer<typeof UpdatePaymentSchema>;

export const DeletePaymentSchema = z.object({
    id: z.number().int(),
});

export type DeletePaymentInput = z.infer<typeof DeletePaymentSchema>;