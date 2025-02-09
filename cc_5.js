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
