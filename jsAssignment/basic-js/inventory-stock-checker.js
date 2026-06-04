function checkStock(stock) {
    if (stock > 0) {
        return "Product Available";
    } else {
        return "Out of Stock";
    }
}

console.log(checkStock(-15));