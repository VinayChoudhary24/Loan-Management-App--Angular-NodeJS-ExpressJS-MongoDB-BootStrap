var express = require('express');
var router = express.Router();

// 
var mongoose = require('mongoose');

// Get the customersModel
const customerModel = require('../models/customers.model')

/* GET All customers */
router.get('/list', function(req, res, next) {
  customerModel.find(function(err, customerListResponse) {
    // To Save this Data in MongoDB
    if(err) {
      res.send({status: 500, message: 'Unable to fetch Data...'});
    }else {
      const recordCount = customerListResponse.length;
      res.send({status: 200, recordCount: recordCount, results: customerListResponse});
    }
  });
  });

/* GET One Customer Details */
router.get('/view', function(req, res, next) {

  // Capture the ID
  const userId = req.query.userId;

  customerModel.findById(userId, function(err, customerResponse) {
    // To Save this Data in MongoDB
    if(err) {
      res.send({status: 500, message: 'Unable to find Customer Data...'});
    }else {
      res.send({status: 200, results: customerResponse});
    }
  });
});

/* POST/ Create New customer */
router.post('/add', function(req, res, next) {
   // Create the Instance of the customerModel
  // #It is Always same as the Model
  // This will be Stored in MongoDB
  let customerObj = new customerModel({
    customerId: 6566576,
    name: "Vinay Choudhary",
    emailAddress: "VC@gmail.com",
    phoneNumber: "+91287327823782",
    activeLoans: "2",
    productType: "Growth Plan",
    bankDetails: "@SBI-PHPH",
    address: "IU, HK",
  });

  // To Save this Data in MongoDB
  customerObj.save(function(err, customerObj) {
    if(err) {
      res.send({status: 500, message: 'Customer Data Not Saved..'});
    }else {
      res.send({status: 200, message: 'Customer Data Saved!!', customerDetails: customerObj});
    }
  });

});


/* PUT/ Update Existing customer */
router.put('/update', function(req, res, next) {
  // Capture the ID
  const userId = req.query.userId;

  let customerObj = {
    customerId: 6566,
    name: "Vinay",
    emailAddress: "VC24@gmail.com",
    phoneNumber: "+9128732",
    activeLoans: "22",
    productType: "Growth Plan-XL",
    bankDetails: "@SBI-OL-PHPH",
    address: "IU, HK, US",
  };

  //To Update Multiple Customers customerModel.update({'address': 'SDSDS'}) 
  customerModel.findByIdAndUpdate(userId, customerObj, function(err, customerResponse) {
    // To Save this Data in MongoDB
    if(err) {
      res.send({status: 500, message: 'Unable to Update Customer Data...'});
    }else {
      res.send({status: 200, results: customerResponse});
    }
  });
});


/* Delete/ Delete Existing customer */
router.delete('/delete', function(req, res, next) {
   // Capture the ID
   const userId = req.query.userId;

   customerModel.findByIdAndDelete(userId, function(err, customerResponse) {
     // To Save this Data in MongoDB
     if(err) {
       res.send({status: 500, message: 'Unable to Delete Customer Data...'});
     }else {
       res.send({status: 200, results: customerResponse});
     }
   });
});

/* Delete/ Delete Multiple Existing customer */
router.delete('/delete-many', function(req, res, next) {
  // Capture the ID
  const userId = req.query.userId;

  // Passing the Attribute to Delete
  customerModel.deleteMany({'name': 'Vinay Choudhary'}, function(err, customerResponse) {
    // To Save this Data in MongoDB
    if(err) {
      res.send({status: 500, message: 'Unable to Delete Customer Data...'});
    }else {
      res.send({status: 200, results: customerResponse});
    }
  });
});

/* GET/ Search Existing customer */
router.get('/search', function(req, res, next) {
  
});


module.exports = router;
