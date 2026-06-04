function orderStatus(status) {
    if (status === "Pending") {
        return "Order is being processed";
    } else if (status === "Shipped") {
        return "Order has been shipped";
    } else if (status === "Delivered") {
        return "Order delivered successfully";
    } else {
        return "Invalid Status";
    }
}

console.log(orderStatus("Shipped"));