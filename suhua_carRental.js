const vehicleFleet = [
    {
        vehicleID: 1,
        type: "Sedan",
        brand: "BMW",
        name: "BMW M540i",
        capacity: 5,
        status: "available"
    },
    {
        vehicleID: 2,
        type: "Hyper",
        brand: "Lamborghini",
        name: "Lamborghini Aventador",
        capacity: 2,
        status: "in-use"
    },
]

const orders = [
    {
        orderID: 1001,
        vehicleID: 2,
        startEndDate: ["10/11/2024", "15/11/2024"],
        customerName: "Max Verstappen",
        contact: 12345678
    },
    {
        orderID: 1002,
        vehicleID: 2,
        startEndDate: ["20/11/2024", "25/11/2024"],
        customerName: "Max Verstappen",
        contact: 12345678
    }
]



module.exports = {

    // Add new customer order
    addNewOrder(newOrder) {
        let duplicateID = orders.find(id => id.orderID == newOrder.orderID); // Check if the orderID exists
        while (duplicateID) {
            newOrder.orderID += 1; // If the orderID exists, increment the ID so it doesn't duplicate
            // Check in case if the new ID exists
            let duplicateID = orders.find(id => id.orderID == newOrder.orderID);
            if (!duplicateID) {
                break
            }
        }
        orders.push(newOrder); 
        this.viewOrders();

        let index = vehicleFleet.findIndex(id => id.vehicleID == newOrder.vehicleID);
        vehicleFleet[index].status = `in-use`; // When new order is made, updates the vehicle status to "in-use"
        this.viewFleet();
    },

    // Add new vehicle to fleet
    addNewVehicle(newVehicle) {
        let duplicateID = vehicleFleet.find(id => id.vehicleID == newVehicle.vehicleID); 
        while (duplicateID) {
            newVehicle.vehicleID += 1; // If the vehicleID exists, increment the ID so it doesn't duplicate
            // Check in case if the new ID exists
            let duplicateID = vehicleFleet.find(id => id.vehicleID == newVehicle.vehicleID); 
            if (!duplicateID) {
                break
            }
        }
        vehicleFleet.push(newVehicle);
        this.viewFleet();
    },

    // Remove a vehicle from fleet
    removeVehicle(vehicleID) {
        let index = vehicleFleet.findIndex(id => id.vehicleID == vehicleID); 
        if (vehicleFleet[index].status != "available") { // Make sure the vehicle is not in-use before removing
            console.log("Unable to remove vehicle: Vehicle is in-use");
        }
        else {
            vehicleFleet.splice(index, 1); // Remove the order from array using JS splice method
            this.viewFleet();
        }
    },

    // Update customer contact
    updateOrderContact(orderID, contact) {
        let index = orders.findIndex(id => id.orderID == orderID); 
        orders[index].contact = contact; // Find the orderID and update the contact
    },

    // Approve an order as completed
    completeOrder(orderID) {
        let index = orders.findIndex(id => id.orderID == orderID);
        orders.splice(index, 1); // Remove the order from array using JS splice method
        this.viewOrders();

        let vehicleID = orders[index].vehicleID;
        let vehicleIndex = vehicleFleet.findIndex(id => id.vehicleID == vehicleID);
        vehicleFleet[vehicleIndex].status = `available`; // Updates the vehicle status to available after completing the order
        this.viewFleet();
    },
    
    // Filter the fleet for a specific brand
    searchFleetForBrand(inputBrand) {
        const brandSearch = vehicleFleet.filter(fleet => fleet.brand == inputBrand);
        console.log(brandSearch);
    },

    // View all vehicles in the fleet
    viewFleet() {
        console.log('Fleet:');
        vehicleFleet.forEach(vehicle => {
            console.log(`${vehicle.type} | ${vehicle.capacity} seater | ${vehicle.name} | Status: ${vehicle.status}`);
        });
        console.log('');
    },
    // View all active orders
    viewOrders() {
        console.log(orders);
        console.log('No. of orders: ' + orders.length);
        console.log('');
    }

}