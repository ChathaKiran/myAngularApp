export interface IProduct
{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

//We can create a class for an Interface only if that class is going to provide some functionality.
export class Product implements IProduct
{
    constructor(
        productId: number,
        productName: string,
        productCode: string,
        releaseDate: string,
        description: string,
        price: number,
        starRating: number,
        imageUrl: string
    ){}
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}