"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async create(createProductDto) {
        const products = this.productsRepository.create(createProductDto);
        await this.productsRepository.save(products);
        return products;
    }
    findAll() {
        return this.productsRepository.find();
    }
    findOne(id) {
        return this.productsRepository.findOne({
            where: { id }
        });
    }
    async updateProducts(id, products) {
        await this.productsRepository.update(id, products);
    }
    remove(id) {
        this.productsRepository.delete(id);
        return "Eliminado";
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map