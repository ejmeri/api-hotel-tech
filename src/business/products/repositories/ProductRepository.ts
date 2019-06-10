import { injectable } from "inversify";
import { Product } from '../models/Product';
import { ProductBedroom } from '../models/ProductBedroom';

@injectable()
export class ProductRepository {

    public async save(product: Product): Promise<Product> {
        return await Product.create(product);
    }

    public async findAll(): Promise<Product[]> {
        return await Product.findAll();
    }

    public async saveProductBedroom(productBedroom: ProductBedroom): Promise<ProductBedroom> {
        return await ProductBedroom.create(productBedroom);
    }

    public async findProductBedroomByBedroomId(bedroomId: number): Promise<ProductBedroom[]> {
        return await ProductBedroom.findAll({ where: { BedroomId: bedroomId } })
    }




    // public async findAll(): Promise<TelephoneType[]> {
    //     return await TelephoneType.findAll();
    // }
}