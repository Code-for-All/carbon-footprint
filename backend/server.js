import express from "express";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

import cors from "cors";
import bodyParser from "body-parser";

import db from "./models";
import apiJourney from "./api/journey";
import apiTravel from "./api/travel";
import apiPerson from "./api/person";
import apiLocation from "./api/location";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.auth.domain}/.well-known/jwks.json`
  }),

  audience: config.auth.audience,
  issuer: `https://${config.auth.domain}/`,
  algorithm: ["RS256"]
});




app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

apiJourney(app, checkJwt, db);
apiTravel(app, checkJwt, db);
apiPerson(app, checkJwt, db);
apiLocation(app, checkJwt, db);

//db.sequelize.sync().then(() => {
  

//});
/**
   * Swagger
   */
app.use('/swagger.json', express.static('./config/swagger.json'))
const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./config/swagger.json')));

var server = app.listen(8080, () => console.log("Api listening on port 8080"));
module.exports = server;