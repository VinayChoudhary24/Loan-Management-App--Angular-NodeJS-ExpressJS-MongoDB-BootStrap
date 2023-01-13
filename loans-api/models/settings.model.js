// Initialize Mongoose 
const mongoose = require('mongoose');

// define Schema in Mongoose Types for DB i.e Connect with DB
const settingSchema = mongoose.Schema({
    paymentSetting: Array,
    securitySetting: Array,
    termsOfService: String,
    privacyPolicy: String,
});

// Export the Schema
const settingModel = mongoose.model('Settings', settingSchema);

module.exports = settingModel;