const rentalManagement = require("./suhua_carRental");
console.log("Startup successful");

rentalManagement.viewFleet();
rentalManagement.viewOrders();

console.log("Searching brand BMW...");
rentalManagement.searchFleetForBrand("BMW");

const newOrder = {
    orderID: 1001,
    vehicleID:1,
    startEndDate: ["20/11/2024", "25/11/2024"],
    customerName: "Lewis Hamilton",
    contact: 87654321
}
const newVehicle = {
    vehicleID: 2,
    type: "Hyper",
    brand: "McLaren",
    name: "Mclaren Senna",
    capacity: 2,
    status: "available"
}

// rentalManagement.addNewOrder(newOrder);
// rentalManagement.addNewVehicle(newVehicle);
rentalManagement.completeOrder(1001);

