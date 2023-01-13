# MEAN - Loan Management System

  # Create Two Different Folder/Repos i.e loans-ui for Frontend and loans-api for Backend
     ##Frontend -- loans-ui
       #1-- Installing Angular, Create loans-ui App and Installing Bootstrap, jQuery
          *inside loans-ui install Angular i.e cd loans-ui, -npm i @angular/cli
          *create new angular app -ng new loans-ui
          *Install Bootstrap -npm i bootstrap@5
          *Install jQuery -npm i jquery --save
          *Add STYLES[] and SCRIPTS[] in angular.json File --  "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

       #2-- Building the Navbar in app.component.html
          *Delete Everything inside app.component.html and just leave router-outlet
          *For Testing--getbootstrap.com/docs/5.0/components/navbar/ and Copy Navabar code and Paste inside the app.component.html
        
       #3-- Building Frontend Site Framework i.e Header, Footer, Sidebar and Main Content Area
          *Delete Everything inside app.component.html and just leave router-outlet
             ##HEADER 
                *cd loans-ui, cd loans-ui, -ng g c header
             ##SIDEBAR 
                * -ng g c sidebar
                *Add SVG Icons in Sidebar
                *https://www.svgrepo.com/svg 
             ##FOOTER 
                * -ng g c footer
          *Add/Render All Components in app.component.html with Their Selectors

       #4-- Setting-up Module and Routing, Authentication
            --set the Lazy Loading Modules 
                        -ng g module customers --route customer --module app.module
                        -ng g module payments --route payments --module app.module
                        -ng g module invoices --route invoices --module app.module
                        -ng g module loans --route loans --module app.module
                        -ng g module settings --route settings --module app.module
                        -ng g module loan-types --route loan-types --module app.module
                        -ng g module reports --route reports --module app.module
                        -ng g module audit-log --route activity-audit --module app.module
            --Auth -ng g module auth
                     --ng g c auth/new-user
                     --ng g c auth/login
                     --ng g c auth/forgot-password
                     --ng g c auth/logout
                     --ng g c dashboard
                     -- ng g c page-not-found
            --Routing for Modules
            --Enable Active Routing 
                        --routerLinkActive=true 
                        --.sidebar .nav-link.active {
                                                      color: #2470dc;
                                                    } 

       #5-- Design/Build Components Templates Screens i.e customers, settings, reports, .....
                 ---ng g c customers/list-customers
                 ---ng g c customers/add-customer
                 ---ng g c customers/edit-customer
                 ---ng g c customers/delete-customer
                 ---ng g c customers/search-customer
         

     
     ##Backend -- loans-api
       #1-- Express Application generator
           *inside loans-api -npx express-generator
           *Run -npm install

       #2-- Creating MongoDB, Schemas and Models
            *Create MongoDB --Download Compass and Create a New Cluster,Database in MongoDB Atlas
                        --In Database Section inside Cluster CLICK on CONNECT, Choose MongoDB Compass Version and Copy-Paste the Provided URI
                        --Open Compass and Paste the Provided URI with PASSWORD for user Created and Save Fav. and Connect.
                        --Inside Compass Create Database Required 
            *Create Models
                    --Install Mongoose to Connect with MongoDB -npm i mongoose 
                    --Interface for USERS, LOANS, PAYMENTS, INVOICES, CUSTOMERS, SETTINGS, AUDITLOGS inside Models Folder.
            *Create Collections
            *Create Schemas

       #3-- Create Routes for all models
                  --Inside Route Folder i.e customer, loan, user, payments, invoices, customer, settings, audit...
                  --After Creating router.js IMPORT all the routes in app.js i.e var usersRouter = require('./routes/users');
                  --Import Each Model in Respective routes

       #4-- Customers API - CRUD Developement
             --Creating Customer Controller and Customer Routes 
             --Creating the link/Connection --Connecting to mongoDB via ExpressJS in loans-api/app.js
                            -var mongoose = require('mongoose');
                            -mongoose.connect('mongodb://localhost:Madani-Loan-Management');
                            --To Request MongoDB from customer.router.js
                                app.use('/customer', customersRouter);
             --Create Customer routes in customer.router.js -Read Customer, Update, Delete, Find All, Search Customer
             --


