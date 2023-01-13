// Initialize Mongoose 
const mongoose = require('mongoose');

// define Schema in Mongoose Types for DB i.e Connect with DB
const paymentSchema = mongoose.Schema({
    loanAccountNumber: String,
    paymentId: String,
    paymentAmount: Number,
    emailAddress: String,
    phoneNumber: String,
    paymentDetails: String,
});

// Export the Schema
const paymentModel = mongoose.model('Payments', paymentSchema);

module.exports = paymentModel;