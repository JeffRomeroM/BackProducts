import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<Products>;
    findAll(): Promise<Products[]>;
    findOne(id: string): Promise<Products>;
    updateProducts(id: string, products: Products): Promise<void>;
    remove(id: string): string;
}
