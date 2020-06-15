// ====================== IMPORTS ======================
const app = require('express')();

// ====================== ROUTES ======================
const usersRoute = require(__dirname + '/./api/users');


// ====================== ADD ROUTES ======================
app.use('/users', usersRoute);


module.exports = app;