// Initialize Mongoose 
const mongoose = require('mongoose');

// define Schema in Mongoose Types for DB i.e Connect with DB
const customerSchema = mongoose.Schema({
    customerId: Number,
    name: String,
    emailAddress: String,
    phoneNumber: String,
    activeLoans: String,
    productType: String,
    bankDetails: String,
    address: String,
});

// Export the Schema
const customerModel = mongoose.model('Customers', customerSchema);

module.exports = customerModel;