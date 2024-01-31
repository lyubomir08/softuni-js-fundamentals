function orders(product, qnt) {
    let pricePerOneProduct = 0;

    if (product == 'coffee') {
        pricePerOneProduct = 1.50;
    } else if (product == 'coke') {
        pricePerOneProduct = 1.40;
    } else if (product == 'water') {
        pricePerOneProduct = 1.00;
    } else if (product == 'snacks') {
        pricePerOneProduct = 2.00;
    }

    let totalPrice =  pricePerOneProduct * qnt;

    console.log(totalPrice.toFixed(2));
}

orders("water", 5);
// orders("coffee", 2);