import { prisma } from "../configuration/db";
import { registerProductQueue } from "../queue";
import type { CreateProductInterface } from "../types";

export const ProductService = {
  getProducts: async ({ skip, limit }: { skip: number; limit: number }) => {
    try {
      const products = await prisma.product.findMany({
        skip,
        take: limit,
      });

      return Response.json(products, { status: 200 });
    } catch (error) {
      return Response.json(
        { message: "Error fetching products" },
        { status: 500 },
      );
    }
  },
  createProduct: async ({
    name,
    price,
    description,
  }: CreateProductInterface) => {
    try {
      await registerProductQueue.add(
        "registerProduct",
        {
          product: { name, price, description },
        },
        { attempts: 3, backoff: { type: "exponential", delay: 1000 } },
      );

      return Response.json(
        { message: "Product received for registration" },
        { status: 202 },
      );
    } catch (error) {
      return Response.json(
        { message: "Error creating product" },
        { status: 500 },
      );
    }
  },
};
