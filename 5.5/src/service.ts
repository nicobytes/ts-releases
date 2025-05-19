class ProductService {
    #limit: number;
    #products: string[];

    constructor(products:string[], limit:number) {
        this.#products = products;
        this.#limit = limit;
    }

    addProduct(newProduct: string) {
        if (this.#checkLimit()) {
            this.#products.push(newProduct);
        }
        return this.#products;
    }

    #checkLimit() {
        return this.#products.length < this.#limit;
    }
}

const pService = new ProductService(['Apple', 'Banana'], 5);
/*
service.#products = [];
service.#checkLimit();
*/
console.log(pService.addProduct('Orange')); //