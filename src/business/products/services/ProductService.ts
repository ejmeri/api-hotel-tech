import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { ProductRepository } from '../repositories/ProductRepository';
import { Product } from '../models/Product';
import { ProductBedroom } from '../models/ProductBedroom';


@injectable()
export class ProductService {

    @inject(TYPES.ProductRepository)
    private readonly productRepository: ProductRepository;

    public async save(product: Product): Promise<ApiReturn> {
        var error = Product.validate(product);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.productRepository.save(product);

        return getResultOrError(response);
    }

    public async update(id: number, product: Product): Promise<ApiReturn> {
        var error = Product.validate(product);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.productRepository.update(id, product);

        return getResultOrError(response);
    }

    public async saveProductBedroom(productBedroom: ProductBedroom): Promise<ApiReturn> {
        var error = ProductBedroom.validate(productBedroom);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.productRepository.saveProductBedroom(productBedroom);

        return getResultOrError(response);
    }

    public async findByBedroom(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido.');

        var response = await this.productRepository.findProductBedroomByBedroomId(id);

        return getResultOrError(response);
    }

    public async findAll(): Promise<ApiReturn> {
        var response = await this.productRepository.findAll();
        return getResultOrError(response);
    }


}