import * as z from 'zod';

export const ListProductSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().optional(),
    createdAt: z.date(),
});

export type Product = z.infer<typeof ListProductSchema>;

export const CreateProductSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().min(1),
});

export type CreateProductInput = z.infer<typeof CreateProductSchema>;

export const GetProductsSchema = z.object({
    skip: z.number().nonnegative().default(0),
    limit: z.number().positive().max(100).default(10),
});

export type GetProductsInput = z.infer<typeof GetProductsSchema>;

export const UpdateProductSchema = z.object({
    name: z.string().min(1).optional(),
    price: z.number().positive().optional(),
    description: z.string().optional(),
});

export type UpdateProductInput = z.infer<typeof UpdateProductSchema>;

export const DeleteProductSchema = z.object({
    id: z.string().uuid(),
});

export type DeleteProductInput = z.infer<typeof DeleteProductSchema>;