import { ProductController } from "../../controller";

export const productRoutes = {
  "/products": {
    GET: (req: Request) => ProductController.getProducts(req),
    POST: (req: Request) => ProductController.createProduct(req)
  },
};
