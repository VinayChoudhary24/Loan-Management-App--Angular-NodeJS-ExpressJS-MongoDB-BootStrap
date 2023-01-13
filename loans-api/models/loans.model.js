// Initialize Mongoose 
const mongoose = require('mongoose');

// Define Schema in mongoose Types for DB
const loanSchema = mongoose.Schema({
    loanAccountNumber: String,
    name: String,
    loanType: String,
    loanAmount: Number,
    interestRate: Number,
    loanIssueDate: Date,
    loanTenure: Number,
    paidInstalment: String,
    overdueInstalment: String,
    futureInstalment: String,
    loanStatus: String,  //It Will be of Type Enum
});

// Export loanModel
const loanModel = mongoose.model('Loans', loanSchema);

module.exports = loanModel;