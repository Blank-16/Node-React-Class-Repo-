// 1. Import the built-in events module
const EventEmitter = require('events');

// 2. Create a class that extends EventEmitter
// This allows our class to emit and listen for its own events
class OrderProcessor extends EventEmitter {
    
    constructor() {
        super();
    }

    // A method to simulate processing an order
    // It takes 'orderData' (object) and a 'callback' function
    processOrder(orderData, callback) {
        console.log(`\n[System] Starting order for ${orderData.item}...`);

        // EMIT EVENT: Notify listeners that processing has started
        this.emit('processing', orderData);

        // Simulate a delay (e.g., checking database, charging card)
        setTimeout(() => {
            
            const success = true; // Toggle this to false to test error handling

            if (success) {
                // EMIT EVENT: Notify listeners that shipping has started
                this.emit('shipping', orderData);
                
                // EXECUTE CALLBACK: The specific task is done, let the caller know
                callback(null, `Order ${orderData.id} completed successfully.`);
            } else {
                // EXECUTE CALLBACK: Return an error
                callback(new Error('Payment failed'));
            }

        }, 2000); // 2 second delay
    }
}

// --- USAGE IMPLEMENTATION ---

// 3. Instantiate the class
const myShop = new OrderProcessor();

// 4. Setup Event Listeners (Observers)
// These "listen" for specific signals. You can have multiple listeners for one event.

myShop.on('processing', (data) => {
    console.log(`   -> 📧 Email Service: Sending "Order Received" email to user.`);
});

myShop.on('processing', (data) => {
    console.log(`   -> 🏭 Warehouse: Checking stock for ${data.item}.`);
});

myShop.on('shipping', (data) => {
    console.log(`   -> 🚚 Logistics: Generating tracking number for Order ${data.id}.`);
});

// 5. Trigger the action
const newOrder = { id: 101, item: 'Laptop' };

myShop.processOrder(newOrder, (err, message) => {
    // This is the Callback function running at the very end
    if (err) {
        console.error(`[Error] ${err.message}`);
    } else {
        console.log(`[Success] ${message}`);
    }
});