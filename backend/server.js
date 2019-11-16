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

db.sequelize.sync().then(() => {
  db.location.bulkCreate(
    [
      { name: 'Melbourne Airport', nominatimId: 146327231, latitude: -37.667111, longitude: 144.833480766796, type: 'Airport' },
      { name: 'Royal Yacht Club Of Victoria', nominatimId: 17535999, latitude: -37.8606788, longitude: 144.9072672, type: 'Marina' },
      { name: 'Royal Yacht Club Of Tasmania', nominatimId: 170109287, latitude: -42.89777645, longitude: 147.332481183092, type: 'Marina' },
      { name: 'Sydney Airport', nominatimId: 125329460, latitude: -33.9498935, longitude: 151.18196819346, type: 'Airport' },
      { name: 'Vught', nominatimId: 51682493, latitude: 51.6555908, longitude: 5.2921212, type: 'Train Station' },
      { name: 'Verkadefabriek', nominatimId: 138795946, latitude: 51.6957923, longitude: 5.29779645210143, type: 'Venue' },
      { name: '\'s-Hertogenbosch', nominatimId: 51855309, latitude: 51.6957923, longitude: 5.29779645210143, type: 'Train Station' },
      { name: 'Beukenlaan 2, Vught', nominatimId: 31558327, latitude: 51.6338126, longitude: 5.3001494, type: 'Address' }
    ]
  );
  db.person.bulkCreate(
    [
      { name: 'Alvaro' },
      { name: 'Milo' }
    ]
  );
  db.journey.bulkCreate(
    [
      { personId: 1, description: "Sailing involved" },
      { personId: 1, description: "Fly from here to there" },
      { personId: 2, description: "AI met Impact meeting" }
    ]
  );

  db.travel.bulkCreate(
    [
      { oneway: true, departedAt: "2019-01-12", arrivedAt: "2019-01-22", transport: 'Boat', journeyId: 1, departureLocation: 3, arrivalLocation: 2 },
      { oneway: false, departedAt: "2019-01-02", arrivedAt: "2019-01-04", transport: 'Plane', journeyId: 2, departureLocation: 1, arrivalLocation: 4 },
      { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 0, transport: 'Car', journeyId: 3, departureLocation: 8, arrivalLocation: 5 },
      { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 1, transport: 'Train', journeyId: 3, departureLocation: 5, arrivalLocation: 7 },
      { oneway: false, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 2, transport: 'Foot', journeyId: 3, departureLocation: 7, arrivalLocation: 6 },
      { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 3, transport: 'Train', journeyId: 3, departureLocation: 7, arrivalLocation: 5 },
      { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 4, transport: 'Car', journeyId: 3, departureLocation: 5, arrivalLocation: 8 }
    ]
  );

});
/**
   * Swagger
   */
app.use('/swagger.json', express.static('./config/swagger.json'))
const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./config/swagger.json')));

var server = app.listen(8080, () => console.log("Api listening on port 8080"));
module.exports = server;