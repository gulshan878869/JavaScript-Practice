function paymentStatus(status) {
    if (status === true) {
        return "Payment Successful";
    } else {
        return "Payment Failed";
    }
}

console.log(paymentStatus(true));