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
        startEndDate: ["10/11/2024", "15/11/2024"],
        customerName: "Max Verstappen",
        contact: 12345678
    }
]



module.exports = {

    // Add new customer order
    addNewOrder(newOrder) {
        let duplicateID = orders.find(id => id.orderID == newOrder.orderID);
        while (duplicateID) {
            newOrder.orderID += 1;
            let duplicateID = orders.find(id => id.orderID == newOrder.orderID);
            if (!duplicateID) {
                break
            }
        }
        orders.push(newOrder);
        this.viewOrders();

        let index = vehicleFleet.findIndex(id => id.vehicleID == newOrder.vehicleID);
        vehicleFleet[index].status = `in-use by Order ${newOrder.orderID}`;
        this.viewFleet();
    },

    // Add new vehicle to fleet
    addNewVehicle(newVehicle) {
        let duplicateID = vehicleFleet.find(id => id.vehicleID == newVehicle.vehicleID);
        while (duplicateID) {
            newVehicle.vehicleID += 1;
            let duplicateID = vehicleFleet.find(id => id.vehicleID == newVehicle.vehicleID);
            if (!duplicateID) {
                break
            }
        }
        vehicleFleet.push(newVehicle);
        this.viewFleet();
    },

    // Approve an order as completed
    completeOrder(orderID) {
        let index = orders.findIndex(id => id.orderID == orderID);
        orders.splice(index, 1);
        this.viewOrders();

        let vehicleID = orders[index].vehicleID;
        let vehicleIndex = vehicleFleet.findIndex(id => id.vehicleID == vehicleID);
        vehicleFleet[vehicleIndex].status = `available`;
        this.viewFleet();
    },
    
    searchFleetForBrand(inputBrand) {
        const brandSearch = vehicleFleet.filter(fleet => fleet.brand == inputBrand);
        console.log(brandSearch);
    },

    // View all vehicles in the fleet
    viewFleet() {
        console.log(vehicleFleet);
    },
    viewOrders() {
        console.log(orders);
    }
    
}