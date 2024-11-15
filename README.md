# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 

Additional Notes:
The function automatically checks for duplicate IDs when adding new vehicles or orders and increments the ID if necessary.

addNewOrder(newOrder): Add a new customer order. 
Takes a JSON object with properties: orderID, vehicleID, startEndDate, customerName, and contact.

addNewVehicle(newVehicle): Add a new vehicle to the fleet. Takes a JSON object with properties: vehicleID, type, brand, name, capacity, and status.

removeVehicle(vehicleID): Remove a vehicle from the fleet. Takes the vehicleID as an argument. (Note: Vehicles cannot be removed if they are currently in-use)

updateOrderContact(orderID, contact): Update the contact information for an existing order. Takes the orderID and the new contact information.

completeOrder(orderID): Mark an order as completed and remove it from the list. Takes the orderID as an argument. (This also updates the vehicle status back to available)

searchFleetForBrand(inputBrand): Filter and display vehicles based on a specific brand. Takes the brand name (inputBrand) as an argument.

viewFleet(): Display information about all vehicles in the fleet.
viewOrders(): Display information about all current customer orders.


The removeVehicle function prevents removing vehicles that are currently in-use.