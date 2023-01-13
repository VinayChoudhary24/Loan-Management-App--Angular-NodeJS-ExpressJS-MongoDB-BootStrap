// Initialize Mongoose 
const mongoose = require('mongoose');

// define Schema in Mongoose Types for DB i.e Connect with DB
const invoiceSchema = mongoose.Schema({
   paymentId: String,
   customerId: Number,
   customerName: String,
   amount: Number,
   tax: Number,
   mode: String,
   date: Date,
});

// Export the Schema
const invoiceModel = mongoose.model('Invoices', invoiceSchema);

module.exports = invoiceModel;