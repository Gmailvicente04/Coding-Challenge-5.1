// Task 1: Object Properties

// Declare the customer object
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

// Log each property using console.log() and a template literal
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Task 2: Object Methods

// Declare the order object
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    
    // Method to display order details
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

// Call the method to log the details
order.displayOrder();


// Task 3: Array Manipulation (push, pop, shift, unshift)

// Declare the cartItems array with three product names
let cartItems = ["Cranberry Juice", "Cookies", "Steak"];

// Add a new product to the cart using .push()
cartItems.push("Grapes");

// Remove the last item using .pop()
cartItems.pop();

// Add an item at the beginning using .unshift()
cartItems.unshift("Mango");

// Remove the first item using .shift()
cartItems.shift();

// Log the final array to the console
console.log("Final Cart Items:", cartItems);

// Task 4: Map Method

// Declare an array of prices
let prices = [100, 200, 300];

// Apply a 10% discount using .map()
let discountedPrices = prices.map(price => price * 0.9);

// Log the new discounted prices to the console
console.log("Discounted Prices:", discountedPrices);


// Task 5: Filter Method

// Declare an array of inventory with product quantities
let inventory = [5, 0, 12, 8, 0];

// Use the .filter() method to remove products with zero stock
let availableInventory = inventory.filter(quantity => quantity > 0);

// Log the filtered array to the console
console.log("Available Inventory:", availableInventory);

// Task 6: Reduce Method

// Declare an array of sales
let sales = [500, 300, 200, 400];

// Use the .reduce() method to calculate total revenue
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);

// Log the total revenue to the console
console.log("Total Revenue:", totalRevenue);

// Task 7: find() Method

// Declare an array of customers
let customers = ["Alice", "Bob", "Jayson Tatum", "David"];

// Use the .find() method to locate the customer "Jayson Tatum"
let foundCustomer = customers.find(customer => customer === "Jayson Tatum");

// Log the result to the console
console.log("Found Customer:", foundCustomer);

// Task 8: Function Declaration

// Function to calculate tax
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Calculated Tax: $${tax}`);
    return tax;
}

// Example usage
calculateTax(500, 0.07);

// Task 9: Function Expression

// Declare a function expression to apply discount
const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
};

// Example usage
applyDiscount(500, 0.15);


// Task 10: Loyalty Function
// Write an arrow function calculatePoints(purchaseAmount).
//Return 1 point per $10 spent and log the result.
const calculatePoints = purchaseAmount => {
    let points = Math.floor(purchaseAmount / 10);
    console.log(`Points Earned: ${points}`);
    return points;
};
// Example usage 
calculatePoints(150);
