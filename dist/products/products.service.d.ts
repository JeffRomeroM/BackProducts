import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<Products>);
    create(createProductDto: CreateProductDto): Promise<Products>;
    findAll(): Promise<Products[]>;
    findOne(id: string): Promise<Products>;
    updateProducts(id: string, products: Products): Promise<void>;
    remove(id: string): string;
}
