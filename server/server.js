const express = require("express");
const app = express();
const routes = require(__dirname + "/routes/routes") ;
const {serverPORT, clientEndpoint} = require(__dirname + "/config/otherConfigs");
const helmet = require("helmet");

const client = process.env.CLIENT || clientEndpoint;

// ====================== HELMET ======================
app.use(helmet());

// ====================== MIDDLEWARE ======================
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

// ====================== CORS HEADERS ======================
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', client);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// ====================== ADD ROUTES ======================

app.use('/api', routes)
// ====================== CREATE SERVER ======================
const PORT = process.env.PORT || serverPORT;
app.listen(PORT, err => err ? console.log('Server ERROR...') : console.log('Server listening on port: ' + PORT))