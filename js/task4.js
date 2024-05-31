let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

console.log("First Name:", + contact.firstName);
console.log("Last Name:", + contact.lastName);
console.log("Email:", + contact.email);
console.log("Phone:", + contact.phone);
console.log("Address:");
console.log("   Building:", + contact.address.building);
console.log("   Street:", + contact.address.street);
console.log("   City:", + contact.address.city);
console.log("   State:", + contact.address.state);
console.log("   Country:", + contact.address.country);
