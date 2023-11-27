function formatMoney(value) {
	return value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
}

const calculateTotalPay = (quantity, deadline) => {
    let total;

    if (quantity < 5000) {
        total = quantity * 1.5;
    } else if (quantity >= 5000 && quantity < 10000) {
        total = quantity * 1.4;
    } else if (quantity >= 10000 && quantity < 15000) {
        total = quantity * 1.3;
    } else {
        total = quantity * 1.2;
    }

    // Calculate deadline
    if (deadline === 6) {
        total *= 1.1;
    } else if (deadline === 12) {
        total *= 1.2;
    } else if (deadline === 24) {
        total *= 1.3;
    }

    return total;
};

export { formatMoney, calculateTotalPay };
