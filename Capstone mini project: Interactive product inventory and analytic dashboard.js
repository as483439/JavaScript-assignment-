
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

// Take input from user
let productName = prompt("Enter new product name:");
let productPrice = Number(prompt("Enter product price:"));

// Validate input
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input. Please enter a product name and a positive price.");
} else {
    // Add new product
    const newProduct = {
        name: productName.trim(),
        price: productPrice
    };

    products.push(newProduct);

    // Assign category using if...else
    function getCategory(price) {
        if (price < 100) {
            return "Budget";
        } else if (price < 200) {
            return "Standard";
        } else {
            return "Premium";
        }
    }

    // Use switch to display category
    function showCategory(category) {
        switch (category) {
            case "Budget":
                return "Budget";
            case "Standard":
                return "Standard";
            case "Premium":
                return "Premium";
            default:
                return "Unknown";
        }
    }

    console.log("\n--- Processing Inventory Roster (forEach) ---");

    products.forEach(product => {
        const category = getCategory(product.price);

        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${showCategory(category)}`
        );
    });

    // Regular function: total inventory value
    function calculateTotal(items) {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].price <= 0) {
                continue;
            }

            total += items[i].price;

            if (i === items.length - 1) {
                break;
            }
        }

        return total;
    }

    // Arrow function: apply tax and discount
    const calculateFinalPrice = (
        total,
        taxRate = 0,
        discountRate = 0
    ) => {
        return total * (1 + taxRate / 100) *
            (1 - discountRate / 100);
    };

    // Filter products under $200
    const affordableItems = products.filter(
        product => product.price < 200
    );

    // Map products into a formatted report
    const report = products.map(
        product =>
            `${product.name.toUpperCase()}: $${product.price}`
    );

    console.log("\n--- Financial Analytics ---");

    const total = calculateTotal(products);

    console.log("Total Inventory Value: $" + total);

    console.log(
        'Filtered Affordable Items (Under $200): ' +
        JSON.stringify(affordableItems.map(product => product.name))
    );

    console.log(
        "Formatted Report List: " + JSON.stringify(report)
    );

    console.log(
        "Total after 10% tax and 5% discount: $" +
        calculateFinalPrice(total, 10, 5).toFixed(2)
    );
}
