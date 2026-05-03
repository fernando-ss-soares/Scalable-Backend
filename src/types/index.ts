interface CreateProductInterface {
  name: string;
  price: number;
  description: string;
}

interface ListProductInterface extends CreateProductInterface {
  id: string;
  createdAt: Date;
}

interface UpdateProductInterface {
  name?: string;
  price?: number;
  description?: string;
}

interface DeleteProductInterface {
  id: string;
}

export type {
  CreateProductInterface,
  ListProductInterface,
  UpdateProductInterface,
  DeleteProductInterface,
};
