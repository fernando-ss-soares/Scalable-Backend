import { CreateProductSchema, GetProductsSchema } from "../schema";
import { ProductService } from "../service";

export const ProductController = {
  getProducts: async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const skip = parseInt(searchParams.get("skip") || "0");
    const limit = parseInt(searchParams.get("limit") || "30");

    const isValid = GetProductsSchema.safeParse({ skip, limit });

    if (!isValid.success)
      return Response.json(
        { message: "Invalid query parameters" },
        { status: 400 },
      );

    return await ProductService.getProducts({ skip, limit });
  },
  createProduct: async (req: Request) => {
    const body = await req.json();

    const isValid = CreateProductSchema.safeParse(body);

    if (!isValid.success)
      return Response.json(
        { message: "Invalid product data" },
        { status: 400 },
      );

    return await ProductService.createProduct(isValid.data);
  },
};
